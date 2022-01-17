import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Ogretmen from "./Ogretmen";

// FIRST REACT COMPONENT
// a react component is a JavaScript function which RETURNS some snippet of HTML...

// Component Name: App

// JSX
// a special data type for React projects...
// a combination of HTML + JavaScript
// ( ) -- usually wrapped in BRACKETS

// PROPS
// STATE

// COMPONENTLERI RENDERLER
// sayfanin DOMuna yazar HTML ciktisini...
// NE ZAMAN STATE VEYA PROPS degisirsa, React DOMu (gerekli kisimlarini) tekrardan RENDERLER...

const App = () => {
  // toggle ornegi
  // ac / kapa tarzi
  // gece modu
  const [nightMode, setNightMode] = useState(false); // state field...
  const [yeniOgretmenIsmi, setYeniOgretmenIsmi] = useState(""); // state field...

  const [teachers, setTeachers] = useState([
    "Ersel", "Kemal", "Ahmet", "Cansev"
  ]);

  const toggleDarkMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className="App">
      <header className={nightMode ? "App-header-gece-modu" : "App-header"}>
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={toggleDarkMode} // EVENT HANDLER FUNCTION
          // KULLANICI ETKILESIMINI DINLEYEN, VE ONA GORE ISLEMLER YAPAN FONKSIYON...
          // kullanici tikladi, klavyede bir tusa basdi, vs...
        >
          {nightMode ? "isiklari ac" : "isiklari kapa"}
        </button>
        <ul>
          {teachers.map((ogretmen, ogretmenIndex) => {
            return (
              <li>{ogretmen}<button onClick={() => {
                console.log(ogretmenIndex, 'bu indexdeki ogretmeni arrayden sil')
                // TODO: delete ogretmen at Index position from teachers array
              }}>REMOVE TEACHER</button></li>
            );
          })}
        </ul>
        OGRETMEN EKLE: <br />
        Ogretmen ismi:{" "}
        <input
          value={yeniOgretmenIsmi}
          onChange={(event) => { 
            setYeniOgretmenIsmi(event.target.value) 
          }}
        />
        <button onClick={() => {
          console.log(yeniOgretmenIsmi, "BU OGRETMENI EKLE LISTEYE...");
          const newListOfTeachers = [...teachers, yeniOgretmenIsmi];
          setTeachers(newListOfTeachers);
        }}>EKLE</button>
        <button onClick={() => {
          const listOfTeachersAfterDeletion = teachers.slice(0, -1);
          setTeachers(listOfTeachersAfterDeletion);
        }}>SON OGRETMENI SIL</button>
      </header>
    </div>
  );
};

export default App;
