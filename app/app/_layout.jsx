import { Stack } from "expo-router"
import {useFonts} from 'expo-font'
import { RegistrationProvider } from '../context/RegistrationContext';

// We import RegistrationProvider here so every screen in the app
// can access the shared registration form data via useRegistration().
// Wrapping Stack (not just the signup screens) is the simplest approach.

const RootLayout = ()=>{


  const [loaded , error] = useFonts({
    regular : require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    medium : require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    semibold : require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    bold : require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    light : require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf'),
  })


  if(error){
    return null
  }


  return(
    <RegistrationProvider>
      <Stack screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="(tabs)"/> */}
        {/* <Stack.Screen name="loginScreen2"/>  */}
      </Stack>
    </RegistrationProvider>
  )
}

export default RootLayout;