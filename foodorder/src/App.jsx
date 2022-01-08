import { Fragment, useState } from "react";
import Cartcomponent from "./components/cart/Cartcomponent";
import Headercomponent from "./components/parts/Headercomponent";
import Mealoptions from "./components/parts/Meals/Mealsoptions";
import Mealsummary from "./components/parts/Meals/Mealsummary";
import {Cart_context} from "./components/store/Cartcontext";


function App() {

  const [show, changeshowstate] = useState(false);

  function showmodal() {
    changeshowstate(true);
  }

  function hidecart() {
    changeshowstate(false);
  }

  function additemstocart() {


  }

  function removeitemsfromcart (){

       

  }

  const cartstorageobject = {
    items : [],
    totalamount : 0,
    additem : additemstocart,
    removeitem : removeitemsfromcart


  }

  return (

    <Fragment>
      <Cart_context.Provider value = {cartstorageobject}>
      <Headercomponent funtoshowmodal={showmodal} funtohidecart={hidecart}></Headercomponent>
      {show && <Cartcomponent hidecartfun={hidecart}></Cartcomponent>}
      <Mealsummary></Mealsummary>
      <Mealoptions></Mealoptions>
      </Cart_context.Provider>
    </Fragment>


  );
}

export default App;
