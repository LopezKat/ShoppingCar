import React, { Component } from 'react';

import { View,Text} from 'react-native';
import ItemDetalle from './componentes/item-detalle';

import Api from '../../utils/api';


class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detalle: {}
        };
    }

    componentDidMount= ()=>{
        this.getProductsApi();
    };    

    async getProductsApi(id) {
        const data = await Api.getProductDetail(
            this.props.navigation.getParam('idProduct')
        );
        console.log(data);
       await this.setState({
            detalle: data
        })
    };    

    static navigationOptions = {
        title: 'Detalle',
    };

    render() {
        return (
            <View>                 
                 <ItemDetalle detalle={this.state.detalle} navigation={this.props.navigation} />                               
            </View>
        );
    }
}

export default Detalle;