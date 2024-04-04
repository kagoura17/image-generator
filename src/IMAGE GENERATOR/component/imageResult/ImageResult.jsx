import { NavLink } from "react-router-dom";
import fourPoints from "../../../assets/4-points.png";
import info from "../../../assets/info.png";
import success from "../../../assets/success.png";
import download from "../../../assets/Downl.png";
import plusBlack from "../../../assets/plusBlack.png";
import instagram from "../../../assets/Instagram.png";
import tweeter from "../../../assets/tweeter.png";
import discord from "../../../assets/Discord.png";
import dribbble from "../../../assets/Dribbble.png";
import linkedIn from "../../../assets/LinkedIn.png";
import "./imageResult.css";

const ImageResult = () => {
  return (
    <>
      <div className="imgResultMain">
        <div className="imgResultLeft">
          <h1>The image will be generated here</h1>
        </div>
        <div className="imgResultRight">
          <div className="resultrightTop">
            <NavLink to="/create">
              {" "}
              <img src={info} alt={info} />
            </NavLink>
            <img src={fourPoints} alt={fourPoints} />
          </div>
          <div className="resultRightContainer">
            <div className="resultMiddle">
              <img src={success} alt={success} />
              <h2>This is a success callout!</h2>
              <p>Congrats! You have buid the most amazing art in the world! </p>
              <div className="btns">
                <button className="downloadBTN">
                  <img src={download} alt={download} /> Downoad
                </button>
                <NavLink to="/post">
                  <button className="postResultBTN">
                    <img src={plusBlack} alt={plusBlack} /> create post
                  </button>
                </NavLink>{" "}
              </div>
              <div className="socials">
                <img src={instagram} alt={instagram} />
                <img src={tweeter} alt={tweeter} />
                <img src={discord} alt={discord} />
                <img src={dribbble} alt={dribbble} />
                <img src={linkedIn} alt={linkedIn} />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageResult;
