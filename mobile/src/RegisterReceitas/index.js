import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import NavBar from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";


const form = {
    receitaName: "",
    receitaDescription: "",
     };
  
  const AddReceitas = () => {
   
    const [receitaName, setReceitaName] = useState("");
    const [receitaDescription, setReceitaDescription] = useState("");


    return (
      <ScrollView>
        <Statusbar />
        <NavBar />
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.input}
              label="Nome da Receita"
              onChangeText={(receitaName) => setReceitaName(receitaName)}
              mode="outlined"
              activeOutlineColor="#182E3A"
              outlineColor="#182E3A"
              right={<TextInput.Icon icon="square-edit-outline" />}
            />
          </View>
  
          <TextInput
            style={styles.input}
            label="Modo de Preparo"
            onChangeText={(receitaDescription) =>
              setReceitaDescription(receitaDescription)
            }
            mode="outlined"
            activeOutlineColor="#182E3A"
            outlineColor="#182E3A"
            right={<TextInput.Icon icon="square-edit-outline" />}
          />
  
              <DefaultButton text={"Salvar"} onPress={AddReceitas} />
          <CancelButton text={"Cancelar"} />
        </View>
      </ScrollView>
    );
  };
  export default AddReceitas;