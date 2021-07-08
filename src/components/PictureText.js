import react from 'react'
import PictureTextStyle from "./PictureText.css"

const PictureText = (props) => {
    return (
        <>
        <div className={"Category"}>
            {props.category}
        </div>
        <div className={"Title"}>
            <p className={"Img"}><img src={props.img}/></p>
            <p>{props.title}</p>
        </div>
        <div className={"Text"}>
            <p>
                {props.text}
            </p>
        </div>
        </>
    );
}

export default PictureText;