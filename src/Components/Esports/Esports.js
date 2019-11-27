import React from "react";
import { Link } from "react-router-dom";
import MockData from "../../MockData/MockData";

function Esports() {
  return (
    <div>
      <ul>
        <div className="box">
          {MockData.EsportMock.map(item => (
            <div className="content" key={item.id}>
              <Link to={`/Esports/${item.id}`}>
                <img src={item.img} className="stylesimg" alt="#"></img>
              </Link>
              <br />
              <p>{item.title}</p>
              <br />
              <li >
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
