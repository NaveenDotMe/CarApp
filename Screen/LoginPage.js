import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const LoginPage = () => {
  <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} resizeMode={'cover'} source={require('../Assets/Images/Loginpage.jpg')}/>
      </View>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage:{
    width:'100%',
    height: 100
  }
});

export default LoginPage;