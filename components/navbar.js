/* eslint-disable react-hooks/rules-of-hooks */
import { Viewer } from "photo-sphere-viewer"
import {LeftSquareTwoTone} from '@ant-design/icons'
import { Button, Space } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";
import { LeftSquareOutlined } from '@ant-design/icons'

export default function navbar(props){
    var icns = <Space><LeftSquareOutlined/></Space>
    let autorotate =  'autorotate' 
    let zoom = 'zoom'
    let move = 'move'
    let cap = 'caption'
    let fc = 'fullscreen'
    let icon = icns 
    let gl = 'gallery'
    const router = useRouter();

    let backBtn = {id: 'backBtn', content: icon, title: 'Kembali', className: 'backBtn', onClick: () => {
        router.push('/selection')
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
        gl,
        fc,
        backBtn
    ];




    return (
        navBar
    )


}