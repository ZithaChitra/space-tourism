import React, { Component } from "react";
import Image from "next/image";

import NavbarInPage from "../../components/NavbarInPage";
import styles from "../../styles/pages/Crew.module.css";

import data from "../../data.json";

interface CrewMember {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface Props {
  crew: CrewMember[];
}

const crew = data.crew;

const index: React.FC = () => {
  const clickHandler = (
    event: React.MouseEvent<HTMLAnchorElement>,
    value: number | string
  ) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.crew}`}>
      <h5>
        <span> 01</span> Destinations Page
      </h5>

      <div className="flex flex-jc-c">
        <div className={`${styles.crew__image}`}>
          <Image src={crew[0].images.png} layout='fill'/>
        </div>
      </div>

      <div className={`${styles.crew__details}`}>
        <div className={`${styles["crew__details-navinpage"]}`}>
          <NavbarInPage clickHandler={clickHandler} discs={crew.length} />
        </div>

        <h4>{crew[0].role}</h4>
        <h3>{crew[0].name}</h3>
        <p>{crew[0].bio}</p>
      </div>
    </div>
  );
};

export default index;
