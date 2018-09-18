import React from 'react';
import {  StackNavigator,createMaterialTopTabNavigator,DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Catalogo from './scenes/Catalogo';
import Detalle from './scenes/Detalle';
import Compra from './scenes/Compra';
import Formulario from './scenes/Formulario';
import Finalizado from './scenes/Finalizado';
import Profile from './scenes/Profile';
import { SideMenu } from './side-menu';



//Alone
import Settings from './settings';
import Historial from './historial';
import Chat from './chat';


    const iconTab1 = (<Icon name="user-circle" size={24} color="#999"/>);
    const iconTab2 = (<Icon name="cart-plus" size={24} color="#999"/>);
    const iconTab3 = (<Icon name="credit-card" size={24} color="#999"/>);

    export const Stack = StackNavigator({        
        CatalogoScreen: { screen: Catalogo },
        DetalleScreen: { screen: Detalle },        
        FormularioScreen: { screen: Formulario },
        FinalizadoScreen: { screen: Finalizado },
        CompraScreen: { screen: Compra },
    },
    {
      initialRouteName: 'CatalogoScreen',
    }); 

    export const Tabs = createMaterialTopTabNavigator({
        Tab1: { 
            screen: Historial ,
            navigationOptions:{
                title: 'Historial',
                tabBarIcon: iconTab1
            } 
        },
        Tab2: { 
            screen: Chat ,
            navigationOptions:{
                title: 'Chat',
                tabBarIcon: iconTab2
            } 
        },
        Tab3: { 
            screen: Detalle,
            navigationOptions:{
                title: 'Info',
                tabBarIcon: iconTab3
            }  
        },
    },
    {
        order: ['Tab1','Tab2', 'Tab3'],
        initialRouteName: 'Tab1',
        tabBarOptions:{
            activeTintcolor: '#e91e63',
            labelStyle:{
                fontSize: 16,
            },
            style:{
                backgroundColor: 'black'
            }
        }
    });
  
    export const Drawer = DrawerNavigator({
        Inicio: { screen: Stack },
        Tabs: { screen: Tabs },
        Profile: { screen: Profile },
        Settings: { screen: Settings },
        History: { screen: Historial }        
    },
    {
        drawerWidth: 300,
        contentComponent: SideMenu
    }
    );
