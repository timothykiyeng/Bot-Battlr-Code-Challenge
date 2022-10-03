

import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botData, setBotData] = useState([]);

  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;