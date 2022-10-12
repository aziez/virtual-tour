import { markers } from "../Marker";
   const base = '360/'
   const ext = '.jpg'
   const thumb = '-thumb'




   export const Exterior = [
    {
        id      : '0',
        panorama: base+0+ext,
        thumbnail: base+0+ext,
        name    : 'View 0',
        caption : 'Gate Entrance 1',
        links   : [
            { nodeId: '1', longitude: 6.141, latitude : -0.0552 },
            // { x: 6.176 },
            // { y: -0.244}
        ],
        
    },
    {
        id      : '1',
        panorama: base+1+ext,
        thumbnail: base+1+ext,
        name    : 'View 1',
        caption : 'Gate Entrance 2',
        links   : [
            { nodeId: '0', longitude: 3.2137, latitude: -0.1277 },
            { nodeId: '2', longitude: 0.0875, latitude: -0.0148  }
        ],
    },
    {
        id      : '2',
        panorama: base+2+ext,
        thumbnail: base+2+ext,
        name    : 'View 2',
        caption : 'Pintu Masuk Motor',
        links   : [
            { nodeId: '1', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '3', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '3',
        panorama: base+3+ext,
        thumbnail: base+3+ext,
        name    : 'View 3',
        caption : 'Pintu Masuk Motor 2',
        links   : [
            { nodeId: '2', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '4', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '4',
        panorama: base+4+ext,
        thumbnail: base+4+ext,
        name    : 'View 4',
        caption : 'Kantin Belakang 1',
        links   : [
            { nodeId: '3', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '5', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '5',
        panorama: base+5+ext,
        thumbnail: base+5+ext,
        name    : 'View 5',
        caption : 'Kantin Belakang 2',
        links   : [
            { nodeId: '4', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '6', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '6',
        panorama: base+6+ext,
        thumbnail: base+6+ext,
        name    : 'View 6',
        caption : 'Kantin Belakang 3',
        links   : [
            { nodeId: '5', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '7', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '7',
        panorama: base+7+ext,
        thumbnail: base+7+ext,
        name    : 'View 7',
        caption : 'Pintu Masuk Parkir 1',
        links   : [
            { nodeId: '6', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '8', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '8',
        panorama: base+8+ext,
        thumbnail: base+8+ext,
        name    : 'View 8',
        caption : 'Pintu Masuk Parkir 2',
        links   : [
            { nodeId: '7', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '9', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '9',
        panorama: base+9+ext,
        thumbnail: base+9+ext,
        name    : 'View 9',
        caption : 'Pintu Parkir Mobil',
        links   : [
            { nodeId: '8', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '10', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '10',
        panorama: base+10+ext,
        thumbnail: base+10+ext,
        name    : 'View 10',
        caption : 'Pintu Parkir Mobil 2',
        links   : [
            { nodeId: '9', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '11', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '11',
        panorama: base+11+ext,
        thumbnail: base+11+ext,
        name    : 'View 11',
        caption : 'Gate Entrance Gedung B',
        links   : [
            { nodeId: '10', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '12', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '12',
        panorama: base+12+ext,
        thumbnail: base+12+ext,
        name    : 'View 12',
        caption : 'Taman',
        links   : [
            { nodeId: '11', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '13', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '13',
        panorama: base+13+ext,
        thumbnail: base+13+ext,
        name    : 'View 13',
        caption : 'Taman 2',
        links   : [
            { nodeId: '12', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '14', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '14',
        panorama: base+14+ext,
        thumbnail: base+14+ext,
        name    : 'View 14',
        caption : 'Taman 3',
        links   : [
            { nodeId: '13', longitude: 3.0629, latitude: -0.0407 },
            { nodeId: '15', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
    {
        id      : '15',
        panorama: base+15+ext,
        thumbnail: base+15+ext,
        name    : 'View 15',
        caption : 'Pintu Masuk Gedung A',
        links   : [
            { nodeId: '14', longitude: 3.0629, latitude: -0.0407 },
            // { nodeId: '15', longitude: 6.1985, latitude: -0.0360 },
        ],
    },
];