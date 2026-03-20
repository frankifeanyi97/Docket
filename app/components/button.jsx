import { TouchableOpacity, Text } from "react-native";



const Button = ({text, style, icon, textColor, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'#4B164C', height:65, borderRadius:30, justifyContent:'center', ...style, flexDirection:'row', alignItems:'center', }}>

            {
                icon && icon

            }

            <Text style={{alignSelf:'center', color: textColor ? textColor :'white', fontSize:18, fontFamily:'bold'}}>{text}</Text>

        </TouchableOpacity>

    )
}


export default Button;