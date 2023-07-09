import "./Listing.css";
//NOTE Imported Images ===========>
import PotImage from "../../../assets/pot.png";
import Pot2 from "../../../assets/pot2.png";
import Pot3 from "../../../assets/pot3.png";
import Pot4 from "../../../assets/pot4.png";
import User2 from "../../../assets/user2.jpg";
import user from "../../../assets/user.jpg";
import user3 from "../../../assets/user3.jpg";
import user4 from "../../../assets/user4.jpg";
//NOTE Imported Icons ============>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

export const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={PotImage} alt="ImageName" />
          <h3>Coffee Plant</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Pot2} alt="ImageName" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Pot3} alt="ImageName" />
          <h3>Spider Plant</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Pot4} alt="ImageName" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={User2} alt="UserImage" />
              <img src={user3} alt="UserImage" />
              <img src={user} alt="UserImage" />
              <img src={user4} alt="UserImage" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="UserImage" />
              <img src={user} alt="UserImage" />
              <img src={User2} alt="UserImage" />
              <img src={user4} alt="UserImage" />
            </div>
            <div className="cardText">
              <span>
                22,556 Plant sold <br />
                <small>
                  19 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
