const Button = ({ name, className }) => {
  return (
    <button
    //   onClick={onClick}
      className={`${className}`}
    >
      {name}
    </button>
  );
};

export default Button;