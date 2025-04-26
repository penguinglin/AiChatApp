// LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 導入 useNavigate
import "../components/LoginPage.css"; // 導入 CSS 檔案
import { Link } from "react-router-dom"; // 導入 Link
// import RegisterPage from "./pages/RegisterPage";

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

  const handleLogin = () => {
    if (isLoginEnabled) {
      // 在這裡進行你的登入驗證邏輯
      console.log("Logging in with:", { username, password, rememberMe });

      // 假設登入成功
      // 在實際應用中，你可能需要根據 API 響應來判斷登入是否成功
      navigate("/chatapp"); // 登入成功後導航到 /chat
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
        New? <Link to="/registerpage">Register here</Link>
      </div>
    </div>
  );
}

export default LoginPage;
