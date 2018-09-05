import React, { Component } from 'react';

import { View} from 'react-native';
import ItemDetalle from './componentes/item-detalle';


class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detalle: {}
        };
    }

    componentDidMount = () => {
        const detalle = {
            name: 'Iphone X',
            price: '$3.600.000',
            product: 'https://imei24.com/img/apple/11_41_10_apple-iphone-x.jpg',
            titulo: 'Caracteristicas',
            descripcion: 'El Apple iPhone X es una demostración de fuerza de Apple, mostrando lo que es capaz de hacer y para celebrar los 10 años del iPhone. El iPhone X cuenta con una pantalla de 5.8 pulgadas que abarca todo el frente del teléfono, dejando un espacio arriba para acomodar todos los sensores que contribuyen a Face ID, el nuevo método de desbloqueo por rostro, ya que el botón Touch ID desaparece. Con una atípica resolución de 2436 x 1125 pixels, acomoda 458ppi. Por dentro, el iPhone X tiene el nuevo procesador A11 Bionic. La cámara es dual de 12 MP similar a la del iPhone 8, es resistente al agua y corre iOS 11. ',


        };
        

        this.setState({
            detalle
            
        });
    };

    static navigationOptions = {
        title: 'Detalle',
    }
    render() {
        return (
            <View>
                <ItemDetalle detalle={this.state.detalle} navigation={ this.props.navigation } />                  
            </View>
        );
    }
}

export default Detalle;