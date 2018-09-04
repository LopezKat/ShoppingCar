import React, { Component } from 'react';

import { View, Text, Button,FlatList} from 'react-native';
import ItemCatalogo from './componentes/item-catalogo';
import ItemSeparator from './componentes/item.separator';

class Catalogo extends Component {

    constructor(props){
        super(props);
        this.state={
            catalogoList: []
        };
    }

    componentDidMount= ()=>{
        const catalogo = [
            {
                name: 'Iphone 6',
                price: '$1.200.000',
                product: 'https://tigocolombia.vteximg.com.br/arquivos/ids/155736-1200-1200/Front-iPHONE6-SpGry.jpg?v=636596460629330000',
                id: 1
            },
            {
                name: 'Samsung S9',
                price: '$2.500.000',
                product: 'http://www.celularesenlinea.com.co/674-large_default/samsung-galaxy-s9.jpg',
                id: 2
            },
            {
                name: 'Iphone X',
                price: '$3.600.000',
                product: 'https://imei24.com/img/apple/11_41_10_apple-iphone-x.jpg',
                id: 3
            },
            {
                name: 'Huawei P20',
                price: '$900.000',
                product: 'https://i.blogs.es/137741/huawei-p20-pro-02/450_1000.jpg',
                id: 4
            },
            {
                name: 'Huawei Y 2017',
                price: '$500.000',
                product: 'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/h/u/huawei-y6-pro-2017-oro-dual-sim-6901443193011.jpg',
                id: 5
            },
            {
                name: 'Moto g6',
                price: '$800.000',
                product: 'https://i.blogs.es/82c915/moto-g6/450_1000.jpg',
                id: 6
            },
            {
                name: 'Samsung S8',
                price: '$1.800.000',
                product: 'https://res.cloudinary.com/modesto/image/fetch/e_trim/w_420,h_480,c_fit,f_auto,q_auto,fl_lossy/http%3A%2F%2Fres.cloudinary.com%2Fmodesto%2Fimage%2Fupload%2Fv1499445901%2Fclient%2Fcatalog%2Fdevices%2Fsamsung%2FS8_Midnight_Black_Hero.png',
                id: 7
            }
        ];

        this.setState({
            catalogoList: catalogo
        });
    };

    static navigationOptions = {
        title: 'Catalogo',
    }
    
    renderItem=({item}) => <ItemCatalogo navigation={this.props.navigation} catalogo={item} />
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay productos</Text> 
    keyExtractor=item => item.id.toString()

    render() {
        return (
            <View>               
                {/*Creaci+on de lista*/}
                <FlatList
                    data={this.state.catalogoList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />

            </View>
        );
    }
}

export default Catalogo;