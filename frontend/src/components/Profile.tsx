import React from "react";
import { useAuth0, User } from "@auth0/auth0-react"; // Import User type from auth0

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated || !user) { // Check if not authenticated or user is undefined
    return <div>Not authenticated</div>;
  }

  return (
    (
      <div className="profile-container" >
        <img src={user.picture} alt={user.name} className="profile-img" />
      </div>
    )
  );
};

export default Profile;