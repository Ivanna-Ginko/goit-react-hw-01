import clsx from "clsx";
import css from "./profile.module.css";




const Profile = props => {

    return (
        <div className={css.profile}>
          <div>

            <img  className={css.img} src={props.image} alt="avatar.user"/>
        
            <p className={css.name}>{props.name}</p>
            <p className={css.tag}>@{props.tag}</p>
            <p className={css.tag}>{props.location}</p>
          </div>

          <ul className={css.stats}>
            <li className={css.itemstats}>
              <span className={css.span}>Followers</span>
              <span className={css.qnt}>{props.stats.followers}</span>
            </li>
            <li className={css.itemstats}>
              <span className={css.span}>Views</span>
              <span className={css.qnt}>{props.stats.views}</span>
            </li>
            <li className={css.itemstats}>
              <span className={css.span}>Likes</span>
              <span className={css.qnt}>{props.stats.likes}</span>
            </li>
          </ul> 

        </div>
          
      );
};

export default Profile;