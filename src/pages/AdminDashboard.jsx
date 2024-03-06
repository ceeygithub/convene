import React from 'react'
import { useAuth } from './path-to-auth-context';

const AdminDashboard = () => {
  const { user } = useAuth();

  // Check if the user is an admin
  if (user && user.role === 'Admin') {
    return (
      <div>
        <h1>Welcome, Admin!</h1>
        {/* Admin dashboard content */}
      </div>
    );
  } else {
    return <div>Access Denied</div>;

}
}

export default AdminDashboard


