import css from "./friendList.module.css";


const FriendList = ({friends}) => {
    return (
<ul  className={css.friendlist}>
    {friends.map((u)=>{
        return <li  key={u.id}><FriendListItem friend={u} /></li>
    })}
</ul>
    )
}

const FriendListItem = ({friend}) => {
        return (
        <div>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p>
                {friend.isOnline ? "Online" : "Offline"}
            </p>
        </div>
);    

}

export default FriendList;