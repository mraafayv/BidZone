import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import styles from "../login/Login.module.css";
import {
  auth,
  createUserWithEmailAndPassword,
  dbRef,
  setDoc,
} from "../../firebase/config";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Seller");

  const { signup, error, isPending } = useSignup();
  const data = {
    name: "Ottawa",
    country: "Canada",
  };
  const handleSignup = (e) => {
    e.preventDefault();

    signup(
      email,
      password,
      username,
      userType,
      setUsername,
      setEmail,
      setPassword,
      setUserType
    );

    // const addDoc =  await setDoc(dbRef, { name:"asada" });
    // console.log(addDoc)
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.box}>
        <div className={styles.form}>
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <div className={styles.inputbox}>
              <span>Your Role</span>
              <select
                name="usertype"
                value={userType}
                required
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="Seller">I am Seller</option>
                <option value="Bidder">I am Bidder</option>
              </select>
            </div>
            <div className={styles.inputbox}>
              <span>Username</span>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
              />
            </div>
            <div className={styles.inputbox}>
              <span>Email</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </div>
            <div className={styles.inputbox}>
              <span>Password</span>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              />
            </div>
            <p className={styles.detail}>
              Already have an account?
              <Link to="/login">
                <span className={styles.link}>login</span>
              </Link>
            </p>

            {!isPending && <button>Sign Up</button>}
            {isPending && <button>loading......</button>}
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
