import { useContext } from "react";
import { Cart_context } from "../store/Cartcontext";
import CartItem from "./CartItem";

export function Cartorder() {

    const cart_context = useContext(Cart_context);

    function itemincreased(item) {

        cart_context.additem({...item , amount:1});

    }

    function itemdec(item) {

  cart_context.removeitem({...item , amount : 1});

    }

    return (

        <ul>
            {
                cart_context.items.map(single => <CartItem
                    id={single.id}
                    price={single.price}
                    amount={single.amount}
                    onAdd={itemincreased.bind(null , single)}
                    onRemove={itemdec.bind(null , single)}
                ></CartItem>)
            }
        </ul>

    );


}