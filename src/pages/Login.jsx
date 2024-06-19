import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../services/firebaServices";
import styles from "../styles/pages/login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const email = data["email"];
      const password = data["password"];

      const result = await signInWithEmailAndPassword(auth, email, password);

      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/");
      } else {
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.log("login fail");
    }
  }

  function handleHidePassword() {
    setPassword(!password);
  }

  return (
    <div className={styles.outer}>
      <p className={styles.para}>Login Here</p>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: "User name is required",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "Please enter a valid email",
            },
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <div className={styles.pass}>
          <input
            type={password ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <div className={styles.hideShow} onClick={handleHidePassword}>
            {/* <h5>{password ? "Hide" : "Show"}</h5> */}
            {password ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </div>
        </div>
        {errors.password && <p>{errors.password.message}</p>}

        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
