/* eslint-disable react-hooks/exhaustive-deps */
import { utils, Viewer } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from 'photo-sphere-viewer/dist/plugins/virtual-tour';
import { GyroscopePlugin } from 'photo-sphere-viewer/dist/plugins/gyroscope';
import { StereoPlugin } from 'photo-sphere-viewer/dist/plugins/stereo';
import { Animation } from 'photo-sphere-viewer';
import React, { useEffect } from "react";
import styles from './pano.module.css'



export default function Pano(props){
    const view = React.useRef();
    let viewer;    

    const animationValues = {
        latitude: { start: -Math.PI / 2, end: 0.2},
        longitude: {start: Math.PI, end: 0},
        zoom : { start: 0, end: 50},
        fisheye : { start: 2, end: 0}
      };

    useEffect(() => {
    viewer = new Viewer({
            container: view.current,
            panorama: props.pano,
            caption: props.caption,
            loadingImg: props.load,
            loadingTxt: props.loadtxt,
            autorotateDelay: props.rotate,
            autorotateIdle: true,
            navbar: props.nav,
            defaultZoomLvl: props.zoom,
            plugins: [
                [MarkersPlugin], 
                [VirtualTourPlugin, {positionMode: VirtualTourPlugin.MODE_GPS, renderMode  :VirtualTourPlugin.MODE_3D,}],
                // [GyroscopePlugin, {}],
                // [StereoPlugin, {}],
            ],
        });

//ON VIEWER 360 READY
    viewer.once('ready', () => {
            console.log('viewer telah READY');
            viewer.navbar.hide();
            intro();
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

    
    
    function intro() {
        new utils.Animation({
            properties: animationValues,
            duration: 2500,
            easing: 'inOutQuad',
            onTick: (properties) => {
                viewer.setOption('fisheye', properties.fisheye);
                viewer.rotate({longitude: properties.longitude, latitude: properties.latitude});
                viewer.zoom(properties.zoom)
            }
        })
    }

    return(
        <>
            <div ref={view} className={styles.bg}></div>
        </>
    )

}