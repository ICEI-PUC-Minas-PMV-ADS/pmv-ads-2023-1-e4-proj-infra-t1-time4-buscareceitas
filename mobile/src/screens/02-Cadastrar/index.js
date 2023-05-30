import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../components/Logo/index";
import Statusbar from "../../components/StatusBar";
import DefaultButton from "../../components/Buttons/Default";
import { styles } from "./styles";

import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

const form = {
  name: "",
  email: "",
  cell: "",
  password: "",
  confirmedPassword: "",
};

const OwnerRegistration = () => {
  const navigation = useNavigation();

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
              "CREATE TABLE IF NOT EXISTS user_buscareceitas(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), cell VARCHAR(255), password VARCHAR(255), confirmed_password VARCHAR(255), type  VARCHAR(255))",
              []
            );
          }
        }
      );
    });
  }, []);

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  
   let registerOwner = () => {
    console.log(name, email, cell, document, password, confirmedPassword);

    if (!name) {
      alert("Por favor, preencha o nome!");
      return;
    }
    if (!email) {
      alert("Por favor, preencha o e-mail oara contato!");
      return;
    }

   if (!password) {
      alert("Por favor, preencha a senha!");
      return;
    }

    if (!confirmedPassword) {
      alert("Por favor, preencha a confirmação da senha!");
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        "INSERT INTO user_buscareceitas ( name , email , cell , password , confirmed_password) VALUES (?,?,?,?,?)",
        [name, email, cell, password, confirmedPassword],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
          console.log(results);

          if (results.rowsAffected > 0) {
            Alert.alert(
              "Sucesso",
              "Usuário Registrado com Sucesso!!!",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate("Login"),
                },
              ],
              { cancelable: false }
            );
          } else alert("Erro ao tentar Registrar o Usuário!!!");
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
          label="Nome completo"
          value={name}
          onChangeText={(name) =>setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={cell}
          autoCorrect={false}
          onChangeText={(cell) => setCell(cell)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

         <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Confirmar a Senha"
          secureTextEntry={true}
          value={confirmedPassword}
          onChangeText={(confirmedPassword) =>
            setConfirmedPassword(confirmedPassword)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <DefaultButton text={"Cadastrar"}  onPress={Registration} />
      </View>
    </ScrollView>
  );
};

export default Registration;
