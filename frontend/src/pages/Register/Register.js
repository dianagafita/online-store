import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import classes from "./Register.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");
  const auth = useAuth();
  const { user } = auth;
  const navigate = useNavigate();

  const submit = async (data) => {
    await auth.register(data);
    navigate("/login");
  };

  useEffect(() => {
    if (user) returnUrl ? navigate(returnUrl) : navigate("/login");
  }, [user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Register" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            label="Name"
            {...register("name", { required: true, minLength: 5 })}
            error={errors.name}
          />
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
          />
          <Input
            type="password"
            label="Password"
            {...register("password", { required: true, minLength: 5 })}
            error={errors.password}
          />
          <Input
            type="password"
            label="Confirm password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value !== getValues("password")
                  ? "Passwords Do Not Match"
                  : true,
            })}
            error={errors.confirmPassword}
          />
          <Input
            type="address"
            label="Address"
            {...register("address", { required: true, minLength: 10 })}
            error={errors.address}
          />
          <Button type="submit" text="Register" />

          <div className={classes.login}>
            Already a user? &nbsp;
            <Link to={`/login?${returnUrl ? "?returnUrl=" + returnUrl : ""}`}>
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
