const API_ENDPOINT = "https://shoppingproducts.herokuapp.com";

class Api {

    async getProducts() {
        try{
            const query = await fetch(`${API_ENDPOINT}/products`);
            const data = await query.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }
    

    async getProductDetail(id) {
        try{
            const query = await fetch(`${API_ENDPOINT}/products/${id}`);
            const data = await query.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }

}

export default new Api();//No es del framework React-Native, hace parte d eEcmaScript 2016