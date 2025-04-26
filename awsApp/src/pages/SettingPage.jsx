import React, { useState } from "react";
import "../components/SettingPage.css";
import { useNavigate, Link } from "react-router-dom";

function SettingsPage() {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [musicVolume, setMusicVolume] = useState(0.5);
  const [language, setLanguage] = useState("en");
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const handleMusicToggle = () => {
    setMusicEnabled(!musicEnabled);
    console.log("Music enabled:", !musicEnabled);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setMusicVolume(newVolume);
    console.log("Music volume:", newVolume);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("Language selected:", event.target.value);
  };

  const handleNotificationToggle = () => {
    setNotificationEnabled(!notificationEnabled);
    console.log("Notifications enabled:", !notificationEnabled);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    console.log("Theme selected:", event.target.value);
    document.body.className = event.target.value;
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("authToken");
      navigate("/login");
    }
  };

  const handleSaveSetting = () => {
    // Handle logic to save settings here
    console.log("Saving settings:", {
      musicEnabled,
      musicVolume,
      language,
      notificationEnabled,
      theme,
    });
    // In a real application, you would send this data to a backend API
    navigate("/chatapp");
  };

  return (
    <div className="settings-page-container">
      <h2>Settings</h2>

      <div className="setting-item">
        <label htmlFor="musicToggle">Background Music:</label>
        <label className="switch">
          <input
            type="checkbox"
            id="musicToggle"
            checked={musicEnabled}
            onChange={handleMusicToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {musicEnabled && (
        <div className="setting-item">
          <label htmlFor="musicVolume">Music Volume:</label>
          <input
            type="range"
            id="musicVolume"
            min="0"
            max="1"
            step="0.01"
            value={musicVolume}
            onChange={handleVolumeChange}
          />
          <span className="volume-value">
            {(musicVolume * 100).toFixed(0)}%
          </span>
        </div>
      )}

      <div className="setting-item">
        <label htmlFor="languageSelect">Language:</label>
        <select
          id="languageSelect"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="zh-TW">中文 (繁體)</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        </select>
      </div>

      <div className="setting-item">
        <label htmlFor="notificationToggle">Notifications:</label>
        <label className="switch">
          <input
            type="checkbox"
            id="notificationToggle"
            checked={notificationEnabled}
            onChange={handleNotificationToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-item">
        <label htmlFor="themeSelect">Theme:</label>
        <select id="themeSelect" value={theme} onChange={handleThemeChange}>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
      </div>

      <div className="settings-actions">
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>

        <button
          onClick={() => {
            handleSaveSetting();
            alert("Settings saved!");
          }}
        >
          Save Settings
        </button>
      </div>
      {/* <div className="form-actions">
        <Link to="/chatapp">Back to Chat</Link>
      </div> */}

      {/* You can add more setting options as needed */}
    </div>
  );
}

export default SettingsPage;
