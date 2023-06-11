import React, { useState } from "react";
import { ScrollView, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import NavBar from "../../Components/NavBar";
import { styles } from "./style";

const ResultadoBusca = () => {     

  return (
    <ScrollView>
      <NavBar />
      <View style={styles.container}>
      <Statusbar/>

<div class="container-fluid" >

  <div class="card mb-3">
    
    <div class="row g-0">


      <div class="col-4">
        <img src="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" width="300"  class="img-fluid rounded-start"/>
      </div>

       
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">Brigadeiro de Chocolate</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            
          </p>          
        </div>
      </div>      
    </div>
    
    <div class="row g-0">


      <div class="col-4">
        <img src="https://cozinhasimples.com.br/wp-content/uploads/cupim-macio-cozinha-simples-780x470.jpg" width="300" class="img-fluid rounded-start "/>
      </div>

       
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">Cupim Assado</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            
          </p>          
        </div>
      </div>      
    </div>      
  </div>  
  
  <div class="row">

    <div class="col-4 p-5"></div>

    <DefaultButton text={"Nova Busca"} onPress={() => console.log('Botão nova busca foi selecionado!')} />
      <Text>{'\n'}</Text>
   
  
  </div>


</div>              
    
    </View>
    </ScrollView>
  );
};

export default ResultadoBusca