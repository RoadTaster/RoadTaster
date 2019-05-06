import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

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
    // FIXME:
    // MainScreen 의 헤더바가 SplashScreen 까지 침범
    // if (!this.state.isMain) {
    //   return <SplashScreen />
    // }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MainScreen</Text>
        <Button
          title="Sign In"
          onPress={() => {
            this.props.navigation.navigate('Signin')
          }}/>
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
  },
  text: {
    fontSize: 55,
    color: 'yellow',
    borderWidth: 3,
    borderColor: 'red'          
  }
})

export default MainScreen