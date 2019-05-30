import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./styles"


const NavBar = ({props}) => {
    return (
        <View style={styles.iconContainer}>
          <View style = {styles.iconGroupContainer}>
            <Icon
              name="calendar"
              size={30}
              color="grey"
              style = {styles.icon}
              onPress={() => props.navigation.navigate("Schedule")}
              />
              <Text style = {styles.iconText}> Schedule </Text>
          </View>
          <View style = {styles.iconGroupContainer}>
            <Icon
              name="map"
              size={30}
              color="grey"
              style = {styles.icon}
              onPress={() => props.navigation.navigate("MapLocation")}
              />
              <Text style = {styles.iconText}> Map </Text>
          </View>
          <View style = {styles.iconGroupContainer}>
            <Icon
              name="heart"
              size={30}
              color="grey"
              style = {styles.icon}
              onPress={() => props.navigation.navigate("Faves")}
              />
              <Text style = {styles.iconText}> Faves </Text>
          </View>
          <View style = {styles.iconGroupContainer}>
            <Icon
              name="info-circle"
              style = {styles.icon}
              size={30} color="grey"
              onPress={() => props.navigation.navigate("About")}
              />
              <Text style = {styles.iconText}> About </Text>
          </View>
        </View>
    );
}

export default NavBar
