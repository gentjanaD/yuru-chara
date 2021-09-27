import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MascotDetails from './screens/MascotDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchMascots } from './ApiClientService';
import FavouriteList from './screens/FavouriteList';
import YuruChara from './splashscreens/YuruChara';
import AddNewMascot from './screens/AddMascotModal';
const Stack = createStackNavigator();

export default function App() {
  const [mascots, setMascots] = useState([]);

  async function getMascots() {
    const result = await fetchMascots();

    const sorted = result.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setMascots(sorted);
  }

  function getFavourites() {
    return mascots.filter((mascot) => mascot.favourite === true);
  }

  const favourites = getFavourites();

  useEffect(() => {
    getMascots();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="YuruChara"
          component={YuruChara}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            animationEnabled: false,
          }}
        >
          {(props) => <Home mascots={mascots} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MascotDetails">
          {(props) => <MascotDetails {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FavouriteList">
          {(props) => <FavouriteList favourites={favourites} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
