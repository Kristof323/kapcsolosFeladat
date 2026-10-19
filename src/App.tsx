import { useState } from "react";
import Vezerlopult from "./components/Vezerlopult";
import Lampa from "./components/Lampa";

const App = () => {
  const [bekapcsolva, setBekapcsolva] = useState(false);
  const [ertek, setErtek] = useState<number>(10);  
  const novel = () => {
    setErtek( (elozoErtek) => elozoErtek + 1 );
  }
  const lampakapcsolasa = () => {
    setBekapcsolva( (elozo) => !elozo );
    console.log("Lámpa állapota: ", bekapcsolva ? "BE" : "KI");
    novel();
  }


  return <>
    <h1>Lifting State Up</h1>
    <Vezerlopult
      novel={novel}
      lampakapcsolasa={lampakapcsolasa}
    ></Vezerlopult>
    <Lampa ertek={ertek}></Lampa>
  </>
}

export default App;