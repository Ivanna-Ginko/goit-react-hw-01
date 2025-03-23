import css from "./friendList.module.css";


const FriendList = ({friends}) => {
    return (
<ul  className={css.friendlist}>
    {friends.map((u)=>{
        return <li  key={u.id}  className={css.item}><FriendListItem friend={u} /></li>
    })}
</ul>
    )
}

const FriendListItem = ({friend}) => {
        return (
        <div>
            <img  className={css.img} src={friend.avatar} alt="Avatar"  />
            <p className={css.name}>{friend.name}</p>
            <p>
                {friend.isOnline ? <p className={`${css.status} ${css.green}`}> Online </p> : <p className={`${css.status} ${css.red}`}> Offline </p>}
            </p>
        </div>
);    

}

export default FriendList;