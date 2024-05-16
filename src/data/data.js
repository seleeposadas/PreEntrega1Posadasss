import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const products = [
    {
     id: "1",
     name: "Computadora",
     description: "Prueba",
     price: 1200,
     stock: 5,
     categoria: "pc",
     image: "https://www.crucial.mx/content/dam/crucial/articles/for-pc-builders/new025-how-to-upgrade-your-pc/modern-gaming-pc.jpg.transform/medium-jpg/img.jpg"   
    },
    {
        id: "2",
        name: "Computadora",
        description: "Prueba2",
        price: 1200,
        stock: 5,
        categoria: "pc",
        image: "https://www.crucial.mx/content/dam/crucial/articles/for-pc-builders/new025-how-to-upgrade-your-pc/modern-gaming-pc.jpg.transform/medium-jpg/img.jpg"   
       }
]

const getProducts = () =>{
    return new Promise ( (resolve, reject) =>{
       setTimeout(() =>{
        resolve(products)
       }, 3000);
    });
};

export default getProducts;