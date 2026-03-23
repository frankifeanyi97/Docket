
import {Tabs }from 'expo-router'
import { View, Image, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = ()=>{

    const Icon = ({focused, source})=>{
        return(
            <View style={{backgroundColor:focused&& '#D4A843', padding:20, borderRadius:50}}>
            <Image style={{width:24, height:24}} source={source}/>
            {/* <Text>Hello</Text> */}
        </View>
            
        )

     

    }



    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarStyle:{
                // marginHorizontal:30,
                height:90,
                position:'absolute',
                // bottom:10,
                backgroundColor:'#08121F',
                // borderRadius:50,
                justifyContent:'center',
                alignItems:'center'

            },
            tabBarIconStyle:{
               
                alignSelf:'center',
                marginTop:25

            }
        }}>
            <Tabs.Screen name='home' options={{
                title:'Home',
                tabBarIcon: ({focused})=> <Icon focused={focused} source={require('../../assets/images/homeInactive.png')}/>
                

            
            }}/>
            <Tabs.Screen name='cases' options={{
                title:'Cases',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/casesInactive.png')}/>
            }}/>
            <Tabs.Screen name='clients' options={{
                title:'Clients',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/clientInactive.png')}/>
            }}/>
            <Tabs.Screen name='hearing' options={{
                title:'Hearing',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/hearingInactive.png')}/>
            }}/>
            <Tabs.Screen name='settings' options={{
                title:'Settings',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../assets/images/settingsInactive.png')}/>
            }}/>

        </Tabs>
    )

}

export default TabLayout;