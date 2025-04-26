import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
// LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 導入 useNavigate
import "../components/LoginPage.css"; // 導入 CSS 檔案
import { Link } from "react-router-dom"; // 導入 Link
// import RegisterPage from "RegisterPage";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const navigate = useNavigate(); // 取得 navigate 函數

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = async () => {
    // ⭐
    if (isLoginEnabled) {
      try {
        console.log("Logging in with:", { username, password, rememberMe });
        const userCredential = await signInWithEmailAndPassword(
          auth,
          username,
          password
        ); // ⭐記得 await
        console.log("登入成功", userCredential.user);
        navigate("/chatapp"); // ⭐成功才導頁
      } catch (error) {
        console.error("登入失敗", error.message);
        alert("登入失敗：" + error.message); // ⭐失敗顯示錯誤
      }
    }
  };

  useEffect(() => {
    setIsLoginEnabled(username.trim() !== "" && password.trim() !== "");
  }, [username, password]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Account:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="username" // 添加 autocomplete 屬性
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password" // 添加 autocomplete 屬性
        />
      </div>
      <div className="form-group remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div className="form-actions">
        <button onClick={handleLogin} disabled={!isLoginEnabled}>
          Login
        </button>
      </div>
      <div className="no-account">
        New? <Link to="/registerPage">Register here</Link>
      </div>
    </div>
  );
}

export default LoginPage;
