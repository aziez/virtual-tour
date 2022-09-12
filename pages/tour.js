import { Viewer } from "photo-sphere-viewer";
import React, { useEffect } from "react";
import Pano from "../components/Pano";
import Tour from "../components/Tour";
// import navbar from "../components/navbar";
import navbar from "../components/navbar";


export default function tour(){
    const panoImg = "https://photo-sphere-viewer-data.netlify.app/assets/";
    let navigasi = navbar();

    return(
        // console.log(navbar())
        // <>
        <Pano pano={panoImg + 'sphere.jpg'} load={panoImg + 'loader.gif'} rotate={300} nav={navigasi}/>
        // </>
    )
}


// function tour(){
   
//     useEffect(() => {
//         Viewer ({
//             autorotateIdle: false
//         })
//     }

//     return (

//         <>
//         
//         </>
//     )

// }

// export default tour;