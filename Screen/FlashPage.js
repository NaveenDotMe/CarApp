import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


export default function FlashPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../Assets/Images/CarSale.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay Connect With Everybody</Text>
        <Text style={styles.text}>Sign in With account</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={alert}
      >
        <Text style={styles.textSign}>Press Here</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold'
  }
});