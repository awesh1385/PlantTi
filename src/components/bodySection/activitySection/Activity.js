import "./Activity.css";

import {BsArrowRightShort} from "react-icons/bs";
import user2 from '../../../assets/user2.jpg';
import user from '../../../assets/user.jpg';
import user3 from '../../../assets/user3.jpg';
import user4 from '../../../assets/user4.jpg';
import user5 from '../../../assets/user5.jpg';
export const Activity = () => {
  return (
    <div className='activitySection'>
    <div className="heading flex">
      <h1>Resent Activity</h1>
      <button className="btn flex">
        See All
        <BsArrowRightShort className="icon"/>
      </button>
    </div>

    <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={user2} alt="CustomerImage" />
        <div className="customerDetails">
          <span className="name">Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min ago 
        </div>
      </div>
    </div>

    <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={user} alt="CustomerImage" />
        <div className="customerDetails">
          <span className="name">Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min ago 
        </div>
      </div>
    </div>

    <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={user3} alt="CustomerImage" />
        <div className="customerDetails">
          <span className="name">Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min ago 
        </div>
      </div>
    </div>

    <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={user4} alt="CustomerImage" />
        <div className="customerDetails">
          <span className="name">Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min ago 
        </div>
      </div>
    </div>

    <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={user5} alt="CustomerImage" />
        <div className="customerDetails">
          <span className="name">Ola Martha</span>
          <small>Ordered a new plant</small>
        </div>
        <div className="duration">
          2 min ago 
        </div>
      </div>
    </div>
  </div>
)
  
}
