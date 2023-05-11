import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Logo from "../../components/Logo/indexS"; 
import { TextInput } from "react-native-paper";
import DefaultButton from "../../components/Buttons/Default";
import Statusbar from "../../components/StatusBar";
import CancelButton from "../../components/Buttons/Cancel";
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