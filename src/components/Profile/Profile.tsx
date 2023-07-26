import { ProfileDescription } from "./ProfileDescription/ProfileDescription";

import { MyPostContainer } from "./MyPost/MyPost-Conteiner";
import { ProfileApiType } from "../../api/api-social";

export type ProfilePropsType = {
  profile: ProfileApiType | null;
  isLoading: boolean;
  statusProfile: string;
  changeStatusProfile: (status: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
  
  
  return (
    <div>
      <ProfileDescription
        changeStatusProfile={props.changeStatusProfile}
        statusProfile={props.statusProfile}
        profile={props.profile}
        isLoading={props.isLoading}
      />
      <MyPostContainer />
    </div>
  );
};
