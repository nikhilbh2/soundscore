import React from "react";
import { useAuth0} from "@auth0/auth0-react";
import Profile from "./Profile";
import LogoutButton from "./Logout";
const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="header">
        {isAuthenticated && (
        <div className="profile-menu">
            <div className="profile-wrapper">
            <Profile />
            <div className="dropdown-content">
                <LogoutButton />
                {/* Add other options here */}
            </div>
            </div>
        </div>
        )}
    </header>
  );
};

export default Header;