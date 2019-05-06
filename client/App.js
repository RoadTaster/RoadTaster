import { createStackNavigator, createAppContainer } from 'react-navigation'

import MainScreen from './src/screens/MainScreen'
import SigninScreen from './src/screens/SigninScreen'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: '나는 메인 !'
    }
  },
  Signin: {
    screen: SigninScreen,
    navigationOptions: {
      title: '나는 회원가입 !'
    }
  }
},
{
  initialRouteName: "Main" // 진입 화면
}
)

export default createAppContainer(AppNavigator)
