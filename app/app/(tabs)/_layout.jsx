
import {Tabs }from 'expo-router'
import { View, Image, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = ()=>{

    const Icon = ({focused, source})=>{
        return(
            <View style={{backgroundColor:focused&& '#DD88CF', padding:10, borderRadius:50}}>
            <Image style={{width:24, height:24}} source={source}/>
            {/* <Text>Hello</Text> */}
        </View>
            
        )

     

    }



    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarStyle:{
                marginHorizontal:30,
                height:90,
                position:'absolute',
                bottom:50,
                // backgroundColor:'red',
                borderRadius:50,
                justifyContent:'center',
                alignItems:'center'

            },
            tabBarIconStyle:{
               
                alignSelf:'center',
                marginTop:25

            }
        }}>
            <Tabs.Screen name='home' options={{
                title:'',
                tabBarIcon: ({focused})=> <Icon focused={focused} source={require('../../assets/images/home.png')}/>
                

            
            }}/>
            <Tabs.Screen name='discover' options={{
                title:'',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/discover.png')}/>
            }}/>
            <Tabs.Screen name='plus' options={{
                title:'',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/plus.png')}/>
            }}/>
            <Tabs.Screen name='match' options={{
                title:'',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/match.png')}/>
            }}/>
            <Tabs.Screen name='messages' options={{
                title:'',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/message.png')}/>
            }}/>

        </Tabs>
    )

}

export default TabLayout;