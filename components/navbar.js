import { Viewer } from "photo-sphere-viewer"
import {LeftSquareTwoTone} from '@ant-design/icons'
import { Button, Space } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";

export default function navbar(props){
    let autorotate =  'autorotate' 
    let zoom = 'zoom'
    let move = 'move'
    let cap = 'caption'
    let fc = 'fullscreen'
    let icon =   'back'
    const router = useRouter();

    let backBtn = {id: 'backBtn', content: icon, title: 'Kembali', className: 'backBtn', onClick: () => {
        router.push('/')
    }}

    // const handleBack = () => {
    //     return(
            
    //     )
    // }

    const navBar = [
        autorotate,
        zoom,
        move,
        cap,
        fc,
        backBtn
    ];




    return (
        navBar
    )


}