import "./Body.css";
import { Top } from "./topSection/Top";
import { Listing } from "./listingSection/Listing";
import { Activity } from "./activitySection/Activity";

export const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};
