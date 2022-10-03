

import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botData, setBotData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, []);
  //console.log(botData)

  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;