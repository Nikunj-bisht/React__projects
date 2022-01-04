import classes from './Mealform.module.css'

const Mealform = () =>{


function addtocart(event){

  event.preventDefault();

}


    return (

    <form className= {classes.form} onSubmit={addtocart}>
        <div className={classes.input}>
        <label>Amount</label>
<input type="number"></input>

        </div>
 <button>+ Add</button>

    </form>

    )


}

export default Mealform