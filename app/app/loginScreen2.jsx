import { View, Text , Image, StyleSheet, Pressable, ScrollView, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FSafeView from "../components/safeView";
import Button from "../components/button";
import { router } from "expo-router";




const LoginScreen2 = ()=>{


//   const handleButtonPress = ()=>{

//     router.push('./home')

//   }

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



<View style={{marginBottom:0}}>
<Text style={{color:'white', fontFamily:'bold', fontSize: 17, marginBottom:20}}>
      Create account
     </Text>

      <Text style={{color:'white', fontSize:14, marginBottom:20}}>
     Step 2 of 3 - Your Role
     </Text>
     
     <View>
      <Image style={{height:2.5, width:450, marginBottom: 30}} source={require('../assets/images/line2.png')}/>
     </View>

     <View style={{borderBottomColor:'#99C6FF', borderBottomWidth:1, width:500, alignSelf:'center', marginBottom:30}}>
</View>

</View>



<Text style={{color:'white', fontSize: 17, marginBottom:40}}>
   Select your role at{" "} <Text style={{color:'#C9A84C'}}> Mex-trial & Associates</Text> {" "}. This {"\n"}determines what you can access in Docket.
</Text>




<View style={{height:100, width:450, borderWidth: 0.5, borderRadius: 12, padding:15, borderColor:'#99C6FF', marginBottom:30}}>
    <ScrollView horizontal contentContainerStyle={{gap:100}}>

        <View>

<Text style={{fontFamily:'bold', fontSize:30, color:'white'}}>
        Senior Partner
    </Text>

    <Text style={{fontFamily:'light', fontSize:14, color:'#99C6FF'}}>
        Full access - manage cases team & reports
    </Text>
        </View>


    <Pressable style={{borderWidth: 1, borderColor: '#99C6FF', borderRadius:100, height:40, width:40, marginVertical:10}}>
</Pressable>

    </ScrollView>
    

</View>




<View style={{height:100, width:450, borderWidth: 0.5, borderRadius: 12, padding:15, borderColor:'#99C6FF', }}>
    <ScrollView horizontal contentContainerStyle={{gap:100}}>

        <View>

<Text style={{fontFamily:'bold', fontSize:30, color:'white'}}>
        Senior Partner
    </Text>

    <Text style={{fontFamily:'light', fontSize:14, color:'#99C6FF'}}>
        Full access - manage cases team & reports
    </Text>
        </View>


    <Pressable style={{borderWidth: 1, borderColor: '#99C6FF', borderRadius:100, height:40, width:40, marginVertical:10}}>
</Pressable>

    </ScrollView>
    
</View>




<View style={{height:100, width:450, borderWidth: 0.5, borderRadius: 12, padding:15, borderColor:'#99C6FF', marginBottom:50}}>
    <ScrollView horizontal contentContainerStyle={{gap:100}}>

        <View>

<Text style={{fontFamily:'bold', fontSize:30, color:'white'}}>
        Senior Partner
    </Text>

    <Text style={{fontFamily:'light', fontSize:14, color:'#99C6FF'}}>
        Full access - manage cases team & reports
    </Text>
        </View>


    <Pressable style={{borderWidth: 1, borderColor: '#99C6FF', borderRadius:100, height:40, width:40, marginVertical:10}}>
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

export default LoginScreen2;