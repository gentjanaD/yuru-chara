import React from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';
import { deleteMascot } from '../ApiClientService';
const MascotCard = ({ name, mascot }) => {
  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={{
          uri: mascot.picture,
        }}
      />
      <Text style={styles.text}>{name}</Text>
      <Button title="✘" onPress={deleteMascot}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
    paddingTop: 5,
    backgroundColor: 'white',
  },
  image: {
    height: 250,
    width: 350,
    resizeMode: 'contain',
    borderRadius: 45,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
export default MascotCard;
