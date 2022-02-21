import { View, Text } from "react-native";
import style from "../styles/style";
import Card from "../components/Card";
export default function GameScreen({ userNumber }) {
  return (
    <View style={style.screen}>
      <Card>
        <Text style={{textAlign:'center',paddingBottom:20,paddingTop:15}}>Su numero elegido es el:</Text>
        <Text style={{fontSize:30,textAlign:'center',paddingBottom:20}}>{userNumber}</Text>
      </Card>
        <Text>Terminar logica de juego</Text>
    </View>
  );
}
