import React from 'react';
import ModalCss from './modal.module.css'
const UserNotExistModal = ({ closeModal, handleCreateAccount }) => {
  return (
    <div className={ ModalCss.modal}>
      <div className={ ModalCss.modalContent }>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>User does not exist. Please create an account.</p>
        <button className={ ModalCss.LoginButton } onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
};

export default UserNotExistModal;
