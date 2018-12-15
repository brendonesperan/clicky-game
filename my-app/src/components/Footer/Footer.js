import React from "react";

const styles = {
    footerStyle: {
        background: "#393f4d",
        height: "8%",
        position: "absolute",
        bottom: "0",
        width: "100%",
        color: "#feda6a"
    }
}

const Footer = ({ children }) => (
    <div className = "footer" style={styles.footerStyle}>
        {children}
    </div>
)

export default Footer;