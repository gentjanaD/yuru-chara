import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { addMascot } from '../ApiClientService';
import * as ImagePicker from 'expo-image-picker';

const AddNewMascot = ({ getMascots, navigation }) => {
  const [state, setState] = useState({
    name: '',
    japanese: '',
    mascot: '',
    city: '',
    prefecture: '',
    description: '',
    picture: '',
  });
  const [image, setImage] = useState(null);

  const addNewMascot = async (event) => {
    if (state.name === '') {
      alert(`Please submit a mascot`);
    } else {
      await addMascot(state);
      getMascots();
      navigation.navigate('Home');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      return;
    }

    let base64Img = `data:image/jpg;base64,${result.base64}`;

    let apiUrl = 'https://api.cloudinary.com/v1_1/dygjcgbh3/image/upload';
    let data = {
      file: base64Img,
      upload_preset: 'mascots',
    };

    fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then(async (r) => {
        let data = await r.json();
        setImage(data.url);
        setState({ ...state, picture: data.url });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        <Text>Add a Mascot</Text>
      </View>
      <View style={styles.form}>
        <Text>Name</Text>
        <TextInput
          value={state.name}
          onChangeText={(text) => {
            setState({ ...state, name: text });
          }}
          style={styles.input}
        ></TextInput>
        <Text>Japanese</Text>
        <TextInput
          value={state.japanese}
          onChangeText={(text) => {
            setState({ ...state, japanese: text });
          }}
          style={styles.input}
        ></TextInput>
        <Text>Mascot for:</Text>
        <TextInput
          value={state.mascot}
          onChangeText={(text) => {
            setState({ ...state, mascot: text });
          }}
          style={styles.input}
        ></TextInput>
        <Text>City</Text>
        <TextInput
          value={state.city}
          onChangeText={(text) => {
            setState({ ...state, city: text });
          }}
          style={styles.input}
        ></TextInput>
        <Text>Prefecture</Text>
        <TextInput
          value={state.prefecture}
          onChangeText={(text) => {
            setState({ ...state, prefecture: text });
          }}
          style={styles.input}
        ></TextInput>
        <Text>Description</Text>
        <TextInput
          value={state.description}
          onChangeText={(text) => {
            setState({ ...state, description: text });
          }}
          style={styles.input}
        ></TextInput>
        <Text>Picture</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <TouchableOpacity onPress={addNewMascot}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default AddNewMascot;
