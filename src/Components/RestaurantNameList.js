import React from "react";
import "./nameListStyle.css";
import errorImage from "../image/ab2.png";
import mapImage from "../image/map.png";
import starImage from "../image/star1.png";


const text = {
  fontFamily: "sans-serif",
  fontsize: "15px",
  textalign: "left",
  width: "100px",
  height: "120px"
};

const NameList = props => {
  return (
    <div >
      <div className="nameList">
      <text-corner> {props.readyInMinutes}mint</text-corner>

          <img
            className="restaurant-image"
            src={props.icon ? props.icon : errorImage}
            alt="icon"
          />{" "}
          <text > {props.name} </text>{" "}

       
        </div>
        <div className="inlineStyle">
{/* <text > rating </text> */}

<img src = {starImage} alt="star" style={{width:"15px", height:"15px"}} />
<text>{props.rating}/5({props.user_ratings_total})</text>
</div>
           <div className="inlneStyle">
        <text > {props.formatted_address} </text>{" "} 
        <a href={props.photos[0].html_attributions[0]} rel="noopener noreferrer"
            target="_blank" >
            <img src={mapImage} alt="map" style={{width:"20px" ,height:"20px"}} />
            </a> 
   
           
       </div>
       

    </div>
  );
};

export default NameList;
