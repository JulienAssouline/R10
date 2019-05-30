import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from "./styles"
import NavBar from "./NavBar"
import AsyncStorage from '@react-native-community/async-storage';
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import { nest } from "d3-collection";
import msToTime from "./utils/msToTime"
import Heart from "./Heart"
import { NavigationEvents } from 'react-navigation';


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
        session{
          id
        }
      }
    }
  }
`;


const Faves = () => {
  const [allFave, setAllFave] = useState("")

  useEffect(() => {
   getData = async () => {
     try {
       const value = await AsyncStorage.getItem('favList')
       if(value !== undefined) {
        let faveObj = JSON.parse(value) || {}
        setAllFave(faveObj)
       }
     } catch(e) {
       // error reading value
     }
   }

   getData()
  }, [])

  const {data, error, loading} = useQuery(GET_All_SESSIONS)

  if (loading) {
      return <Text>Loading...</Text>;
    };
    if (error) {
      return <Text>Error! {error.message}</Text>;
    };



  data.allSessions.forEach((d,i) => {
    d.Time = msToTime(Date.parse(d.startTime))
  })

 const filteredSessions = data.allSessions.filter((session,i) => { return allFave[session.id] === true })

 console.log(filteredSessions)

 const nestedFilteredSessions = nest()
   .key(d => d.Time)
   .entries(filteredSessions)

  return (
    <ScrollView>
     <View style={styles.container}>
     <NavigationEvents
           onDidFocus={ async () => {
             try {
               const value = await AsyncStorage.getItem('favList')
               if(value !== undefined) {
                let faveObj = JSON.parse(value) || {}
                setAllFave(faveObj)
               }
             } catch(e) {
               // error reading value
             }
          }} />
     {
      nestedFilteredSessions.map((d,i) => (
        <View key = {"keys" + i}>
          <View style = {styles.sessionTime}>
            <Text style = {{ padding: 5, fontSize: 18}}>{d.key} </Text>
          </View>
          {
            d.values.map((j,i) => (
              <View key = {"container" + i}>
              <View
                key = {"values" + i}
                style = {styles.sessionInfo}>
                <Text style = {{fontSize: 22}}>{j.title} </Text>
                <View style = {styles.heartLocationContainer}>
                  <Text style = {styles.sessionLocation}>{j.location} </Text>
                </View>
              </View>
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

export default Faves