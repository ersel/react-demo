import React from "react";
import star from "./star.svg";

// REACT COMPONENT leri
// HR ZAMAN OBJE parametre gabul ederler
// PROPS
// Properties provided to a React component = Props
// in JSX, similar to HTML attributes
// <img src="http://someimage.jpeg"

// CONDITIONAL RENDERING
// condition && <A />
// condition ? (A) : (B)

const Ogretmen = ({ ogretmeninIsmi, ogretmeninModulu, deneyim }) => {
  // Requirement 1
  // kriter: ogretmeninModulu
  // frontend - red
  // backend - yesil
  // core - sari
  let ogretmenRenk;
  if (ogretmeninModulu === "frontend") {
      ogretmenRenk = "red";
  } else if (ogretmeninModulu === "backend") {
      ogretmenRenk = "green";
  } else {
      // core...
      ogretmenRenk = "yellow";
  }

  return (
    <li>
      <span style={{ color: ogretmenRenk }}>
        {ogretmeninIsmi} - {ogretmeninModulu}{" "}
      </span>
      {deneyim > 5 ? (<img src={star} alt="star" />) : (<span>{deneyim} years of experience</span>)}
    </li>
  );
  // JSX fragment dondurur...
};

export default Ogretmen;
