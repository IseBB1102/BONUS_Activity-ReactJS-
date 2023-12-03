import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

const StudentCard = (props) => {
  const [cardColor, setCardColor] = useState("antiquewhite");

  const changeColor = () => {
    const newColor = cardColor === "antiquewhite" ? "aquamarine" : "antiquewhite";
    setCardColor(newColor);
  };

  return (
    <div className="card" style={{ backgroundColor: cardColor }} onClick={changeColor}>
      <img className="card-image" src={props.image} alt={props.name} />
      <h1 className="card-title">{props.name}</h1>
      <p className="card-text">Student ID: {props.id}</p>
      <p className="card-text">Birthdate: {props.bday}</p>
      <p className="card-text">Quote: {props.quote}</p>
    </div>
  );
};

StudentCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  bday: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

StudentCard.defaultProps = {
  image:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  name: "N/A",
  id: 0,
  bday: "Jan 1, 2000",
  quote: "This should be a quote...",
};

export default StudentCard;


