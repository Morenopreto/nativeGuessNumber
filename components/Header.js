import { View, Text } from "react-native";
import style from "../styles/style";

export default function Header() {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>Adivina el numero!</Text>
    </View>
  );
}
