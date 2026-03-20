import { View, Text , Image, StyleSheet, Pressable, ScrollView, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FSafeView from "../components/safeView";
import Button from "../components/button";
import { router } from "expo-router";




const LoginScreen1 = ()=>{


  // const handleButtonPress = ()=>{

  //   router.push('./loginScreen2')

  

  return(
    <SafeAreaView style={{backgroundColor: '#0D1B2A',flex:1, paddingHorizontal:20}}>

<ScrollView horizontal contentContainerStyle={{gap:20, marginTop:90}} style={{maxHeight:200}} >
   <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/docketLogo.png')}/>
           </View>

       <View>
 <Text style={styles.text}>Docket</Text>
          <Text style={styles.text2}>Legal Case Management - Mex-Trial </Text>
       </View>
         
</ScrollView>

<View style={{marginBottom:30}}>
<Text style={{color:'white', fontFamily:'bold', fontSize: 17, marginBottom:20}}>
      Create account
     </Text>

      <Text style={{color:'white', fontSize:14}}>
     Step 1 of 3 - Your Information
     </Text>

</View>
     

     <View>
      <Image style={{height:2.5, width:450, marginBottom: 50}} source={require('../assets/images/line.png')}/>
     </View>

<View style={{gap:20}}>

  <View>
<Text style={{color:'white', fontSize:15, marginBottom:5}}> FULL NAME</Text>

<TextInput  placeholderTextColor={'white'} placeholder="e.g. Tunde Bakare" style={{backgroundColor:'#FFFFFF66', borderRadius: 15, height:50, paddingHorizontal:10, color:'white'}}>
</TextInput>

</View>

<View>
<Text style={{color:'white', fontSize:15, marginBottom:5}}> WORK EMAIL</Text>
<TextInput  placeholderTextColor={'white'} placeholder="e.g  amaka@yourfirm.ng" style={{backgroundColor:'#FFFFFF66', borderRadius: 15, height:50, paddingHorizontal:10 , color:'white'}}></TextInput>

</View>

<View>
<Text style={{color:'white', fontSize:15, marginBottom:5}}> LAW FIRM NAME</Text>
<TextInput  placeholderTextColor={'white'} placeholder="Mex-Trial & Associates" style={{backgroundColor:'#FFFFFF66', borderRadius: 15, height:50, paddingHorizontal:10 , color:'white'}}></TextInput>

</View>

<View>

<View style={styles.btnContainer }>
        <Button onPress={()=>{
          router.push('./loginScreen2')
        }} text={'Continue'} style={{width:450}}/>
      </View>

</View>

</View>

<View>
  <ScrollView horizontal contentContainerStyle={{gap:20, marginHorizontal:118}} >
    <Text style={{color:'#99C6FF', fontSize:14}}>
      Already have an account?
    </Text>
    
<Pressable onPress={()=> {
  router.back()
}}>
      <Text style={{color:'#C9A84C', fontSize:14}}>
      Sign In
    </Text>
    </Pressable>

  </ScrollView>
</View>
     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  // imageContainer:{
  //   marginTop:100

  // },
  image:{
    width:70,
    height:60,
    resizeMode:'cover',
    alignSelf:'center', marginBottom: 20

  },
  text:{
    fontFamily:'bold',
    fontSize:30,
    textAlign:'left',
    color: 'white',
    // marginVertical:1
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
borderWidth: 2, borderColor: '#99C6FF', borderRadius: 10, width:100, height: 25, alignItems: 'center', padding: 2, backgroundColor:'#0D1B2A'
},

  btnContainer:{
    gap:16,
    marginVertical:40,
    // width: 300,
    alignSelf:'center',
   
    
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

export default LoginScreen1;