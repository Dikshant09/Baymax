import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config.js";
import { toast } from "react-toastify";

const OAuth = ({ text }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If, user doesn't exist : creating user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      toast.success(
        `Signed ${
          location.pathname === "/signup" ? "up " : "in "
        } Successfully!`
      );

      navigate("/predict");
    } catch (error) {
      toast.error(
        `Couldn't sign${location.pathname === "/signup" ? "up " : "in "}!`
      );
    }
  };

  return (
    <div onClick={onGoogleClick}>
      {`Sign ${text} via Google`}
    </div>
  );
};

export default OAuth;