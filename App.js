import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

var itemArray = new Array(25).fill('empty');

export default function App() {
  const [randomNumber, setRandomNumber] = useState('');
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 25);
    setRandomNumber(randomNumber);
    setIsScratched(true);
    return randomNumber;
  };

  const scratchItem = (itemNumber) => {
    if (randomNumber === itemNumber) {
      itemArray[itemNumber] = 'lucky';
    } else {
      itemArray[itemNumber] = 'unlucky';
    }
  };

  const scratchItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] === 'lucky') {
      return 'dollar';
    } else if (itemArray[itemNumber] === 'unlucky') {
      return 'frown-o';
    }
    return 'circle';
  };

  const scratchItemColor = (itemNumber) => {
    if (itemArray[itemNumber] === 'lucky') {
      return 'green';
    } else if (itemArray[itemNumber] === 'unlucky') {
      return 'red';
    }
    return 'black';
  };

  const showAllItems = () => {
    itemArray.fill('unlucky');
    itemArray[randomNumber] = 'lucky';
    // force update here
  };

  const resetGame = () => {
    generateRandomNumber();
    itemArray.fill('empty');
    //force update here
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Scratch and Win game</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.itemRow}>
          <TouchableOpacity>
            <FontAwesome style={styles.item} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
