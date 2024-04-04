
import fourPoints from "../../../assets/4-points.png";
import file from "../../../assets/File.png";
import plus from "../../../assets/plus.png";
import "./postCreation.css";
const PostCreation = () => {
  return (
    <>
      <div className="creatPostMain">
        <div className="creatPosLeft"></div>
        <div className="creatPostRight">
          <div className="postRightTop">
            <h1>Create post</h1>
            <img src={fourPoints} alt={fourPoints} />
          </div>
          <form className="creatPostForm">
            <label>Tilttel</label>
            <input type="text" />
            <div className="postRightMiddel">
              <div className="postSelect">
                <label>Tags</label>
                <select name="type 1">
                  <option value="select genre">option 1</option>
                  <option value="option2">option 2</option>
                  <option value="option3">option 3</option>
                </select>
              </div>
            </div>
          </form>
          <div className="postLabelBtn">
            <button>Abstract</button>
            <button>Sci-fi</button>
            <button>Abstract</button>
            <button>
              <img src={plus} alt={plus} />
            </button>
          </div>
          <form className="postDescription">
            <h4>Description</h4>
            <textarea name="Description"></textarea>
          </form>
          <div className="postButtons">
            <button className="saveBTN">
              <img src={file} alt={file} />
              Save draft
            </button>
            <button className="postBTN">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCreation;
