import { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import { styles } from "./style";
import Close from "../../Components/Buttons/Close";

const ModalMinhasReceitas = () => {
  const TextService = useState("Exemplo");

  return (
    <ScrollView>
      <Statusbar />

      <View style={styles.container}>
        <Text style={styles.titulo}>Minhas Receitas</Text>

        <Text style={styles.texto}>{TextService}</Text>
      </View>
    </ScrollView>
  );
};

export default ModalMinhasReceitas;