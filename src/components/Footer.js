import react from "react";
import FooterStyle from "./Footer.css"

function Footer(){
    return(
        <footer className={'footer-container'}>
            <section className={"footer-socials"}>
                <p className={"footer-socials-heading"}>
                    Keep an eye on our socials for the latest info.
                </p>
                <p className={"socials"}>
                    <a href={"#"}>Instagram</a>
                    <br/>
                    <a href={"#"}>Facebook</a>
                </p>
            </section>
        </footer>
    );
}

export default Footer