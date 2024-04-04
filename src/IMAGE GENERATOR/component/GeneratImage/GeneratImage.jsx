import { NavLink } from "react-router-dom";
import canvas from "../../../assets/canvas.png";
import properties from "../../../assets/properties.png";
import fourPoints from "../../../assets/4-points.png";
import colors from "../../../assets/colors.png";
import plus from "../../../assets/plus.png";
import file from "../../../assets/File.png";
import "./generatImage.css";

const GeneratImage = () => {
  return (
    <>
      <div className="imgGeneratMain">
        <div className="imgGeneratLeft">
          <img src={canvas} alt={canvas} />
        </div>
        <div className="imgGeneratRight">
          <div className="rightTop">
          <NavLink to="/imgResult"><img src={properties} alt={properties} /></NavLink>
            <img src={fourPoints} alt={fourPoints} />
          </div>
          <form className="generatForm">
            <label>Keyword</label>
            <input type="text" />
            <div className="rightMiddel">
              <div className="select-1">
                <label>Genres</label>
                <select name="type 1">
                  <option value="option1">option 1</option>
                  <option value="option2">option 2</option>
                  <option value="option3">option 3</option>
                </select>
              </div>
              <div className="select-2">
                <label>Size</label>
                <select name="type 2">
                  <option value="size1">size 1</option>
                  <option value="size2">size 2</option>
                  <option value="size3">size 3</option>
                </select>
              </div>
            </div>
          </form>
          <div className="labelBtn">
            <button>Abstract</button>
            <button>Sci-fi</button>
            <button>Abstract</button>
            <button>
              <img src={plus} alt={plus} />
            </button>
          </div>
          <h4>Colors</h4>
          <div className="colors">
            <img src={colors} alt={colors} className="chooseColor" />
            <button>
              <img src={plus} alt={plus} />
            </button>
          </div>

          <h4>Sample</h4>
          <div className="dragNdrop">
            <img src={file} alt={file} />
            <h4>
              Drag and drop or 
              <span style={{ color: "#3B82F6" }}> browser</span>
            </h4>

            <p>Support all images format</p>
          </div>

          <NavLink to="/imgResult">
            <button className="creatImgBTN">create</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default GeneratImage;
