import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../components/Logo/index";
import Statusbar from "../../components/StatusBar";
import DefaultButton from "../../components/Buttons/Default";
import { styles } from "./styles";

import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_buscareceitas'",
        [],
        function (tx, res) {
          console.log("item:", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS user_buscareceitas", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS user_buscareceitas(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), confirmed_password VARCHAR(255))",
              []
            );
          }
        }
      );
    });
  }, []);

  let realizeLogin = () => {
    console.log(email, password);

    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM user_buscareitas WHERE email = ? and password = ?",
        [email, password],
        (tx, results) => {
          let len = results.rows.length;

          if (len > 0) {
            alert("Usuário logado!");
            let currentUser = results.rows.item(0);

            navigation.navigate("Home", {
              userId: currentUser.user_id,
              name: currentUser.name,
              email: currentUser.email,
              });
          } else {
            alert("Usuário não encontrado!");
          }
        }
      );
    });
  };


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
            onPress={() => navigation.navigate("Cadastrar")}
          >
          Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
