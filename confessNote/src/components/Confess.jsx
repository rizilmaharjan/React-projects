import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const getLocalData = ()=>{
    const confessions = localStorage.getItem("myConfession");
    if(confessions){
        return JSON.parse(confessions)
    }else{
        return [];
    }
}

const Confess = () => {
  const [note, setNote] = useState("");
  const [storeMessage, setStoreMessage] = useState(getLocalData());


  

//   set confessions in localstorage
useEffect(()=>{
    localStorage.setItem("myConfession", JSON.stringify(storeMessage))

},[storeMessage])



  let myDate = new Date()
  let year = myDate.getFullYear();
  let month = myDate.toLocaleString('default', {month: 'short'})
  let day = myDate.getDate();

  let formattedDate = year + ',' + month + '' + day;
  let handleClick = () => {

    const yourConfession = {
        id: new Date(),
        confession: note
    }
    setStoreMessage([...storeMessage, yourConfession]);
    setNote("");
  };

  const deleteConfession = (id)=>{
    const remainingConfession = storeMessage.filter((item)=>{
        return item.id !== id
    })
    setStoreMessage(remainingConfession)
  }
  return (
    <>
      <div className="py-14 w-screen flex justify-center">
        <div className="relative flex justify-center">
          <textarea
            cols="80"
            rows="12"
            value={note}
            placeholder="Write your confession here...."
            onChange={(e) => setNote(e.target.value)}
            className="outline-purple-800 border border-black rounded-lg text-black px-10 pt-10 focus:border focus:border-purple-800 "
          ></textarea>
          <div className="w-fit absolute bottom-2">
            <Button onclick={handleClick} value="confirm" />
          </div>
        </div>
      </div>
      <div className="grid place-items-center gap-4 md:grid-cols-2 md:w-3/4 md:p-4 lg:grid-cols-3 lg:px-10 lg:w-5/6 w-2/3 mx-auto">
        {storeMessage.map((item) => {
          return <Card del={deleteConfession} key={item.id} id={item.id} notes={item.confession} date={formattedDate} />;
        })}
      </div>
    </>
  );
};

export default Confess;
