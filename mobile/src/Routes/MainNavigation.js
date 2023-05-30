import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/01-Login";
import Cadastro from "../screens/02-Cadastrar";
import MeuPerfil from "../screens/05-MeuPerfil";
import MinhasReceitas from "../screens/06-MinhasReceitas";


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
