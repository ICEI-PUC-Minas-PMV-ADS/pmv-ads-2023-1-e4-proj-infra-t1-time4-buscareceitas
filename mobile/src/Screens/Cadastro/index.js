import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

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
