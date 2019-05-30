import React, { useState } from 'react';
import {TouchableHighlight, Modal, Text, View, Fragment, Image, ScrollView, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import {styles} from "./styles"
import msToTime from "./utils/msToTime"
import ModalView from "./ModalView"
import Icon from 'react-native-vector-icons/Feather';


const GET_SESSION = gql`
  query getSpeakerBySession($id: ID!) {
    Speaker(id: $id) {
        image,
        name,
        bio,
        url,
        session {
          title,
          startTime,
          description,
          location,
        }
      }
    }
  `;


function Session() {
  const [id, setId] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

   getData = async () => {
     try {
       const value = await AsyncStorage.getItem('@storage_Key')
       if(value !== undefined) {
         setId(value)
       }
     } catch(e) {
       // error reading value
     }
   }

 const displayModal = () => {
    setModalVisible(true)
  }

const removeModal = () => {
  setModalVisible(false)
}

  getData()

  const {data, error, loading} = useQuery(GET_SESSION, {variables: { id } })

  if (loading) {
      return <Text>Loading...</Text>;
    };
    if (error) {
      return <Text>Error! {error.message}</Text>;
    };

    const speaker = data.Speaker
    const startTime = msToTime(Date.parse(speaker.session.startTime))

    // console.log(speaker)

    const width = Dimensions.get("window").width


  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <ScrollView>
            <View style={styles.modalContainer}>
              <View style = {styles.modalTitleContainer}>
                <Icon
                  name= "x"
                  size={30}
                  color="white"
                  style = {{ paddingLeft: 10, color: "white"}}
                  onPress={removeModal}
                  />
                <Text style = {{marginLeft: width/4.5, color: "white", fontSize: 20, fontWeight: "bold"}}> About the Speaker </Text>
              </View>
              <ModalView speaker = {speaker} />
           </View>
         </ScrollView>
        </Modal>
        <View style= {styles.speakerSessionInfo}>
          <Text style = {styles.sessionLocation}>{speaker.session.location} </Text>
          <Text style = {{marginBottom: 10, fontSize: 30}}>{speaker.session.title} </Text>
          <Text style = {{marginBottom: 10, fontSize: 20, color: "red"}}>{startTime} </Text>
          <Text style = {{marginBottom: 10, fontWeight: "300", lineHeight: 35, fontSize: 25}}>{speaker.session.description} </Text>
        </View>
        <Text style = {styles.presentedText}>{"Presented by:"} </Text>
        <View style = {styles.speakerContainer}>
          <TouchableHighlight onPress = {displayModal}>
          <Image
            source={{uri: speaker.image}}
            style={{width: 80, height: 80, borderRadius: 80/2}}
          />
          </TouchableHighlight>
          <Text style = {styles.speakerName}>{speaker.name} </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            alignSelf: "center",
            margin: "auto",
            width: '90%',
          }}
        />
      </View>
    </ScrollView>
    )
}

export default Session