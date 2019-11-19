import React from "react";
import { useParams } from "react-router-dom";
import DataBase from "../../MockData/MockData";
import Carousel from "./Carousel";

export default function EsportsContent(props) {
  let { esport } = useParams();
  return (
    <div className="sliderWrap">
      <h3>{DataBase.EsportMock[esport - 1].title}</h3>
      <div className="slider">
        <Carousel
          oneSlide={DataBase.EsportMock[esport - 1].img1}
          twoSlide={DataBase.EsportMock[esport - 1].img2}
          threeSlide={DataBase.EsportMock[esport - 1].img3}
        />
      </div>

      <p>{DataBase.EsportMock[esport - 1].text}</p>
    </div>
  );
}
