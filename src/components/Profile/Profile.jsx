const Profile = props => {

    return (
        <div>
          <div>

            <img src={props.image} alt="avatar.user"/>
        
            <p>{props.name}</p>
            <p>{props.tag}</p>
            <p>{props.location}</p>
            <ul>
              <li>
              <span>Followers</span>
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <span>Followers</span>
              <span>{props.stats.followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span>{props.stats.views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span>{props.stats.likes}</span>
            </li>
          </ul> 

        </div>
          
      );
};

export default Profile;