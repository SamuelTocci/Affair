import react from 'react'
import PictureTextInverseStyle from "./PictureText.css"

const PictureText = (props) => {
    return (
        <div className={"container"}>
            <div>
            <div className={"Category"}>
                {props.category}
            </div>
            <div className={"Title"}>
                {props.title}
            </div>
            <div className={"Text"}>
                <p>{props.text}</p>
            </div>
            </div>
            <div className={"Img"}><img src={props.img} width={600} height={440}/></div>
        </div>
    );
}

export default PictureText;