import { View, Text , Image, StyleSheet, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FSafeView from "../components/safeView";
import Button from "../components/button";
import { router } from "expo-router";




const Index = ()=>{


  const handleButtonPress = ()=>{

    router.push('./home')

  }

  return(
    <FSafeView>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/hero.png')}/>
      </View>

      <View>
        <Text style={styles.text}>Let's meet new people around you</Text>
      </View>

      <View style={styles.btnContainer}>
        <Button onPress={()=> handleButtonPress()} icon={<Image style={styles.icon} source={require('../assets/images/phone.png')}/>} text={'Login with phone'}/>
        <Button onPress={()=> handleButtonPress()}   icon={<Image style={styles.icon} source={require('../assets/images/google.png')}/>} textColor='#4B164C' style={{backgroundColor:'#FCF3FA'}} text={'Login with Google'}/>
      </View>


      <Pressable style={styles.link}>
        <Text style={styles.linkText}>Dont have an account? <Text style={{color:'#DD88CF', fontFamily:'semibold'}}>Sign Up</Text></Text>
      </Pressable>
     
    </FSafeView>
  )
}


const styles = StyleSheet.create({

  imageContainer:{
    flex:.7,
    marginTop:100

  },
  image:{
    width:311,
    height:306,
    resizeMode:'cover',
    alignSelf:'center'

  },
  text:{
    fontFamily:'bold',
    fontSize:32,
    textAlign:'center'
  },
  btnContainer:{
    gap:16,
    marginVertical:40
  },
  link:{
    alignSelf:'center',
    position:'absolute',
    bottom:50
  },
  linkText:{
    fontFamily:'regular',
    color:'#22172A'
  },
  icon:{

    width:40,
    height:40,
    position:'relative',
    left:-60

  }
})

export default Index;