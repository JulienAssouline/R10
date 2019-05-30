import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {styles} from "./styles"
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import Accordion from 'react-native-collapsible/Accordion';
import R10 from "./R10"

const GET_CONDUCTS = gql`
  {
   allConducts {
       id
       title
       description
       order
    }
  }
`;

const About = () => {
  const [display, setDisplay] = useState(false)
  const [activeSections, setActiveSections] = useState([])

  const {data, error, loading} = useQuery(GET_CONDUCTS)
    if (loading) {
      return <Text>Loading...</Text>;
    };
    if (error) {
      return <Text>Error! {error.message}</Text>;
    };

    const renderHeader = section => {
      return (
        <View>
          <Text style = {styles.aboutHeader}> {activeSections[0] === (section.order - 1) ? "-  "+ section.title : "+  "+ section.title} </Text>
        </View>
        )
      }

    const renderContent = section => {
      return (
        <View>
          <Text style = {styles.aboutContent}>{section.description}</Text>
        </View>
        )
    }

    const updateSections = activeSections => {
      setActiveSections(activeSections)
    }

  return (
    <ScrollView>
      <View style={styles.container}>
        <R10 />
        <View
          style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            alignSelf: "center",
            margin: "auto",
            width: '90%',
          }}
        />
        <Text style = {styles.aboutContent}>The R10 that focuses on Just about any Topic related to dev. </Text>
        <Text style = {{padding: 10, fontSize: 30, fontWeight: "bold"}}> {"Date & Venue"} </Text>
        <Text style = {styles.aboutContent}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC. </Text>
        <Text style = {{padding: 10, fontSize: 30, fontWeight: "bold"}}>Code of Conduct</Text>
        <Accordion
          sections = {data.allConducts}
          activeSections={activeSections}
          renderHeader = {renderHeader}
          renderContent = {renderContent}
          onChange = {updateSections}
          />
          <View
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              alignSelf: "center",
              margin: "auto",
              width: '90%',
            }}
          />
          <Text style = {{padding: 10, fontSize: 20}}> {"Red Academy 2017"} </Text>
       </View>
      </ScrollView>
    )
}

export default About