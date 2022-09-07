import { Viewer } from "photo-sphere-viewer";
import React, { useEffect } from "react";
import styles from './pano.module.css'



export default function Pano(props){
    const view = React.useRef();
    let navbar;

    useEffect(() => {
        let viewer = new Viewer({
            container: view.current,
            panorama: props.pano,
            loadingImg: props.load,
            loadingTxt: 'Memuat Virtual Tour',
            autorotateDelay: props.rotate,
            autorotateIdle: true
        })
//ON VIEWER 360 READY
        viewer.once('ready', () => {
            console.log('viewer telah READY');
            viewer.navbar.hide();
        })
//ON VIWEWER 360 LOADS
        viewer.on('panorama-loaded', () => {
            console.log('viwewer telah LOADED');
        })
//ON VIEWER 360 CLICKED
        viewer.on('click', (e, data) => {
            console.log('Viewer telah di KLIK');
            console.log(`${data.rightclick?'right' : ''}`)
            console.log(`LONG: ${data.longitude}, LAT: ${data.latitude}`)
        })
//ON VIEWER 360 UPDATE POSITION
        viewer.on('position-updated', (e, pos) => {
            // console.log(`Posisi LONG : ${pos.longitude}, Posisi LAT: ${pos.latitude}`);
        })
//PN VIEWER 360 UPDATE ZOOM
        viewer.on('zoom-updated', (e, level)=> {
            console.log(`Zoom Level: ${level}`);
        })
    })

    return(
        <>
            <div ref={view} className={styles.bg}></div>
        </>
    )

}