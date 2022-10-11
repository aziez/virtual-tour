import {Viewer } from "photo-sphere-viewer";
import { GyroscopePlugin } from "photo-sphere-viewer/dist/plugins/gyroscope";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { StereoPlugin } from "photo-sphere-viewer/dist/plugins/stereo";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";
import React, {useEffect} from "react";
import { Exterior } from "../components/Nodes";
import { markers } from "../components/Marker";
import styles from '../styles/Tour.module.css'
import navbar from "../components/navbar";


export default function Tour() {
    const elem = React.useRef()
    let nav = navbar()

    useEffect(() => {
        let viewer = new Viewer({
            container: elem.current,
            loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
            loadingTxt: 'loading Tour',
            navbar: nav,
            plugins: [
                [MarkersPlugin, {markers: markers}],
                [VirtualTourPlugin, {positionMode: VirtualTourPlugin.MODE_MANUAL, renderMode: VirtualTourPlugin.MODE_3D}],
                [GyroscopePlugin, {absolutePosition: false}],
                [StereoPlugin, {}]
            ]
    
        })

        var exterior = viewer.getPlugin(VirtualTourPlugin);
        exterior.setNodes(Exterior)

        viewer.once('ready', () => {
            console.log('viewer telah READY');
            // viewer.navbar.show();
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
        })
//PN VIEWER 360 UPDATE ZOOM
        viewer.on('zoom-updated', (e, level)=> {
            console.log(`Zoom Level: ${level}`);
        })

    });


    return (
        <div ref={elem} className={styles.bg}></div>
    )
}