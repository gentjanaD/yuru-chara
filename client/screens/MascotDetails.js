import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Icon } from 'react-native-elements';

const MascotDetails = ({ route }) => {
  const { mascot } = route.params;

  const handleOpenWithWebBrowser = () => {
    console.log(mascot);
    WebBrowser.openBrowserAsync(mascot.officialSite);
  };

  // const makeFavourite = (mascot) => {
  //   const favouriteMascot = { ...mascot, favourite: true };
  //   return favouriteMascot;
  // };

  return (
    <View style={styles.background}>
      <Icon name="arrow-back-ios" type="materialicons" color="black" />
      <View style={styles.top}>
        {/* <TouchableOpacity onPress={() => makeFavourite}>
        {mascot.favourite ? <Text>Unlike</Text> : <Text>Like</Text>}
      </TouchableOpacity> */}
        <Text style={[styles.heading, styles.name]}>{mascot.name}</Text>
        <Text style={[styles.japanese, styles.heading]}>{mascot.japanese}</Text>
        <Image
          style={styles.mascotImage}
          source={{
            uri: mascot.picture,
          }}
        />
      </View>
      <View style={styles.mascotAbout}>
        <View style={styles.mascotText}>
          <Text>Representing: {mascot.mascot}</Text>
          <Text>City: {mascot.city}</Text>
          <Text>Prefecture: {mascot.prefecture}</Text>
          <Text>Description: {mascot.description}</Text>
          {!mascot.officialSite ? (
            <Text style={{ textAlign: 'center' }}>🌸</Text>
          ) : (
            <Button
              title="Go to Offical Site"
              onPress={() => handleOpenWithWebBrowser()}
            />
          )}
          {/* <Button title="Edit" /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  japanese: {
    fontSize: 16,
    fontWeight: '300',
  },
  background: {
    backgroundColor: 'pink',
    zIndex: -1,
    height: '100%',
  },
  mascotImage: {
    height: 300,
    width: 400,
    resizeMode: 'center',
    justifyContent: 'center',
    zIndex: 10,
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 1,
  },
  top: {
    flex: 1,
  },
  mascotText: { margin: 30 },
  mascotAbout: {
    backgroundColor: 'white',
    zIndex: 1,
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default MascotDetails;
