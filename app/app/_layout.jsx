import { Stack } from "expo-router"
import {useFonts} from 'expo-font'



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
    <Stack screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="(tabs)"/> */}
  {/* <Stack.Screen name="loginScreen2"/>  */}

    </Stack>
 
  )
}

export default RootLayout;