
import { TouchableOpacity,Text } from "react-native"
// import style from '../styles/style'

export default function Button ({ title, onPress, style, titleStyle, children}){

    return(
        <TouchableOpacity onPress={onPress} style={{...style}}>
        <Text style={titleStyle}>{title}</Text>
        {children}
      </TouchableOpacity>
    )
}