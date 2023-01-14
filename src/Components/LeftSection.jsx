import React, { useContext, useState } from 'react'
import data from './data';
import { UserContext } from '../App';


function LeftSection({ setRightSectionData }) {
 // const data = useContext(UserContext);
let [search,setSearch]  = useState("");
  let set = (id) => {
    setRightSectionData(data[id]);
  }
let handleSearch = (e) =>{
  setSearch(e.target.value);
}
  let time = () => {
    let dt = new Date();
    let HH = dt.getHours();
    let MM = dt.getMinutes();
    let hh = "";
    if (HH > 12) {
      hh = HH - 12;
    }
    else {
      hh = HH;
    }

    if (MM < 10) {
      MM = "0" + MM
    }
    let time = "";
    if (HH >= 12) {
      time = hh + ":" + MM + " PM"
    }
    else {
      time = hh + ":" + MM + " AM"
    }
    return time;
  }

  return (
    <div className='left-section'>
      <div className='left-topBar'>
        <img src={"https://www.citypng.com/public/uploads/preview/-41601037019krrfx1kucd.png"} />

        <div className='left-top-icons'><i className="fa-regular fa-user fa-lg" title='Contacts'></i>
          <i className="fa-solid fa-message" title='Messages'></i>
          <i className="fa-solid fa-list" title='Settings'></i></div>

      </div>
      <div className='search'>
      <input type={"text"} value={search} onChange={handleSearch} placeholder="Search..." title='Enter a Name to Search'/>
      </div>
      {
        search == "" ?
        data.map((ele, idx) => <div className='chats' key={idx} id={idx} onClick={(e) => set(e.target.id)} title={`Click to Chat with ${ele.name}`} >
          <img src={"https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"} id={idx} />
          {ele.name}
          <section className='time' id={idx}>{time()}</section></div>)
          : data.filter((ele)=>ele.name.toLowerCase().includes(search.toLowerCase())).map((ele, idx) => <div className='chats' key={idx} id={idx} onClick={(e) => set(e.target.id)} title={`Click to Chat with ${ele.name}`} >
          <img src={"https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"} id={idx} />
          {ele.name}
          <section className='time' id={idx}>{time()}</section></div>)
      }

    </div>
  )

}

export default LeftSection;