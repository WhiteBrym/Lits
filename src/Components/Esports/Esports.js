import React from "react";
import { Link } from "react-router-dom";
import DataBase from "../../MockData/MockData";

function Esports() {
  return (
    <div>
      <ul>
        <div className="box">
          {DataBase.EsportMock.map(item => (
            <div className="content">
              <Link to={`/Esports/${item.id}`}>
                <img src={item.img} className="stylesimg" alt="#"></img>
              </Link>
              <br />
              <p>{item.title}</p>
              <br />
              <li>
                <Link to={`/Esports/${item.id}`}>
                  <button className="btn">Gou</button>
                </Link>
              </li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Esports;
