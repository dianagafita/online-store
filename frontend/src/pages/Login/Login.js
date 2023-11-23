import { Link, useNavigate, useSearchParams } from "react-router-dom";
import classes from "./Login.module.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");

  useEffect(() => {
    if (!user) return;

    returnUrl ? navigate(returnUrl) : navigate("/");
  }, [user]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Login" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="email"
            label="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: "Email is not valid",
              },
            })}
            error={errors.email}
          ></Input>
          <Input
            type="password"
            label="Password"
            {...register("password", {
              required: true,
            })}
            s
            error={errors.password}
          ></Input>
          <Button type="submit" text="Login" />
          <div className={classes.register}>
            New user? &nbsp;
            <Link
              to={`/register?${returnUrl ? "?returnUrl=" + returnUrl : ""}`}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
