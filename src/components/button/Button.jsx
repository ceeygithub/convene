import { Link } from 'react-router-dom';
import styles from "./button.module.css";

const Button = ({ variant = "primary", size = "medium", fullWidth = true, children, type,to, style, onClick,isButtonDisabled, ...props }) => {
    const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
 
 
     <Link to={to} 
>
       <button
      data-fullwidth={fullWidth}
      data-size={size}
      data-variant={variant}
            className={`${styles.btn} ${style}`}
onClick={handleClick}
disabled={isButtonDisabled}
      type={type}
    >
      {children}
    </button>
    </Link>
 
  );
};

export default Button;