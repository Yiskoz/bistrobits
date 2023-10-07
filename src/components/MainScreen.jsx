import { useState } from "react";

export default function MainScreen({ setHomepageState }) {
    const [mainScreenStatus, setMainScreenStatus] = useState(true);
    const [mainScreenEffectStatus, setMainScreenEffectStatus] = useState(false);

    const ClickHandler = () => {
        setMainScreenEffectStatus(true);
        setHomepageState(true)
        
        setTimeout(() => {
            setMainScreenStatus(false);
        }, 1400);
    }
    const classNames = `main-screen ${
        mainScreenStatus && !mainScreenEffectStatus ? "" :
        mainScreenStatus && mainScreenEffectStatus ? "disapear" :
        mainScreenEffectStatus && !mainScreenStatus ? "hide" :
        ""
      }`;

    return (
        <div onClick={ClickHandler} className={classNames}>
            <div className="main-screen_content">
                <h1 className="main-title">BistroBits</h1>
                <p className="flicker">Click to munch!</p>
            </div>
        </div>
    );
}