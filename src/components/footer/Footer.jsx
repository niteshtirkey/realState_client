import "./footer.css"

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="padings innerWidth flexCenter f-container">
        {/* left side  */}
        <div className="flexColStart f-left">
          {/* <img src="./logo2.png" width={120} alt="" /> */}
          <h2 style={{ color: "rgb(87 88 110)" }}>RealState</h2>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            120 Raipur Chhattishgarh
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer