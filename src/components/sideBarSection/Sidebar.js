import "./Sidebar.css";
import { Link } from "react-router-dom";
// NOTE IMported Images
import Logo from "../../assets/logo.png";

//NOTE Imported Icons
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={Logo} alt="logoName" />
        <h2>PlantT</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dash board</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Orders</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Centre</h3>
          <p>Having trouble in PlantT, please contact us for more question.</p>
          <button className="btn">Go to help centre</button>
        </div>
      </div>
    </div>
  );
};
