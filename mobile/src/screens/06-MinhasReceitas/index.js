import { ScrollView, View, FlatList } from "react-native";
import { useNavigation, Alert } from "@react-navigation/native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();
let receitasList = [];

const MinhasReceitas = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='car_buscareceitas'",
        [],
        function (tx, res) {
          console.log("item (useEffect):", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS car_buscareceitas", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS Receitas_buscareceitas(id INTEGER PRIMARY KEY AUTOINCREMENT, xxxxxxxxxxxx )",
              []
            );
          }
        }
      );
    });

    db.transaction(function (tx) {
      tx.executeSql("SELECT * FROM receitas ", [], (tx, results) => {
        let len = results.rows.length;
        if (len > 0) {
          alert("Receitas carregadas com sucesso!");
          this.receitaList = results.rows;
          console.log(this.receitaList._array);
          setFlatListItems(this.receitaList._array);
        } else {
          alert("Receitas não encontradas!");
        }
      });
    });
  }, []);

  let listItemView = (item) => {
    return (
      <View>
        <List
          text={item.model}
          onPress={() => navigation.navigate("GerenciarReceitas")}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Home")} />

      <View style={styles.container}>
        <FlatList
          data={flatListItems}
          renderItem={({ item }) => listItemView(item)}
        />
        <DefaultButton
          text={"Adicionar receitas"}
          onPress={() => navigation.push("AddReceitas")}
        />
      </View>
    </ScrollView>
  );
};

export default MinhasReceitas;
