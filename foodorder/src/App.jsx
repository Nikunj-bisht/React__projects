import { Fragment, useState, useReducer } from "react";
import Cartcomponent from "./components/cart/Cartcomponent";
import Headercomponent from "./components/parts/Headercomponent";
import Mealoptions from "./components/parts/Meals/Mealsoptions";
import Mealsummary from "./components/parts/Meals/Mealsummary";
import { Cart_context } from "./components/store/Cartcontext";




function App() {

  const [show, changeshowstate] = useState(false);

  const [cartstate, cartstatefun] = useReducer((state, action) => {

    const find_index = () => {

      const index =  state.items.findIndex((it) => {
          return it.id === action.item.id
        })
    
    return index;
    
      }
      
    const new_total_am = state.totalamount + action.item.amount * action.item.price;

    if (action.type === 'ADD') {


      const item_index = find_index();

      let update_item_object, update_items_array = [...state.items];
      const object_tobe_change = state.items[item_index];
      console.log(object_tobe_change);
      if (object_tobe_change) {

        update_item_object = {
          ...object_tobe_change,
          amount: object_tobe_change.amount + action.item.amount
        };

        update_items_array[item_index] = update_item_object;

        return {
          items: update_items_array,
          totalamount: new_total_am
        }
      } else {

        return {
          items: state.items.concat(action.item),
          totalamount: new_total_am
        }
      }


    }else if(action.type === 'REMOVE'){

                   const item_index = find_index()
                   let update_item_object, update_items_array = [...state.items];
      const object_tobe_dec = state.items[item_index];
      console.log(object_tobe_dec);
      update_item_object = {
        ...object_tobe_dec,
        amount : object_tobe_dec.amount - action.item.amount
      }

update_items_array[item_index] = update_item_object; 

      return {
        items : update_items_array , 
        totalamount : new_total_am
      }

    }

  }, { items: [], totalamount: 0 });


  


  function showmodal() {
    changeshowstate(true);
  }

  function hidecart() {
    changeshowstate(false);
  }

  function additemstocart(item) {

    cartstatefun({ type: 'ADD', item: item })

  }

  function removeitemsfromcart(item) {

    cartstatefun({type : 'REMOVE' , item : item})

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
