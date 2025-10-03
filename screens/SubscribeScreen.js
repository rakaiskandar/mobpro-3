import { useState } from 'react';
import { Image, TextInput } from 'react-native';
import { Alert, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = useState('')
  
  // Check if email is valid
  const isEmailValid = validateEmail(email)

  return <View style={styles.stepContainer}>
    <Image
      source={require('../assets/little-lemon-logo-grey.png')}
      style={[styles.imageContainer, { resizeMode: 'center' }]}
    />

    <Text style={{ fontSize: 18, fontWeight: '400', textAlign: 'center', width: '85%' }}>
      Subscribe to our newsletter for our latest delicious recipe!
    </Text>

    <TextInput
      placeholder='Type your email'
      value={email}
      onChangeText={setEmail}
      style={styles.inputContainer}
      keyboardType="email-address"
      autoCapitalize="none"
    />

    <View style={styles.buttonContainer}>
      <CustomButton
        title='Subscribe'
        onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
        disabled={!isEmailValid}
      />
    </View>
  </View>;
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    width: '100%'
  },
  imageContainer: {
    width: 120,
    height: 120,
    marginTop: 10
  },
  buttonContainer: {
    width: "80%",
    borderWidth: 0,
    borderRadius: 10,
    overflow: 'hidden',
    textTransform: 'capitalize'
  },
  inputContainer: {
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
})

export default SubscribeScreen;
