
import s from "./Header.module.css";

import { authStateType } from "../../redax/auth-reducer";

export type HeaderPropsType = {
  authState: authStateType;
  logOutHandler: () => void;
};

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img
        src="https://fikiwiki.com/uploads/posts/2022-02/1645039825_58-fikiwiki-com-p-kartinki-logotipov-58.jpg"
        alt=""
      />

      <div className={s.login}>
        {props.authState.authLogin ? (
          <button onClick={props.logOutHandler}> Log Out</button>
        ) : (
          <button> LogIn</button>
        )}

        {props.authState.authLogin && props.authState.login}
      </div>
    </header>
  );
};
