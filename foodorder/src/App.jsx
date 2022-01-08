import { Fragment, useState , useReducer } from "react";
import Cartcomponent from "./components/cart/Cartcomponent";
import Headercomponent from "./components/parts/Headercomponent";
import Mealoptions from "./components/parts/Meals/Mealsoptions";
import Mealsummary from "./components/parts/Meals/Mealsummary";
import { Cart_context } from "./components/store/Cartcontext";


function App() {

  const [show, changeshowstate] = useState(false);

  const [cartstate , cartstatefun] = useReducer((state , action)=>{

    if(action.type === 'ADD'){

      const new_items = state.items.concat(action.item);
      const new_total_am = state.totalamount + action.item.amount * action.item.price;

return {
  items : new_items,
  totalamount : new_total_am
}
    }

  },{items:[] , totalamount:0});

  function showmodal() {
    changeshowstate(true);
  }

  function hidecart() {
    changeshowstate(false);
  }

  function additemstocart(item) {
   
       cartstatefun({type:'ADD' , item: item})
 
  }

  function removeitemsfromcart() {



  }

  const cartstorageobject = {
    items: cartstate.items,
    totalamount: cartstate.totalamount,
    additem: additemstocart,
    removeitem: removeitemsfromcart


  }
  console.log(cartstorageobject);

  return (

    <Fragment>
      <Cart_context.Provider value={cartstorageobject}>
        <Headercomponent funtoshowmodal={showmodal} funtohidecart={hidecart}></Headercomponent>
        {show && <Cartcomponent hidecartfun={hidecart}></Cartcomponent>}
        <Mealsummary></Mealsummary>
        <Mealoptions></Mealoptions>
      </Cart_context.Provider>
    </Fragment>


  );
}

export default App;
