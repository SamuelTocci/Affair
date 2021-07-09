import react from 'react'
import PictureTextStyle from "./PictureText.css"

const PictureText = (props) => {
    return (
        <div className={"container"}>
            <div className={"Category"}>
                {props.category}
            </div>
            <div>
            <div className={"Title"}>
                <p>{props.title}</p>
            </div>
            <div className={"Text"}>
                <p>{props.text}</p>
            </div>
            </div>
            <div className={"Img"}><img src={props.img} width={600}/></div>
        </div>
    );
}

export default PictureText;