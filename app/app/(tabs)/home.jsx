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
            <View style={styles.logo}>
                <Text style={styles.logoText}>Friendzy</Text>

                <Pressable>

                    <Image style={{height:48, width:48}} source={require('../../assets/images/bell.png')}/>

                </Pressable>

            </View>


            <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{gap:30, marginTop:20, }} style={{ maxHeight:100 }}>

                <Reel text={'My Story'} source={require('../../assets/images/storu.png')}/>
                <Reel text={'Selena'} source={require('../../assets/images/reel1.png')}/>
                <Reel text={'Gomez'} source={require('../../assets/images/reel3.png')}/>
                <Reel text={'Tricia'} source={require('../../assets/images/reel2.png')}/>
                <Reel text={'Gomez'} source={require('../../assets/images/reel3.png')}/>
                <Reel text={'Tricia'} source={require('../../assets/images/reel2.png')}/>

            </ScrollView>


            <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#F8E7F6', padding:10, marginTop:30, borderRadius:10}}>

                <Pressable onPress={()=>{

                    setMain('Make Friends')


                }} style={[styles.press, {backgroundColor: main =='Make Friends' && 'white' }]}>
                    <Text style={styles.pressText}>Make Friends</Text>
                </Pressable>

                <Pressable onPress={()=>{

                    setMain('Search Partners')


                }} style={[styles.press, {backgroundColor: main =='Search Partners' && 'white' }]}>
                    <Text style={styles.pressText}>Search Partners</Text>
                </Pressable>
            </View>


            <View>
                <View style={{marginTop:30}}>
                    <ImageBackground style={{height:300,paddingHorizontal:20, paddingVertical:10 }} imageStyle={{borderRadius:16, }} source={require('../../assets/images/fees1.png')}>

                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#B7BAC3', width:120, padding:10, borderRadius:50, borderWidth:2, borderColor:'white'}}>
                        <Image source={require('../../assets/images/palm.png')} style={{width:30, height:30}}/>
                        <Text style={{color:'white', fontFamily:'medium'}}>Travel</Text>
                    </View>

                    <Text>if you could live anywhere in the world, where would you pick?</Text>

                    <View>
                        <Image source={require('../../assets/images/pic1.png')} style={{height:40, width:40}}/>

                        <View>
                            <Text>Adefolarin Micheal</Text>
                            <Text>Moscow</Text>
                        </View>
                    </View>



                    </ImageBackground>

                </View>

                <View>

                </View>
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
    logoText:{
        fontFamily:'bold',
        fontSize:24,
        color:'#4B164C'
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