import"./details.css"
const Details =()=>{
    return (
        <div className="details">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Piyush Yadav</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                    <span>Chat setting</span>
                    <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                    <span>Privacy & help</span>
                    <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                    <span>Shared Photos</span>
                    <img src="./arrowDown.png" alt="" />
                    </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./public/pexels-aibek-skakov-418917601-29902918.jpg" alt="" />
                            <span>
                                photos_2024.png
                            </span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    
                    
                                        <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./public/pexels-aibek-skakov-418917601-29902918.jpg" alt="" />
                            <span>
                                photos_2024.png
                            </span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>
                        
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                    <span>Shared files</span>
                    <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>

            </div>
        </div>
    );
};

export default Details