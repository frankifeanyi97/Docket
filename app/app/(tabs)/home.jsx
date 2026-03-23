import { useState } from "react";
import FSafeView from "../../components/safeView"
import { Pressable, Text, View, Image, StyleSheet, ScrollView, ImageBackground } from "react-native";


const Home = ()=>{


    const [main, setMain] = useState('Make Friends')


    const Reel = ({source, text})=>{
        return(
            <Pressable style={{ alignItems:'center'}}>
                <Image style={{height:60, width:60}} source={source}/>
                <Text style={{fontFamily:'regular'}}>{text}</Text>

            </Pressable>
        )
    }
    return(
        <FSafeView bgColor={'#0D1B2A'}>
          <View>
            <Text style={styles.text}>Home</Text>
          </View>
        
         


         
           
        </FSafeView>
    )
}


const styles = StyleSheet.create({
    logo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        fontFamily:'bold',
        fontSize:24,
        color:'white'
    },
    press:{
        // backgroundColor:'white',
        borderRadius:25,
        paddingVertical:10,
        paddingHorizontal:30
    },
    pressText:{
        fontFamily:'medium',
        fontSize:14
    }
})

export default Home;