import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import SplashLogo from '../../assets/splash_logo.png'

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={SplashLogo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen