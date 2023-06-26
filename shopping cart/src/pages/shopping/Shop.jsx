import { Products } from "../../Products"
import Product from "./Product"
export default function Shop() {
  return (
    <>
        <div className="grid grid-cols-3 place-items-center gap-24 py-10">
        {
          Products.map((item)=>{
            return(
                <Product data={item} />

             
            )
          })
        }
        </div>
      
    </>
  )
}
