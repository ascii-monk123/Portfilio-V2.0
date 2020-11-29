const BlueBtn = (props) => {
  return (
    <button
      className={`blue-button ${props.offsetL ? `ml-${props.offsetL}` : null}`}
    >
      {props.title}
    </button>
  );
};

export default BlueBtn;
