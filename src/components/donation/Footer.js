import React, { useState, useEffect } from "react";

const Footer = () => {
    const showBelow = 2200;
    const [show, setShow] = useState(showBelow ? false : true);

    let handleScroll

    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset) {
                if (!show) setShow(true)
            } else {
                if (show) setShow(false)
            } if (window.pageYOffset < showBelow) {
                setShow(false)
            }
        }
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    }, [handleScroll, show]);

    return (


        <div className="footer">
            <p>Developed by Pedro Dantas</p>
        </div>

    )
};

export default Footer;
