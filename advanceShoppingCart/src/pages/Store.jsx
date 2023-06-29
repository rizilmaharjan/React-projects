import { StoreItem } from '../components/StoreItem'
import StoreItems from '../data/items.json'
export const Store = () => {
  return (
    <>
        <h1>Store</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4'>
          {
            StoreItems.map((item)=>{
              return(
                <StoreItem key={item.id} {...item} />
              )
            })
          }
        </div>
    </>
  )
}
