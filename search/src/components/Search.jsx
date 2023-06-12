import { useState } from "react";
import { Users } from "../data/Users";
const Search = () => {
  const [search, setSearch] =  useState("")

  const filteredDatas = Users.filter((user)=>{
    return user.first_name.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <>
      <div className="flex items-center w-full flex-col">
        <div className="my-8">
        <input className="w-3/2 px-2 border border-black border-t-0 border-r-0 outline-none border-l-0" type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} />

        </div>
        <div>

        {filteredDatas.map((user) => {
            return <p>{user.first_name}</p>;
        })}
        </div>
      </div>
    </>
  );
};

export default Search;
