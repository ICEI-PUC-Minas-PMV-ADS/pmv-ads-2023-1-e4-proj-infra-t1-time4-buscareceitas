import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login/index";
import Cadastro from "../Screens/Cadastro/index";
import MeuPerfil from "../Screens/MeuPerfil/index";
import MinhasReceitas from "../Screens/MinhasReceitas/index";


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="MeuPerfil"
        component={MeuPerfil}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="MinhasReceitas"
        component={MinhasReceitas}
        options={{
          header: () => null,
        }}
      />

        </Stack.Navigator>
  );
};

export default Main;
