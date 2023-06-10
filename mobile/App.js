import { View } from "react-native";
import MinhasReceitas2 from "./src/Screens/AdicionarReceitas";
import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";
import MeuPerfil from "./src/Screens/MeuPerfil";
import GerenciarReceitas from "./src/Screens/GerenciarReceitas";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Main from "./src/Routes/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
    <Main />
    </NavigationContainer>
  );
}

