import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { TextInputimport, Button, FAB } from "react-native-paper";
import NavBar from "../../Components/NavBar/index";
import { styles } from "./styles";

const MinhasReceitas2 = () => {
     const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <ScrollView>
    <NavBar />
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/icons/Add.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Receita1</Text>
      
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
                    </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/icons/Add.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Receita2</Text>
      
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
                    </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default MinhasReceitas2