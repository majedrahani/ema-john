import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders = async()=>{
const loadedProduct = await fetch('products.json');
const products = await loadedProduct.json();
 
console.log(products)

const storedCart = getShoppingCart();

const savedCart = [];
for(const id in storedCart){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
    }
}




console.log(savedCart)
return savedCart;
}
export default cartProductsLoaders;