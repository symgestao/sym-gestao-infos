import "./footerHome.css";

const oi = require("../../assets/oi.png") as string;
const fanvil = require("../../assets/fanvil.png") as string;
const symSgc = require("../../assets/SymSGC.png") as string;

export function FooterHome() {
  return (
    <div className="footerHomeMainContainer">
      <div className="footerHomeContainer">
        {/* <img className="img4" src={oi} alt="" /> */}
        <img className="img3" src={fanvil} alt="" />
        <img className="img3" src={symSgc} alt="" />
      </div>
    </div>
  );
}
