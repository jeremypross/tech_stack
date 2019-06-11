import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => (
    // provider tag works together with the store
    // store is what holds our app's state,
    //the purpose of the Provider is what translates all data in store,
    // to something that can be used by the react side of the application -
    // it's the communication glue with react
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );

export default App;
