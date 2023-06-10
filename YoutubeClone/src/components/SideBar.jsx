import {Stack} from '@mui/material'
import { categories } from '../utils/constants'
import classNames from 'classnames'
const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <>
        <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: {
                sx: "auto", md: '95%'
            },
            flexDirection:{
                md: 'column'
            }
        }}
        >
            {
                categories.map((category)=>(
                 
                        <button key={category.name} onClick={()=>setSelectedCategory(category.name)} className={classNames('flex text-white items-center rounded-full my-2 px-3  py-2 hover:bg-red-600 hover:duration-300 hover:ease-in-out', {
                            'bg-red-600': category.name === selectedCategory
                          })}>
                          <span className={classNames('mr-3',{
                            "text-white": category.name === selectedCategory,
                            "text-red-600": category.name !== selectedCategory
                          })} >{category.icon}</span>  
                          <span className={classNames({
                            "opacity-100": category.name === selectedCategory,
                            "opacity-80": category.name !== selectedCategory

                          })} >{category.name}</span>  
                        </button>
                    ))
                
            }

        </Stack>
      
    </>
  )
}

export default SideBar
