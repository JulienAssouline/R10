import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home"
import About from "./About"
import Faves from "./Faves"
import MapLocation from "./MapLocation"
import Schedule from "./Schedule"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Session from "./Session"
import LinearGradient from 'react-native-linear-gradient';
import LinearGradientTitle from "./utils/LinearGradientTitle"

const ScheduleNavigator = createStackNavigator(
       {
        Schedule: {
           screen: Schedule,
           navigationOptions: {
             headerTitle: "Schedule"
           }
         },
         Session: {
           screen: Session,
           navigationOptions: {
             headerTitle: "Session"
           }
         },
        },
        LinearGradientTitle,
      )

const MapNavigator = createStackNavigator(
      {
        MapLocation: {
            screen: MapLocation,
            navigationOptions: {
              headerTitle: "Map"
            }
          }
      },
      LinearGradientTitle,
      )


const FavesNavigator = createStackNavigator(
       {
        Faves: {
            screen: Faves,
            navigationOptions: {
              headerTitle: "Faves"
            }
          }
        },
        LinearGradientTitle,
      )

const AboutNavigator = createStackNavigator(
      {
        About: {
            screen: About,
            navigationOptions: {
              headerTitle: "About"
            }
          }
       },
       LinearGradientTitle,
      )

const TabNavigator = createBottomTabNavigator(
      {
          Schedule: ScheduleNavigator,
          MapLocation: MapNavigator,
          Faves: FavesNavigator,
          About: AboutNavigator,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
                    let IconComponent = Ionicons;
                    let iconName;
                    if (routeName === 'About') {
                      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                      // Sometimes we want to add badges to some icons.
                      // You can check the implementation below.
                    } else if (routeName === 'Faves') {
                      iconName = `ios-heart${focused ? '' : '-empty'}`;
                    }
                    else if (routeName === 'MapLocation') {
                      iconName = `ios-map`;
                    }
                    else if (routeName === 'Schedule') {
                      iconName = `ios-calendar`;
                    }

                    // You can return any component that you like here!
                    return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        initialRouteName: "Schedule",
        tabBarOptions: {
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
              activeBackgroundColor: "black",
              inactiveBackgroundColor: "black",
              style: {
                backgroundColor: "black",
                height: 50
              }

            },
      }

);


 export const AppContainer = createAppContainer(TabNavigator);



// export default App
