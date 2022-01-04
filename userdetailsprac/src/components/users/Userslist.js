import classes from './Userslist.module.css';

const Userslist = (props) => {
console.log('userlist');
const {list} = props;
    return (
<ul>
    {

list.map(per => {

    return <li>{per.username} {per.age}</li>
    
    })
    

    }
</ul>


    )


}

export default Userslist;