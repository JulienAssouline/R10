import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import {styles} from "./styles"

const ModalView = (props) => {

  const handlePress = () => {
       Linking.openURL(props.speaker.url)
  }
  return (
    <View style={styles.speakerDescContainter}>
      <Image
        source={{uri: props.speaker.image}}
        style={{marginBottom: 10, marginTop: 10, alignSelf: "center", width: 150, height: 150, borderRadius: 150/2}}
      />
      <Text style = {{marginBottom: 20, marginTop: 20, alignSelf: "center", fontSize: 30 }}>{props.speaker.name} </Text>
      <Text
      style = {{padding: 20, alignSelf: "center", marginBottom: 20, fontWeight: "300", lineHeight: 35, fontSize: 23 }}>{props.speaker.bio} </Text>
      <TouchableOpacity onPress = {handlePress} style = {styles.wikipediaButton}>
        <Text style = {{fontSize: 23, fontWeight: "500", alignSelf: "center", color: "white"}}> Read More on Wikipedia </Text>
      </TouchableOpacity>
    </View>
    )
}

export default ModalView