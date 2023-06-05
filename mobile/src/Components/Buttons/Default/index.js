import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const DefaultButton = ({ text }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonArea}>
        <Text style={styles.text}> {text} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DefaultButton;