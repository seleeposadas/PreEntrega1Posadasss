import getProducts from "../../data/data"
import { useEffect, useState } from "react"

const ItemListContainer = ({greetings}) => {
const [ products, setProducts] = useState([])
useEffect( ()=> {
    getProducts()
    .then((respuesta) => {
        setProducts(respuesta)
    })
    .catch((error) =>{
        console.log(error)
    })
    .finally(() => {
        console.log("Finalizo la promesa")
    })
}, {})

    return (
        <div>
         <p>{greetings}</p>
        {
            products.map((product)=>(
                <div key={product.id}>
                    <p>{product.name}</p>
                </div>
            ))
        }
        </div>
    );
};
export default ItemListContainer