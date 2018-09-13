import React, { Component } from 'react';

import { View, Text, Button, FlatList } from 'react-native';
import ItemCatalogo from './componentes/item-catalogo';
import ItemSeparator from './componentes/item.separator';

import Api from '../../utils/api';

import HttpProduct from "../../services/Product/http-products";

class Catalogo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catalogoList: []
        };
    }

    componentDidMount = () => {
        this.getProductsApi();
    };

    async getProductsApi() {
        const data = await HttpProduct.getProducts();
        console.log(data);
        await this.setState({
            catalogoList: data
        })
    }

    static navigationOptions = {
        title: 'Catalogo',
    }

    renderItem = ({ item }) => <ItemCatalogo navigation={this.props.navigation} catalogo={item} />
    separatorComponent = () => <ItemSeparator />
    emptyComponent = () => <Text>No hay productos</Text>
    keyExtractor = item => item._id

    render() {
        return (
            <View>
                <Home>
                    <Header>
                        <Button
                            title="Cart"
                            onPress={() => this.props.navigation.navigate('DetalleScreen')}
                        />
                    </Header>
                    {/*Creaci+on de lista*/}
                    <FlatList
                        data={this.state.catalogoList}
                        renderItem={this.renderItem}
                        ListItemComponent={this.emptyComponent}
                        ItemSeparatorComponent={this.separatorComponent}
                        keyExtractor={this.keyExtractor}
                    />
                </Home>
            </View>
        );
    }
}

export default Catalogo;