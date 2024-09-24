import { useParams } from "react-router-dom"
import  { products } from "./Products"
export default function Product() {
    const {productId}
     =useParams()
     const product = products.find(
        (product: { id: number })=>
            product.id ===
        Number(productId)
     )
  return (
    <div>
      {product?.name} <span>{product?.price}</span>
    </div>
  )
}
