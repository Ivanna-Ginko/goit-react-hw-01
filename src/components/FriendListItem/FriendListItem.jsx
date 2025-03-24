import css from "./FriendListItem.module.css"



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

export default FriendListItem;