import { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import style from "../styles/style";

export default function StartGameScreen({ onStartGame }) {
  const [enteredValue, setEnteredvalue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChangeText = (text) => {
    setEnteredvalue(text.replace(/[^0-9]/g, ""));
  };

  const handleSubmit = () => {
    setSelectedValue(enteredValue);
  };
  const handleReset = () => {
    setEnteredvalue("");
    setSelectedValue("");
  };
  const handleStartGame = () => onStartGame(enteredValue);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.screen}>
        <Card style={{marginBottom:45,}}>
          <Text style={styles.cardTitle}>Comienza el Juego</Text>
          <Text style={styles.cardBodyText}>Elija un numero</Text>
          <TextInput
            style={styles.gameInput}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleChangeText}
          />

          <View style={styles.buttonContainer}>
            <Button style={style.outlined} title="Limpiar" onPress={handleReset}></Button>
            <Button style={style.outlined} title="Confirmar" onPress={handleSubmit}></Button>
          </View>
        </Card>

        {!!selectedValue ? (
          <Card>
            <Text style={{...styles.centered,marginBottom:10,marginTop:20,fontSize:15}}>Tu numero elegido es:</Text>
            <Text style={{...styles.centered,marginBottom:20,marginTop:10,fontSize:25}}>{selectedValue}</Text>
            
            <Button style={style.filled} titleStyle={{color:'white',textAlign:'center',fontFamily:'Lato-bold'}} title="Comenzar juego" onPress={handleStartGame} />
          </Card>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  
  centered:{
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    margin: 20,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 20,
  },
  cardBodyText: {
    textAlign: "center",
    paddingTop: 20,
  },
  gameInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    textAlign:'center',
    width:'50%',
    marginLeft:'25%',
    marginRight:'25%',
    paddingTop:20,
    marginBottom  :15
  },
});
