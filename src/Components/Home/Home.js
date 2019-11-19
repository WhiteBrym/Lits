import React from "react";
import HomeContent from "./HomeContent";
import DataBase from "../../MockData/MockData";
function Home() {
  return (
    <div>
      <h1 className="titleHome">My first blog</h1>
      <ul>
        <div className="homeWrap">
          {DataBase.HomeMock.map(item => (
            <div className="example">
              <li key={item.id}>
                <HomeContent
                  oneSlide={item.img}
                  twoSlide={item.imgTwo}
                  threeSlide={item.imgThree}
                />
              </li>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Home;
