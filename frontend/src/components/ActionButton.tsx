import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ActionButtonProps {
  route: string;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ route, label }) => {
  const navigator = useNavigate();

  const handleClick = () => {
    navigator(route); // Redirect to the specified route
  };

  return (
    <button className='button secondary-button' onClick={handleClick}>
      {label}
    </button>
  );
};

export default ActionButton;