import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import SplashScreen from './SplashScreen'

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMain: false,
      region: this.getInitialState(),
      markers: [
        { id: 0, latlng: {lat: 37.563576, lng: 126.983431}, title: '명동', desc: '명동입니다 ! ㅎㅎ' },
        // { id: 0, latitude: 37.563576, longitude: 126.983431, title: '명동', desc: '명동입니다 ! ㅎㅎ' }
        // ['가로수길', 37.520300, 127.023008],
        // ['광화문', 37.575268, 126.976896],
        // ['남산', 37.550925, 126.990945],
        // ['이태원', 37.540223, 126.994005]
      ]
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
  getInitialState() {
    // TODO: 기기의 gps 위치 정보에서 가져와 latitude 와 longitude 값 세팅
    return {
      latitude: 37.5571,
      longitude: 126.9426,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  }
  onRegionChange(region) {
    this.setState({
      region
    })
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
          {/* TODO: latitudeDelta 와 longitudeDelta 에 대한 조사 필요 */}
          <MapView
            style={{ flex: 1 }}
            initialRegion={this.state.region}>
            {/* TODO: 마커
            {this.state.markers.map((marker, index) => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.desc}
              />))} */}
          </MapView>
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