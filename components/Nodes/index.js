import { markers } from "../Marker";
   const base = '360/'
   const ext = '.jpg'
   const thumb = '-thumb'


   export const Exterior = [
    {
        id      : '0',
        panorama: base+0+ext,
        thumbnail: base+0+ext,
        name    : 'Gate Entrance 1',
        description : 'Gate',
        links   : [
            { nodeId: '1' },
            // { x: 6.176 },
            // { y: -0.244}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
        // markers: markers
        
    },
    {
        id      : '1',
        panorama: base+1+ext,
        thumbnail: base+1+ext,
        name    : 'Gate Entrance 1',
        description : 'Gate',
        links   : [
            { nodeId: '0' },
            { nodeId: '2'  }
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },

    {
        id      : '2',
        panorama: base+2+ext,
        thumbnail: base+2+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '1' },
            { nodeId: '3'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '3',
        panorama: base+3+ext,
        thumbnail: base+3+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '2' },
            { nodeId: '4'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '4',
        panorama: base+4+ext,
        thumbnail: base+4+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '3' },
            { nodeId: '5'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '5',
        panorama: base+5+ext,
        thumbnail: base+5+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '4' },
            { nodeId: '6'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '6',
        panorama: base+6+ext,
        thumbnail: base+6+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '5' },
            { nodeId: '7'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '7',
        panorama: base+7+ext,
        thumbnail: base+7+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '6' },
            { nodeId: '8'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '8',
        panorama: base+8+ext,
        thumbnail: base+8+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '7' },
            { nodeId: '9'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '9',
        panorama: base+9+ext,
        thumbnail: base+9+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '8' },
            { nodeId: '10'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '10',
        panorama: base+10+ext,
        thumbnail: base+10+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '9' },
            { nodeId: '11'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '11',
        panorama: base+11+ext,
        thumbnail: base+11+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '10' },
            { nodeId: '12'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '12',
        panorama: base+12+ext,
        thumbnail: base+12+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '11' },
            { nodeId: '13'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '13',
        panorama: base+13+ext,
        thumbnail: base+13+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '12' },
            { nodeId: '14'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '14',
        panorama: base+14+ext,
        thumbnail: base+14+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '13' },
            { nodeId: '15'}
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
    {
        id      : '15',
        panorama: base+15+ext,
        thumbnail: base+15+ext,
        name    : 'Gate Entrance 2',
        description : 'Gate',
        links   : [
            { nodeId: '14' },
        ],
        position: [0, 0, 0],
        panoData: { poseHeading: 0 },
    },
];