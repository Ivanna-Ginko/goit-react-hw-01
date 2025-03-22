const Profile = props => {

    return (
        <div>
          <div>

            <img src={props.image} alt="avatar.user"/>
        
            <p>{props.name}</p>
            <p>{props.tag}</p>
            <p>{props.location}</p>
          
          </div>

          {/* <ul>
            <li>
              <span>Followers</span>
              <span>{followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span>{views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span>{likes}</span>
            </li>
          </ul> */}

        </div>
          
      );
};

export default Profile;