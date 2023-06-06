import React, { useState } from "react";
import { ScrollView, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import NavBar from "../../Components/NavBar";
import { styles } from "./styles";

const GerenciarReceitas = () => {     
     const [nomereceita, setNomeReceita] = useState("");
     const [tempopreparo, setTempoPreparo] = useState("");
     const [ingredientes, setIngredientes] = useState("");

  return (
    <ScrollView>
      <NavBar />
      <View style={styles.container}>
      <Statusbar/>
      <Logo/>
    
    <TextInput
          style={styles.input}
          label="Nome da receita"
          value={nomereceita}
          autoCorrect={false}
          onChangeText={(text) => setNomeReceita(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon name="eye" />}
        />  

    <TextInput
          style={styles.input}
          label="Tempo de preparo"
          value={tempopreparo}
          autoCorrect={false}
          onChangeText={(text) => setTempoPreparo(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon name="eye" />}
        />     

        <TextInput
          style={styles.inputingredientes}
          label="Ingredientes"
          value={ingredientes}
          multiline
          numberOfLines={10}
          maxLength={512}
          autoCorrect={false}
          onChangeText={(text) => setIngredientes(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon name="eye" />}
        />       
          
      <DefaultButton text={"Salvar"} onPress={() => console.log('Botão Salvar foi selecionado!')} />
      <Text>{'\n'}</Text>
      <CancelButton text={"Excluir"} onPress={() => console.log('Botão Excluir foi selecionado!')} />
    
    </View>
    </ScrollView>
  );
};

export default GerenciarReceitas