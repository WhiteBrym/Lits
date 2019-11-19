import React from "react";
import { useParams } from "react-router-dom";
import DataBase from "../../MockData/MockData";

export default function NorwayCountry(props) {
  let { technology } = useParams();
  return (
    <div className="technologyWrap">
      <h3>{DataBase.TechnologyMock[technology - 1].title}</h3>
      <div>
        <div className="image">
          <img src={DataBase.TechnologyMock[technology - 1].img} alt="#"></img>
        </div>

        <div>
          <p className="technologyText">
            {DataBase.TechnologyMock[technology - 1].text}
          </p>
        </div>

        <div className="image">
          <img src={DataBase.TechnologyMock[technology - 1].img2} alt="#"></img>
        </div>

        <div>
          <p className="technologyText">
            {DataBase.TechnologyMock[technology - 1].text2}
          </p>
        </div>

        <div className="image">
          <img src={DataBase.TechnologyMock[technology - 1].img3} alt="#"></img>
        </div>

        <div>
          <p className="technologyText">
            {DataBase.TechnologyMock[technology - 1].text3}
          </p>
        </div>
      </div>
    </div>
  );
}
