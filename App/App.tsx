import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, PersistedStore} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={PersistedStore}>
        <NavigationContainer>

          <Routes />

        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
