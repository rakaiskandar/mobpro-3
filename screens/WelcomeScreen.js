import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.stepContainer}>
    
    <Image 
        source={require('../assets/little-lemon-logo.png')}
        style={[styles.imageContainer, { resizeMode: 'center' }]}
    />

    <Text style={{ fontSize: 20, textAlign: 'center', width: '70%' }}>
      Little Lemon, your local Mediterranian Distro
    </Text>
    
    <View style={styles.buttonContainer}>
      <CustomButton 
        title='Newsletter' 
        onPress={() => navigation.navigate('Subscribe')} 
        />
    </View>
  </View>;
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 20,
    width: '100%'
  },
  imageContainer: {
    width: 400,
    height: 300
  },
  buttonContainer: {
    width: "80%", 
    borderWidth: 0, 
    borderRadius: 10,
    overflow: 'hidden',
  }
})

export default WelcomeScreen;
