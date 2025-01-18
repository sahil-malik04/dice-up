import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Dice1 from '../../assets/images/dice-1.png';
import Dice2 from '../../assets/images/dice-2.png';
import Dice3 from '../../assets/images/dice-3.png';
import Dice4 from '../../assets/images/dice-4.png';
import Dice5 from '../../assets/images/dice-5.png';
import Dice6 from '../../assets/images/dice-6.png';

const Diceup = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(Dice1);

  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(Dice1);
        break;
      case 2:
        setDiceImage(Dice2);
        break;
      case 3:
        setDiceImage(Dice3);
        break;
      case 4:
        setDiceImage(Dice4);
        break;
      case 5:
        setDiceImage(Dice5);
        break;
      case 6:
        setDiceImage(Dice6);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={rollDiceOnTap}>
          <Image source={diceImage} style={styles.image} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Diceup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  image: {
    width: 280,
    height: 280,
  },
});
