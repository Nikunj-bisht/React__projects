import { useContext } from "react";
import { Cart_context } from "../store/Cartcontext";
import CartItem from "./CartItem";

 export function Cartorder () {

const cart_context = useContext(Cart_context);

return (

<ul>
    {
        cart_context.items.map(single=><CartItem 
                               price = {single.price}
                               amount = {single.amount}
                               ></CartItem>)
    }
</ul>

);


}