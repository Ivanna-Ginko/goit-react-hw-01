
const FriendList = ({friends}) => {
    return (
<ul>
    {friends.map((u)=>{
        return <li  key={u.id}><FriendListItem friend={u} /></li>
    })}
</ul>
    )
}

const FriendListItem = ({friend}) => {
        return (
        <div key={friend.id}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p>
                {friend.isOnline ? "Online" : "Offline"}
            </p>
        </div>
);    

}

export default FriendList;