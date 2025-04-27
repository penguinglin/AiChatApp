import React, { useState } from "react";
import "../components/ProfilePage.css"; // Import CSS file
import DefaultAvatar from "../assets/react.svg"; // Assuming you have a default avatar
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase"; // 引入你設定好的firebase檔
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";



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

  const handleSaveProfile = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.log("No user logged in");
      return;
    }
  
    try {
      // 更新displayName跟photoURL
      await updateProfile(currentUser, {
        displayName: displayName,
        photoURL: selectedAvatar || DefaultAvatar,
      });
  
      // 更新bio到firestore
      await setDoc(doc(db, "users", currentUser.uid), {
        bio: bio,
      }, { merge: true });
  
      alert("Profile updated successfully!");
      navigate("/chatapp");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
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
