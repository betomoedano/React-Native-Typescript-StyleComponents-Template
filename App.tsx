/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React from 'react';
import { SafeAreaView, useColorScheme} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import PokemonList from './src/components/PokemonList';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
          <PokemonList />
      </SafeAreaView>
    </Provider>
  );
}

export default App;