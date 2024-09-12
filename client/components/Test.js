import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Test = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
   <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello World!</Text>
        {!changedText && <p>Good to see you!</p>}
        {changedText && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Change Text!</button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
});

export default Test;