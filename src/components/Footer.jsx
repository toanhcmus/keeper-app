import React from "react";

const date = new Date();


function Footer() {
    return (<footer><p>Copy right ⓒ {date.getFullYear()}</p></footer>);
}

export default Footer;