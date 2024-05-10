import React from 'react'
import BotSpecs from './BotSpecs';
function EnlistSection({clickedBot, setClickedBot,army, setArmy, bots, setBots}) {
   
  function enlist(){
    for (let i=0; i < army.length; i++){
      let bot = army[i]

      if (bot.id === clickedBot.id){
        return;
        
      }

    }
    let newArmy = army;
    newArmy.push(clickedBot);
    setClickedBot(null)

    const newBots = bots.filter((bot) =>{
      if (bot.id=== clickedBot.id){
        return false

      }
      return true;
    })
    setBots(newBots)
  }
  

  function goBack(){
    setClickedBot(null)
  }

  if (clickedBot === null){
    return null;
  }
  return <BotSpecs bot={clickedBot} enlist={enlist} goBack={goBack} />
 
}

export default EnlistSection