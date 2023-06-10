import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from "../../Components/NavBar/index";

const BuscaReceita = () => {
  const navigation = useNavigation();
  const [ingredients, setIngredients] = useState("");
  const [tempoPreparo, setTempoPreparo] = useState("");
  const [tipoComida, setTipoComida] = useState("");


  let realizeSearch = async () => {

    let params = ""

    let recipe = {
      ingredients: ingredients,
      tempoPreparo: tempoPreparo,
      tipoComida: tipoComida
    };

    if(recipe.ingredients != "" && recipe.ingredients != null){
      params = params.concat(`ingredientes=${recipe.ingredients}&`)
    }

    if(recipe.tempoPreparo != "" && recipe.tempoPreparo != null){
      params = params.concat(`tempoPreparo=${recipe.tempoPreparo}&`)
    }

    if(recipe.tipoComida != "" && recipe.tipoComida != null){
      params = params.concat(`tipoComida=${recipe.tipoComida}&`)
    }

    console.log(params)
    await AsyncStorage.setItem('recipesParams', JSON.stringify(params));
    navigation.navigate("MinhasReceitas");


  }

  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("MeuPerfil")} />

      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <TextInput
          style={styles.input}
          label="Ingredientes"
          value={ingredients}
          autoCorrect={false}
          onChangeText={(text) => setIngredients(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon name="account" />}
        />

        <TextInput
          style={styles.input}
          label="Tempo de Preparo"
          value={tempoPreparo}
          autoCorrect={false}
          onChangeText={(text) => setTempoPreparo(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon name="account" />}
        />

        <TextInput
          style={styles.input}
          label="Tipo de Comida"
          value={tipoComida}
          autoCorrect={false}
          onChangeText={(text) => setTipoComida(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon name="account" />}
        />

        <DefaultButton text={"Realizar Busca"} 
        onPress={realizeSearch} />

      </View>
    </ScrollView>
  );
};

export default BuscaReceita;
