import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import MapView from 'react-native-maps'

import SplashScreen from './SplashScreen'

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMain: false
    }
  }
  splashScreenTimer = async () => {
    return new Promise((resolve) => 
      setTimeout(
        () => { resolve('result') },
        1000
      )
    )
  }
  async componentWillMount() {
    const timer = await this.splashScreenTimer()
    if (timer !== null) {
      this.setState({
        isMain: true
      })
    }
  }
  render() {
    // 개발시 불편해서 일단 주석 처리 !
    // FIXME: MainScreen 의 헤더바가 SplashScreen 까지 침범

    // if (!this.state.isMain) {
    //   return <SplashScreen />
    // }
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={{
              flex: 1
            }}
            initialRegion={{
              latitude: 37.5571,
              longitude: 126.9426,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
          }}></MapView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 55,
    color: 'yellow',
    borderWidth: 3,
    borderColor: 'red'          
  }
})

export default MainScreen