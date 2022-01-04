import { Fragment } from "react";
import Headercomponent from "./components/parts/Headercomponent";
import Mealoptions from "./components/parts/Meals/Mealsoptions";
import Mealsummary from "./components/parts/Meals/Mealsummary";

function App() {
  return (
    
<Fragment>
  <Headercomponent></Headercomponent>
  <Mealsummary></Mealsummary>
  <Mealoptions></Mealoptions>
</Fragment>


  );
}

export default App;
