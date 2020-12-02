const BlueBtn = (props) => {
  return (
    <a
      className={`blue-button ${props.offsetL ? `ml-${props.offsetL}` : null}`}
      href={props.type === "link" ? props.link : `mailto:${props.email}`}
      target="_blank"
    >
      {props.title}
    </a>
  );
};

export default BlueBtn;
