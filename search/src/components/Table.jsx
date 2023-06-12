import { useState } from "react"
import { Users } from "../data/Users"
const Table = () => {
   const[search, setSearch] = useState("")
   const filteredItems = Users.filter((user)=>{
    const {first_name, last_name, email} = user;
    return [first_name,last_name,email].some((property)=>property.toLowerCase().includes(search.toLowerCase())) 
   })
  return (
    <>
        <div className="flex items-center flex-col">
            <input type="text" placeholder="Search...." className="my-10 w-1/4 outline-none border-b-2" onChange={(e)=>setSearch(e.target.value)} />

        <table>
            <tbody>
                <tr>
                    <th className="px-14">First Name</th>
                    <th className="px-14">Last Name</th>
                    <th className="px-14">Email</th>
                </tr>
                {
                    filteredItems.map((info)=>{
                        return(
                            <tr className="odd:bg-[#D6EEEE] " key={info.id}>
                                <td>{info.first_name}</td>
                                <td>{info.last_name}</td>
                                <td>{info.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
      
    </>
  )
}

export default Table
