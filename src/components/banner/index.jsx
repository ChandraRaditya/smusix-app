import banner from "../../assets/images/banner.svg";
import "./index.css";

function Banner() {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-box">
          <div className="banner-image">
            <img src={banner} alt="" />
          </div>
          <div className="banner-title">
            <p>LET’S SEARCH MUSIC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
