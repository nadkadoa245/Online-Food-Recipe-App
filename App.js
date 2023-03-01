import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/Auth/LoginScreen';
import OtpScreen from './Screens/Auth/OtpScreen';
import SignUpScreen from './Screens/Auth/SignUpScreen';
import Navigation from './Navigation/Navigation';


export default function App () {
  return (
  <Navigation/>
  );
};

