// src/components/Button.jsx

export const Button = ({ 
    children, 
    onClick, 
    className = '', 
    id = '', 
    style = {} 
  }) => {
    return (
      <button
        id={id}
        onClick={onClick}
        className={`px-8 py-4 rounded-lg text-xl transition-colors ${className}`}
        style={style}
      >
        {children}
      </button>
    );
  };