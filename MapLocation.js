import React from 'react';
import {Text, View} from 'react-native';
import {styles} from "./styles"
import MapView from 'react-native-maps'

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <MapView style={{flex: 1}}
//       region={{
//         latitude: 42.882004,
//         longitude: 74.582748,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//         }} showsUserLocation={true}
//       />
//       );
//   }}


const MapLocation = () => {
  return (
      <MapView style={{flex: 1}}
      region={{
        latitude: 43.6437903,
        longitude: -79.3978698,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }} showsUserLocation={true}
      />
    )
}

export default MapLocation