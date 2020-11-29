import Logo from "../assets/img/logo.png";
const HeadLogo = () => {
  return (
    <div className="header-logo container">
      <div className="logo ">
        <img src={Logo} alt={"Logo"} />
      </div>
    </div>
  );
};

export default HeadLogo;
