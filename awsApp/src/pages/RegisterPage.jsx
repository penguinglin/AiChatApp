import { auth } from "../firebase.js"; // ⭐ 引入firebase連線
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // ⭐ 引入註冊跟更新Profile的功能

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/RegisterPage.css"; // 導入 CSS 檔案

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [language, setLanguage] = useState("en"); // 預設語言為英文
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isRegisterEnabled, setIsRegisterEnabled] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleAgreeTermsChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  const handleRegister = async () => {
    //⭐加 async
    if (isRegisterEnabled) {
      try {
        console.log("Registering with:", {
          username,
          password,
          displayName,
          birthDate,
          language,
          agreeTerms,
        });

        //⭐ 第一步：用帳號密碼在Firebase註冊
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          username,
          password
        );
        const user = userCredential.user;

        //⭐ 第二步：更新使用者顯示名稱（可選）
        await updateProfile(user, {
          displayName: displayName,
        });

        console.log("註冊成功", user);

        //⭐ 第三步：跳轉到登入頁
        // navigate("/login");
        navigate("/chatapp"); //⭐成功才導頁
      } catch (error) {
        console.error("註冊失敗", error.message);
        alert("註冊失敗：" + error.message); //⭐也可以做成紅字顯示
      }
    }
  };

  useEffect(() => {
    const isUsernameValid = username.trim() !== "";
    const isPasswordValid =
      password.trim() !== "" && password === confirmPassword;
    const isDisplayNameValid = displayName.trim() !== "";
    const isBirthDateValid = birthDate !== ""; // 這裡可以添加更嚴格的日期格式驗證
    const isTermsAgreed = agreeTerms;

    setIsRegisterEnabled(
      isUsernameValid &&
        isPasswordValid &&
        isDisplayNameValid &&
        isBirthDateValid &&
        isTermsAgreed
    );
  }, [username, password, confirmPassword, displayName, birthDate, agreeTerms]);

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Account:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="new-password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          autoComplete="new-password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={handleBirthDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="zh-TW">Chinese</option>
          <option value="zh-CN">Korean</option>
          <option value="ja">Japanese</option>
          {/* 你可以根據需求添加更多語言選項 */}
        </select>
      </div>
      <div className="form-group terms">
        <input
          type="checkbox"
          id="agreeTerms"
          checked={agreeTerms}
          onChange={handleAgreeTermsChange}
        />
        <label htmlFor="agreeTerms">
          I agree to the <Link to="/terms">terms and conditions</Link>
        </label>
      </div>
      <div className="form-actions">
        <button
          onClick={() => {
            handleRegister(); // ⭐呼叫註冊，不是handleSaveProfile
            alert("Settings saved!");
          }}
        >
          Save
        </button>
      </div>
      <div className="has-account">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
