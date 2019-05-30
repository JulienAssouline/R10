/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {AppContainer} from './App';
import {name as appName} from './app.json';
import { ApolloProvider } from "react-apollo-hooks";
import apolloClient from './apolloClient';
// import AppContainer from './App'

const MyApp = () => {
  console.log("Running")
    return (
      <ApolloProvider client = {apolloClient}>
        <AppContainer />
      </ApolloProvider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
