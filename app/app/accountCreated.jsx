import { View, Text , Image, StyleSheet, Pressable, ScrollView, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FSafeView from "../components/safeView";
import Button from "../components/button";
import { router } from "expo-router";
import LoginScreen1 from "./loginScreen1";




const AccountCreated = ()=>{


  const handleButtonPress = ()=>{

    router.push('./home')

  }

  return(
    <SafeAreaView style={{backgroundColor: '#0D1B2A',flex:1, paddingHorizontal:20}}>



      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={require('../assets/images/docketLogo.png')}/> */}
      {/* </View>

      <View> */}
<View style={{height:100, width:96, backgroundColor: '#173F03', borderRadius:20, padding:20, marginHorizontal:180}}>
<Image style={{height:50, width:50}} source={require ('../assets/images/checkIcon.png')} />
</View>


        <Text style={styles.text}>Account Created!</Text>
<View>

<ScrollView contentContainerStyle={{gap: 10, marginHorizontal:140}} horizontal>
    <Text style={styles.text2}>
        Welcome to Docket,
    </Text>
    <Text style={{fontFamily:'bold', color:'white',}}>
        John
    </Text>
</ScrollView>
        <Text style={styles.text2}>Your account is pending activation by a Senior{'\n'}Partner. You’ll receive confirmation shortly </Text>
</View>

      </View>


<ScrollView horizontal contentContainerStyle={{gap:200,}} style={{backgroundColor:'#99C6FF1A', height:115, maxHeight:115, borderRadius:20, padding:20}}>
<View style={{gap: 30}}>
    <Text style={styles.info}>
        ROLE
    </Text>
    <Text style={styles.info}>
        FIRM
    </Text>
</View>

<View style={{gap:20}}>
    <Pressable >
    
      <View style={styles.category}>
        <Text style={{fontSize:12, color:'#99C6FF', fontFamily:'medium'}}>
          Senior Partner
        </Text>
      </View>
    </Pressable>

    <Text style={styles.info}>
        Mex-Trial & Associates
    </Text>
</View>

</ScrollView>

{/* <View> */}

<View style={styles.btnContainer }>
        <Button onPress={()=>{
          router.push('./home')
        }} text={'Go to Login'} style={{width:400
        }}/>
      </View>

{/* </View> */}
     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  imageContainer:{
    marginTop:300, marginBottom: 70, gap:20

  },
  image:{
    width:120,
    height:113,
    resizeMode:'cover',
    alignSelf:'center', marginBottom: 20

  },
  text:{
    fontFamily:'bold',
    fontSize:30,
    textAlign:'center',
    color: 'white'
  },

text2:{
fontFamily:'light',
    fontSize:14,
    textAlign:'center',
    color: 'white'
},

welcome:{
marginBottom: 30, gap: 10

},

info:{
fontFamily: 'medium',
color: 'white',
fontSize: 16

},

text3:{
fontFamily:'medium',
    fontSize:17,
    textAlign:'left',
    color: 'white'
},

text4:{
fontFamily:'light',
    fontSize:14,
    textAlign:'left',
    color: '#99C6FF'
},

category:{
borderWidth: 2, borderColor: '#99C6FF', borderRadius: 10, width:100, height: 25, alignItems: 'center', padding: 2, backgroundColor:'#0D1B2A', alignSelf:'flex-end'
},

  btnContainer:{
    // gap:16,
    marginVertical:40,
    // width: 200,
    // alignSelf:'center' ,
    marginHorizontal:28
    
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

export default AccountCreated;