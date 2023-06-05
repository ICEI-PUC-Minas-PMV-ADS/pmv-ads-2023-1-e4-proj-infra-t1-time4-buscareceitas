import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Logo from "../../Components/Logo/index"; 
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import CancelButton from "../../Components/Buttons/Cancel";
import { styles } from "./styles";

const MeuPerfil = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
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
          onPress={MeuPerfil}
        />

        <DefaultButton
          text={"Deletar a conta"}
          onPress={MeuPerfil}
        />

        <CancelButton text={"Sair da conta"} />

      </View>
    </ScrollView>
  );
};

export default MeuPerfil;