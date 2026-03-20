import { View, Text , Image, StyleSheet, Pressable, ScrollView, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FSafeView from "../components/safeView";
import Button from "../components/button";
import { router } from "expo-router";
import LoginScreen1 from "./loginScreen1";




const Index = ()=>{


  const handleButtonPress = ()=>{

    router.push('./home')

  }

  return(
    <SafeAreaView style={{backgroundColor: '#0D1B2A',flex:1, paddingHorizontal:20}}>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/docketLogo.png')}/>
      {/* </View>

      <View> */}
        <Text style={styles.text}>Docket</Text>
        <Text style={styles.text2}>Legal Case Management - Mex-Trial </Text>
      </View>

      <View style={styles.welcome}>
<Text style={styles.text3}>Welcome back</Text>
        <Text style={styles.text4}>Sign in to your firm account</Text>
      </View>


      <ScrollView  horizontal contentContainerStyle={{gap:70, marginHorizontal:4}} style={{maxHeight:70}}>
        
<Pressable >

  <View style={styles.category}>
    <Text style={{fontSize:12, color:'#99C6FF', fontFamily:'medium'}}>
      Senior Partner
    </Text>
  </View>
</Pressable>

<Pressable >
  <View style={styles.category}>
    <Text style={{fontSize:12, color:'#99C6FF', fontFamily:'medium'}}>
      Associate
    </Text>
  </View>
</Pressable>


<Pressable >
  <View style={styles.category}>
    <Text style={{fontSize:12, color:'#99C6FF', fontFamily:'medium'}}>
     Secretary
    </Text>
  </View>
</Pressable>

      </ScrollView>

<View style={{gap:20}}>

  <View>
<Text style={{color:'white', fontSize:14, marginBottom:5, color: '#99C6FF'}}> EMAIL ADDRESS</Text>

<TextInput  placeholderTextColor={'white'} placeholder="chidi@mex-trial.ng" style={{backgroundColor:'#FFFFFF66', borderRadius: 15, height:50, paddingHorizontal:10,  color:'white'}}>
</TextInput>

</View>

<View>
<Text style={{color:'white', fontSize:14, marginBottom:5, color: '#99C6FF'}}> PASSWORD</Text>
<TextInput  placeholderTextColor={'white'} placeholder="**********" style={{backgroundColor:'#FFFFFF66', borderRadius: 15, height:50, paddingHorizontal:10 , color:'white'}}></TextInput>

</View>



</View>



<View>

      <View style={styles.btnContainer }>
        <Button onPress={()=> handleButtonPress()} text={'Sign In'}/>
      </View>

<View>
  <ScrollView horizontal contentContainerStyle={{gap:20, marginHorizontal:118}} >
    <Text style={{color:'#99C6FF', fontSize:14}}>
      New to Docket?
    </Text>
    
<Pressable onPress={()=> {
  router.push('./loginScreen1')
}}>
      <Text style={{color:'#C9A84C', fontSize:14}}>
      Create an account
    </Text>
    </Pressable>

  </ScrollView>
</View>

</View>


     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  imageContainer:{
    marginTop:100, marginBottom: 100

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
    width: 300,
    alignSelf:'center' 
    
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