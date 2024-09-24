import { Link } from "react-router-dom"

export  const products = [
    {name: 'product1', price: 100, id:1},
    {name: 'product2', price: 200, id:2},
    {name: 'product3', price: 300, id:3},
    {name: 'product4', price: 400, id:4},
    {name: 'product5', price: 500, id:5},
]
export default function Products() {
  
  return (
    <div>
      <ul>
        {products.map(
            (product)=>(
                <Link to={`products/${product.id}`}>
                 <li
              key={product.id}
              >
             {product.name}
             {product.price}
         </li>
                </Link>
            
        )
           
        )}
      </ul>
    </div>
  )
}

