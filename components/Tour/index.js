import { Viewer } from "photo-sphere-viewer";
import { useEffect, useRef } from "react";
import Pano from "../Pano"



export default function Tour(props){
    const panoImg = "https://photo-sphere-viewer-data.netlify.app/assets/";
    // const viewer = Pano.viewer;
    // useEffect(() => {
    //     viewer.navbar = ['autorotate', 'zoom', 'Descriptions']
    // })

    return (
        <>
        <Pano pano={panoImg + 'sphere.jpg'} load={panoImg + 'loader.gif'} rotate={300} />
        </>
    )


 }
