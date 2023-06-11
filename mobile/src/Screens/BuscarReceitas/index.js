import React, { useState } from "react";
import { ScrollView, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import NavBar from "../../Components/NavBar";
import { styles } from "./style";

const BuscarReceitas = () => {     
     const [nomereceita, setIngredientes] = useState("");
     const [tempopreparo, setTempoPreparo] = useState("");
     const [tipocomida, setTipoComida] = useState("");

  return (
    <ScrollView>
      <NavBar />
      <View style={styles.container}>
      <Statusbar/>
      <Logo/>
    
    <TextInput
          style={styles.input}
          label="Ingredientes da sua geladeira"
          value={nomereceita}
          autoCorrect={false}
          onChangeText={(text) => setIngredientes(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"/>  

    <TextInput
          style={styles.input}
          label="Tempo de Preparo"
          value={tempopreparo}
          autoCorrect={false}
          onChangeText={(text) => setTempoPreparo(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

    <TextInput
          style={styles.input}
          label="Tipo de Comida"
          value={tipocomida}
          autoCorrect={false}
          onChangeText={(text) => setTipoComida(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />     
      
          
      <DefaultButton text={"Realizar Busca"} onPress={() => console.log('Botão buscar foi selecionado!')} />
      <Text>{'\n'}</Text>
    
    </View>
    </ScrollView>
  );
};

export default BuscarReceitas