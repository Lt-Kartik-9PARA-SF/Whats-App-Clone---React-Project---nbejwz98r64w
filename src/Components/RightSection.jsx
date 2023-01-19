import { useState, useContext, useEffect } from "react";
import data from "./data";
import Default from "./Default";

import LeftSection from "./LeftSection";

function RightSection({ setAppData }) {


    const [rightSectionData, setRightSectionData] = useState([]);
    const [input1, setInput1] = useState('');
    let id = rightSectionData.id;

    let handleInput = () => {


        setAppData(...data, data[id].msg2.push(input1));
        console.log(rightSectionData);

        localStorage.setItem('userData', JSON.stringify(data));

        setInput1('');


    }

    return (
        <>
            <LeftSection setRightSectionData={setRightSectionData} />

            <div className='right-section' >
                <div className='right-topBar'>
                    <img src={rightSectionData.length !== 0 ? "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png" : ""} />
                    <h3>{rightSectionData.name}</h3>

                </div>

                <div className='right-chats-section'>

                    {
                        rightSectionData.length !== 0 ? rightSectionData.msg.map((ele, idx) => <div key={idx} className="left"><p>{ele}</p></div>) : <div className="welcome"> </div>
                    }
                    {
                        (rightSectionData.length !== 0 && rightSectionData.msg2.length !== 0) ? rightSectionData.msg2.map((ele, idx) => <div key={idx} className="right"><p >{ele}</p></div>) : ""
                    }
                </div>

                <>
                    {
                        rightSectionData.length !== 0 ?
                            <div className="input-container">

                                <div className='input'>
                                    <>
                                        <section><i className="fas fa-smile fa-lg" title="Emoji"></i></section>
                                        <section><i className="fas fa-paperclip fa-lg" title="Attachments"></i></section>
                                    </>

                                    <input type={"text"} value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Enter Message"></input>
                                    <section><button className="send-btn" onClick={handleInput} title={'Click to send'}><i className="far fa-paper-plane fa-2x"></i></button></section>
                                </div>
                                
                            </div> : ""
                    }
                </>


            </div>
        </>
    )
}

export default RightSection