import Reactotron from 'reactotron-react-native'

Reactotron
  // .configure() // controls connection & communication settings
  .configure({ host: '192.168.1.183' })
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!