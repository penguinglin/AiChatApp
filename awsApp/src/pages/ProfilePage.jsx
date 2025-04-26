import React, { useState } from "react";
import "../components/ProfilePage.css"; // Import CSS file
import DefaultAvatar from "../assets/react.svg"; // Assuming you have a default avatar
import { useNavigate, Link } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("Username"); // Default display name
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [bio, setBio] = useState(""); // Personal bio
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleEditAvatarClick = () => {
    setIsEditingAvatar(true);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedAvatar(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = () => {
    // Handle logic to save profile data here
    console.log("Saving profile:", {
      displayName,
      newPassword,
      bio,
      selectedAvatar,
    });
    // In a real application, you would send this data to a backend API
    if (newPassword && newPassword === confirmNewPassword) {
      console.log("Password updated successfully (mock)");
      setNewPassword("");
      setConfirmNewPassword("");
    } else if (newPassword) {
      console.log("Password confirmation does not match");
    }
    setIsEditingAvatar(false); // Stop editing avatar after saving
    navigate("/chatapp");
  };

  return (
    <div className="profile-page-container">
      <h2>Profile</h2>

      <div className="avatar-section">
        <div className="avatar-preview">
          <img
            src={selectedAvatar || DefaultAvatar}
            alt="Avatar"
            className="avatar"
          />
        </div>
        <button onClick={handleEditAvatarClick}>Edit Avatar</button>
        {isEditingAvatar && (
          <div className="avatar-edit-modal">
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
          </div>
        )}
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
        <label htmlFor="newPassword">Change Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
          placeholder="Enter new password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={handleConfirmNewPasswordChange}
          placeholder="Confirm new password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">Bio (Optional):</label>
        <textarea
          id="bio"
          value={bio}
          onChange={handleBioChange}
          placeholder="Share some info about yourself..."
        />
      </div>

      <div className="form-actions">
        <button
          onClick={() => {
            handleSaveProfile();
            alert("Settings saved!");
          }}
        >
          Save
        </button>
      </div>

      {/* <div className="form-actions">
        <Link to="/chatapp">Back to Chat</Link>
      </div> */}
    </div>
  );
}

export default ProfilePage;
