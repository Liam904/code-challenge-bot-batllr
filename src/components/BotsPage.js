import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import axios from "axios";
import EnlistSection from "./EnlistSection";
function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]= useState([])
  const [clickedBot, setClickedBot] = useState(null)
  const [army, setArmy] = useState([])

  function getBots(){
    axios.get("http://localhost:3000/bots")
    .then((response)=> setBots(response.data))


  }

 
  useEffect(()=>{
    getBots()
  }, [])

  return (
    <div>
      <YourBotArmy bots={bots} army={army}/>
      <EnlistSection 
      army={army}
      setArmy={setArmy}
      bots={bots}
      setBots={setBots}
      
      clickedBot={clickedBot} setClickedBot={setClickedBot} />
      <BotCollection bots={bots} setClickedBot={setClickedBot} />
    </div>
  )
}

export default BotsPage;
