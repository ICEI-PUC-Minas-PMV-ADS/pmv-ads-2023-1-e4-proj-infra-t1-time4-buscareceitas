import { ScrollView, View, Text, Image, FlatList } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const MinhasReceitas = () => {

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);


  const getParams = async () => {

    let recipesParams = await AsyncStorage.getItem('recipesParams');
    
    // Para testar, trocar o IP para o IP da máquina que está rodando o backend
    let result = await fetch(`http://192.168.100.4:3000/api/v1/recipe?${recipesParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);

  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("BuscaReceita")} />

      <View style={styles.container}>
        {isLoading ? <Text>Loading...</Text> : (
          data.map((item) =>
            <View style={styles.box}>
              <Text style={styles.text_recipe}>{item.titulo}</Text>
              <Text style={styles.text_recipe_secondary}>{item.ingredientes}</Text>
              <Text style={styles.text_recipe_secondary}>{item.modoPreparo}</Text>
              <Image resizeMode="stretch" source={{ uri: item.link }} style={styles.img} />
            </View>
          )
        )}

        <DefaultButton
          text={"Adicionar receitas"}
          onPress={() => navigation.push("AdicionarReceitas")}
        />
      </View>
    </ScrollView>
  );
};

export default MinhasReceitas;




