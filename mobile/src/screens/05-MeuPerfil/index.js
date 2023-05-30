import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/Logo/indexS"; 
import { TextInput } from "react-native-paper";
import DefaultButton from "../../components/Buttons/Default";
import Statusbar from "../../components/StatusBar";
import CancelButton from "../../components/Buttons/Cancel";
import Nav from "../../components/NavBar";
import { styles } from "./styles";

import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

const currentUser = {
  name: "",
  email: "",
};

const MeuPerfil = ({ route }) => {
  try {
    let current = route.params.currentUser;
    console.log("router: ", current);

    currentUser.userId = current.userId;
    currentUser.name = current.name;
    currentUser.email = current.email;
    console.log("MeuPerfil: ", currentUser);
  } catch (err) {
    console.log(err);
  }

  const navigation = useNavigation();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [id, setUserId] = useState(currentUser.userId);

  let updateUser = () => {
    console.log(name, email, id);

    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE user_buscareceitas set name=?, email=?,  WHERE user_id=?",
        [name, email, id],
        (tx, results) => {
          let len = results.rowsAffected;

          if (len > 0) {
            alert("Usuário Atualizado!");
            navigation.navigate("Login");
          } else {
            alert("Erro ao atualizar o usuário");
          }
        }
      );
    });
  };

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM user_buscareceitas where user_id=?",
        [id],
        (tx, results) => {
          let len = results.rowsAffected;
          if (len > 0) {
            alert("Usuário Apagado!");
            navigation.navigate("Login");
          } else alert("Erro ao apagar o usuário");
        }
      );
    });
  };

return (
     <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("Home")} />

     <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

          <TextInput
          style={styles.input}
          label="Senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon name="key" />}
        />

       
        <DefaultButton text={"Alterar dados"} onPress={updateUser} />

        <DefaultButton text={"Deletar a conta"} onPress={deleteUser} />

        <CancelButton text={"Sair da conta"} />

      </View>
    </ScrollView>
  );
};

export default MeuPerfil;
