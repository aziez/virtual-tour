import { Viewer } from "photo-sphere-viewer";
import { useEffect, useRef } from "react";



export default function Tour(props){
    const elemen = useRef();


    useEffect(() => {
        let tour = new Viewer({
            container: elemen.current,
            loadingImg: props.imgLoad,
            loadingTxt: props.loadTxt,
            
        })
    })
 }
