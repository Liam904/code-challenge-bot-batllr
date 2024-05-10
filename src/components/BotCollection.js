import React, { useState } from "react";
import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs"

function BotCollection({bots, setClickedBot}) {


  function addBot(bots){
    setClickedBot(bots)

  }
  

  

  return (
    <div className="ui four column grid">
      <div className="row">
       

        {bots.map(function(bot){
          return (
          <div onClick={()=>addBot(bot)}>
          <BotCard key={bot.id} bot={bot} addBot={addBot} /> 
          </div>)
        })}

       
      </div>
     

    </div>
  );
}

export default BotCollection;
