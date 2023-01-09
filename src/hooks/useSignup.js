import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  dbRef,
  setDoc,
} from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const signup = async (
    email,
    password,
    displayName,
    userType,
    setUsername,
    setEmail,
    setPassword,
    setUserType
  ) => {
    setError(null);
    setIsPending(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response);
      if (!response) {
        throw new Error("could not complete signup");
      }
      // await response.user.updateProfile({  userType:userType });
      const addDoc = await setDoc(dbRef, {
        email,
        password,
        displayName,
        userType,
      });

      setIsPending(false);
      setError(null);
      setUsername("");
      setEmail("");
      setPassword("");
      setUserType("");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
