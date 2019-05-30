import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from "./styles"
import AsyncStorage from '@react-native-community/async-storage';

const Heart = (props) => {
const [fave, setFave] = useState(false)

 const handlePress = (e, sessionId) => {
  storeData(sessionId)

  if(fave) {
    setFave(false)
  } else {
    setFave(true)
  }
 }

 useEffect(() => {
  getData = async () => {
    try{
      const ids = await AsyncStorage.getItem('favList')
      if (ids !== undefined) {
        let idsObj = JSON.parse(ids) || {}
        setFave(idsObj[props.data.id])
      }
    }
    catch(e) {
       // error reading value
     }

 }

  getData()
 }, [props.data.id])

 storeData = async (id) => {
    try {
      const ids = await AsyncStorage.getItem('favList')
     let idsJSON = JSON.parse(ids) || {}

      if (idsJSON[id]) {
        idsJSON[id] = false;
      } else {
        idsJSON[id] = true;
      }

      setFave(idsJSON[id])

      await AsyncStorage.setItem('favList', JSON.stringify(idsJSON))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Icon
      name={fave ? "ios-heart" : "ios-heart-empty"}
      size={20}
      color="darkred"
      style = {styles.heartIcon}
      onPress={(e) => handlePress(e, props.data.id)}
      />
    )
}

export default Heart