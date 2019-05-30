import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from "./styles"
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import { nest } from "d3-collection";
import AsyncStorage from '@react-native-community/async-storage';
import msToTime from "./utils/msToTime"
import Heart from "./Heart"


const GET_All_SESSIONS = gql`
  {
  allSessions{
      id,
      title,
      startTime,
      description,
      location,
      speaker{
        id
      }
    }
  }
`;

const Schedule = (props) => {
  const {data, error, loading} = useQuery(GET_All_SESSIONS)

  if (loading) {
      return <Text>Loading...</Text>;
    };
    if (error) {
      return <Text>Error! {error.message}</Text>;
    };


  const handlePress = async (id) => {
    await AsyncStorage.setItem('@storage_Key', id)
    props.navigation.navigate("Session")
  }

data.allSessions.forEach((d,i) => {
  d.Time = msToTime(Date.parse(d.startTime))
})

const nestedData = nest()
  .key(d => d.Time)
  .entries(data.allSessions)

  return (
    <ScrollView>
     <View style={styles.container}>
        {
          nestedData.map((d,i) => (
            <View key = {"keys" + i}>
              <View style = {styles.sessionTime}>
                <Text style = {{ padding: 5, fontSize: 18}}>{d.key} </Text>
              </View>
              {
                d.values.map((j,i) => (
                  <View key = {"container" + i}>
                  <TouchableOpacity
                    key = {"values" + i}
                    style = {styles.sessionInfo}
                    onPress = {() => handlePress(j.speaker.id)}>
                    <Text style = {{fontSize: 22}}>{j.title} </Text>
                    <View style = {styles.heartLocationContainer}>
                      <Text style = {styles.sessionLocation}>{j.location} </Text>
                      <Heart key = {"heart-" + i} data = {j} />
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomColor: '#E8E8E8',
                      borderBottomWidth: 1,
                      alignSelf: "center",
                      margin: "auto",
                      width: '100%',
                    }}
                  />
                  </View>
                ))
              }
            </View>
          ))
        }

      </View>
    </ScrollView>
    )
}

export default Schedule