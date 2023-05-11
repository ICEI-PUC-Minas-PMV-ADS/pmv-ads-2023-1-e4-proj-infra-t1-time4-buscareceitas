import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../components/Logo/indexS";
import Statusbar from "../../components/StatusBar";
import DefaultButton from "../../components/Buttons/Default";
import { styles } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
        onPress={() => console.log('Pressed')} />

        <TouchableOpacity style={styles.register}>
          <Text> Não tem conta? </Text>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate("OwnerRegistration")}
          >
          Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
