import"./chat.css"

const Chat =()=>{
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Piyush Yadav</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" style={{width: "20px",height:"20px"}} alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./info.png" alt=""/>


                </div>
            </div>
            <div className="ceter"></div>
            <div className="bottom">
                <div className="icons">
                <img src="./img.png" alt=""/>
                <img src="./camera.png" alt=""/>
                <img src="./mic.png" alt=""/>
                </div>
                <input type="text" placeholder="Type a message.."/>
                <div className="emoji">
                    <img src="./emoji.png" alt=""/>

                </div>
                <button className="SendButton">send</button>
            </div>
        </div>
    )
}

export default Chat