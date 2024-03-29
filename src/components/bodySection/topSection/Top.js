import "./Top.css";

//NOTE Imported Iconsv =========>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

//NOTE Imported Image ===========>
import User from "../../../assets/user.jpg";
import Video from "../../../assets/video.mp4";
import PotLamp from "../../../assets/potlamp.png";
export const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to PlantT.</h1>
          <p>Hello User, Welcome back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoMdNotifications className="icon" />
          <div className="adminImage">
            <img src={User} alt="AdminImage" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The World's fast Growing Industry today are of Organic Products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={Video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stats</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to My Orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={PotLamp} alt="ImageName" />
            </div>

            {/*  We will use it later... */}
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Centre</h3>
                <p>
                  Having trouble in PlantT, please contact us for more question.
                </p>
                <button className="btn">Go to help centre</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
