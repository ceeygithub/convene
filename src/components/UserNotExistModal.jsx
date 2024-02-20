import React from 'react';

const UserNotExistModal = ({ closeModal, handleCreateAccount }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>User does not exist. Please create an account.</p>
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
};

export default UserNotExistModal;
