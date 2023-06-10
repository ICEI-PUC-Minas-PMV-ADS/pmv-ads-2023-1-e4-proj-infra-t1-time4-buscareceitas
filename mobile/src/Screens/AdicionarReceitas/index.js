import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import Statusbar from "../../Components/StatusBar";
import Logo from "../../Components/Logo/index";
import { TextInput, Button } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";

const AdicionarReceitas = () => {
  const navigation = useNavigation();

  const [titulo, setTitulo] = useState("");
  const [tempoPreparo, setTempoPreparo] = useState("");
  const [rendimento, setRendimento] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [informacoesAdicionais, setInformacoesAdicionais] = useState("");
  const [linkFoto, setlinkFoto] = useState("");


  let realizeRegistration = async () => {

    let user = await AsyncStorage.getItem('userData');
    let userInfo = JSON.parse(user);

    console.log(userInfo)

    let recipe = {
      titulo: titulo,
      tempoPreparo: tempoPreparo,
      rendimento: rendimento,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo,
      categoria: categoria,
      informacoesAdicionais: informacoesAdicionais,
      linkFoto: linkFoto,
      usuarioNome: userInfo.name,
      usuarioEmail: userInfo.email

    };

    let encoderRecipe = JSON.stringify(recipe);
    console.log(encoderRecipe)

    // Para testar, trocar o IP para o IP da máquina que está rodando o backend
    await fetch('http://192.168.100.4:3000/api/v1/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderRecipe
    }
    ).then((response) =>
      response.json()
    ).then((responseData) => {
      navigation.navigate("BuscaReceita");
    })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo/>

        <TextInput
          style={styles.input}
          label="Titulo da Receita"
          value={titulo}
          onChangeText={(titulo) => setTitulo(titulo)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Tempo de Preparo"
          value={tempoPreparo}
          onChangeText={(tempoPreparo) => setTempoPreparo(tempoPreparo)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Rendimento"
          value={rendimento}
          autoCorrect={false}
          onChangeText={(rendimento) => setRendimento(rendimento)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Ingredientes"
          value={ingredientes}
          onChangeText={(ingredientes) => setIngredientes(ingredientes)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Modo de Preparo"
          value={modoPreparo}
          onChangeText={(modoPreparo) =>
            setModoPreparo(modoPreparo)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Categoria"
          value={categoria}
          onChangeText={(categoria) =>
            setCategoria(categoria)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Informações Adicionais"
          value={informacoesAdicionais}
          onChangeText={(informacoesAdicionais) =>
            setInformacoesAdicionais(informacoesAdicionais)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Link da Receita"
          value={linkFoto}
          onChangeText={(linkFoto) =>
            setLinkFoto(linkFoto)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <DefaultButton text={"Cadastrar"} onPress={realizeRegistration} />
      </View>
    </ScrollView>
  );
};

export default AdicionarReceitas;