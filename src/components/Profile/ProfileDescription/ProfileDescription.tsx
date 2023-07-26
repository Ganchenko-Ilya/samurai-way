import s from "./ProfileDescription.module.css";

import { Loader } from "../../../other/addComponents/Loader/Loader";
import { ProfileApiType } from "../../../api/api-social";
import { StatusProfile } from "./StatusProfile/StatusProfile";
export type ProfileDescriptionPropsType = {
  profile: ProfileApiType | null;
  isLoading: boolean;
  statusProfile: string;
  changeStatusProfile:(status:string) => void
};
export const ProfileDescription = (props: ProfileDescriptionPropsType) => {
  return (
    <div className={s.content}>
      {/* <div className={s.image}>
        <img
          src="https://i.pinimg.com/originals/45/94/2c/45942ccb43b3159a09f34a7c2755e67d.jpg"
          alt=""
        />
      </div> */}
      <StatusProfile changeStatusProfile={props.changeStatusProfile}  status={props.statusProfile} />
      {props.isLoading ? (
        <Loader />
      ) : props.profile ? (
        <div>
          <img src={props.profile.photos.large} alt="" />
          <div>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
