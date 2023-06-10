import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let realizeLogin = async () => {
    let user = {
      email: email,
      password: senha,
    };

    let encoderUser = JSON.stringify(user);
    console.log(encoderUser)

    // Para testar, trocar o IP para o IP da máquina que está rodando o backend
    await fetch('http://192.168.100.4:3000/api/v1/sessions/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderUser
      }
    ).then((response) => 
      response.json()
    ).then(async (responseData) => {
      console.log(`Response: ${responseData.userInfo}`)
      await AsyncStorage.setItem('userData', JSON.stringify(responseData.userInfo));
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
        <Logo />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon name="account" />}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={(text) => setSenha(text)}
          label="Senha"
          value={senha}
          secureTextEntry={true}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon name="key" />}
        />
        <TouchableOpacity style={styles.password}>
          <Text style={styles.password}> Esqueceu a senha?</Text>
        </TouchableOpacity>

        <DefaultButton text={"Entrar"} 
        onPress={realizeLogin} />

        <TouchableOpacity style={styles.register}>
          <Text> Não tem conta? </Text>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate("Cadastro")}
          >
          Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
