import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

import Catalogo from './src/scenes/Catalogo';
import Detalle from './src/scenes/Detalle';
import Compra from './src/scenes/Compra';
import Formulario from './src/scenes/Formulario';
import Finalizado from './src/scenes/Finalizado';
import CatalogDetail from "./src/scenes/CatalogDetail";

const AppNavigator = StackNavigator(
  {
    CatalogoScreen: {
      screen: Catalogo,
      navigationOptions:()=>({
        title: "Catalogo"
      })
    },    
      DetalleScreen: {
        screen: Detalle        
      }, 
      CompraScreen: {
        screen: Compra        
      }, 
      FormularioScreen: {
        screen: Formulario        
      }, 
      FinalizadoScreen: {
        screen: Finalizado        
      }, 
      CatalogDetailScreen :{
        screen: CatalogDetail,
        navigationOptions: () => ({
          title: 'Product Detail'
        })
      },
  },
  {
    initialRouteName: 'CatalogoScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F93B12',
        borderBottomColor: '#F93B12',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 25
      }
    }
  }
);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //Retorna un component
      <AppNavigator />
    );
  }
}
