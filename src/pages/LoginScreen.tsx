import React from "react";
import styles from "./LoginScreen.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Save user info in cookie (expires in 7 days)
      document.cookie = `chiryo_user=${encodeURIComponent(
        JSON.stringify({ name: user.displayName, email: user.email })
      )}; path=/; max-age=${60 * 60 * 24 * 7}`;
      navigate("/home");
    } catch (error) {
      alert("Google login failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <span className={styles.logoText}>
          <span className={styles.logoAccent}>C</span>hiryo
        </span>
      </div>
      <div className={styles.illustrationWrapper}>
        <DotLottieReact
          src="https://lottie.host/bb3c4973-a22c-4519-9248-da875de0c46e/Brkf3NprAM.lottie"
          loop
          autoplay
          style={{ width: "90%", margin: "0 auto", display: "block" }}
        />
      </div>
      <div className={styles.bottomSheet}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            Note, Organize, Sync.<br />
            Upgrade For <span className={styles.highlight}>Seamless Productivity!</span>
          </h2>
          <p className={styles.subtitle}>
            Take notes, organize tasks, and sync seamlessly.<br />
            Upgrade now for a smarter workflow!
          </p>
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.googleBtn} onClick={handleGoogleLogin}>
            <FcGoogle className={styles.googleIcon} />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;