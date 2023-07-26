import { Field, InjectedFormProps, reduxForm } from "redux-form";
export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export const Login = (props: InjectedFormProps<FormDataType>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "250px",
      }}
    >
      <h2>Login</h2>
      <form
        onSubmit={props.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Field name="email" component="input" type="text" />
        <Field name="password" component="input" type="password" />
        <div>
          <Field
            style={{ width: "50px" }}
            name="rememberMe"
            component="input"
            type="checkbox"
          />
          RememberMe
        </div>

        <button style={{ width: "50px" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export const LoginForm = reduxForm<FormDataType>({
  form: "login",
})(Login);
