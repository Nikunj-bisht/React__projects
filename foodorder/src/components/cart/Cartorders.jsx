

 export function Cartorder () {

    const  DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          amount:2,
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          amount:3,
          price: 16.5,
        }];
    

return (

<ul>
    {
        DUMMY_MEALS.map(single=><li>{single.name}</li>)
    }
</ul>

);


}