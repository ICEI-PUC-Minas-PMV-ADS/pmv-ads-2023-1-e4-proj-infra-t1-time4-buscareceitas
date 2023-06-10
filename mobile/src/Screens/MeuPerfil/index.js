import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Logo from "../../Components/Logo/index"; 
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import CancelButton from "../../Components/Buttons/Cancel";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

const MeuPerfil = () => {
  const navigation = useNavigation();
  const [id, setId] = useState(""); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let meuPerfilInfo = async () => {
    let user = await AsyncStorage.getItem('userData');
    let userInfo = JSON.parse(user);
    setName(userInfo.name);
    setEmail(userInfo.email);
    setId(userInfo._id);
  }

  useEffect(() => {
    meuPerfilInfo();
  });

  let realizeUpdate = async () => {

    let user = {
      id: id,
      name: name,
      email: email,
      password: password,
    };

    let encoderUser = JSON.stringify(user);
    console.log(encoderUser)

    // Para testar, trocar o IP para o IP da máquina que está rodando o backend
    await fetch('http://192.168.100.4:3000/api/v1/sessions',{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderUser
      }
    ).then((response) => 
      response.json()
    ).then((responseData) => {
      navigation.navigate("Login");
    })
    .catch((error) => {
      console.error(error);
    });

  }

  let realizeDelete = async () => {


    // Para testar, trocar o IP para o IP da máquina que está rodando o backend
    await fetch(`http://192.168.100.4:3000/api/v1/sessions/${email}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then((response) => 
      response.json()
    ).then((responseData) => {
      navigation.navigate("Login");
    })
    .catch((error) => {
      console.error(error);
    }).finally(() => {
      navigation.navigate("Login");
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

       
        <DefaultButton
          text={"Alterar dados"}
          onPress={realizeUpdate}
        />

        <DefaultButton
          text={"Deletar a conta"}
          onPress={realizeDelete}
        />

        <CancelButton text={"Sair da conta"} onPress={() => {navigation.navigate("Login")}}/>

      </View>
    </ScrollView>
  );
};

export default MeuPerfil;