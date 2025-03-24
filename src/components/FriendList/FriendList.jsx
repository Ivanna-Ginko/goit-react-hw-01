import css from "./friendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";


const FriendList = ({friends}) => {
    return (
<ul  className={css.friendlist}>
    {friends.map((u)=>{
        return <li  key={u.id}  className={css.item}><FriendListItem friend={u} /></li>
    })}
</ul>
    )
}



export default FriendList;