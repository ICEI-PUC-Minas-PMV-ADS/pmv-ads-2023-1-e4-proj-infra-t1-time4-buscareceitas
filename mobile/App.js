import { View } from "react-native";
import MinhasReceitas2 from "./src/Screens/MinhasReceitas2";
import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";
import MeuPerfil from "./src/Screens/MeuPerfil";
import GerenciarReceitas from "./src/Screens/GerenciarReceitas";


export default function App() {
  return (
    <View>
      {/*Para visualizar as telas desenvolvidas, basta trocar o nome a seguir. Ex: <Login />, <Home />, etc. e rodar o comando npm start para abrir o QR code do Expo Go*/}
      <GerenciarReceitas />
    </View>
  );
}

