/** @format */

// marker size is 10
export default {
    circle: {
        path: 'M-5,10a5,5 0 1, 0 10,0a5,5 0 1, 0 -10,0Z',
    },
    square: {
        path: 'M5,15H-5V5H5Z',
    },
    diamond: {
        path: 'M6.5,10L0,16.5L-6.5,10L0,3.5Z',
    },
    cross: {
        // path: 'M6,2H2V6H-2V2H-6V-2H-2V-6H2V-2H6Z',
        path: 'M6,12H2V16H-2V12H-6V8H-2V4H2V8H6Z',
    },
    x: {
        //M0,2.83l2.83,2.83l2.83,-2.83l-2.83,-2.83l2.83,-2.83l-2.83,-2.83l-2.83,2.83l-2.83,-2.83l-2.83,2.83l2.83,2.83l-2.83,2.83l2.83,2.83Z
        path:
            'M0,12.83l2.83,2.83l2.83,-2.83l-2.83,-2.83l2.83,-2.83l-2.83,-2.83l-2.83,2.83l-2.83,-2.83l-2.83,2.83l2.83,2.83l-2.83,2.83l2.83,2.83Z', // absolute
    },
    'triangle-up': {
        path: 'M-5.77,12.5H5.77L0,5Z',
    },
    'triangle-down': {
        path: 'M-5.77,7.5H5.77L0,15Z',
    },
    'triangle-left': {
        path: 'M2.5,4.23V15.77L-5,10Z',
    },
    'triangle-right': {
        path: 'M-2.5,4.23V15.77L5,10Z',
    },
    'triangle-ne': {
        path: 'M-6,7H3V16Z',
    },
    'triangle-se': {
        path: 'M3,4V13H-6Z',
    },
    'triangle-sw': {
        path: 'M6,13H-3V4Z',
    },
    'triangle-nw': {
        path: 'M-3,16V7H6Z',
    },
    'circle-open': {
        path: 'M-5,10a5,5 0 1, 0 10,0a5,5 0 1, 0 -10,0Z',
        open: true,
    },
    'square-open': {
        path: 'M5,15H-5V5H5Z',
        open: true,
    },
    'diamond-open': {
        path: 'M6.5,10L0,16.5L-6.5,10L0,3.5Z',
        open: true,
    },
    'star-open': {
        path: 'M1.58,7.84H6.66L2.54,10.83L4.12,15.66L0,12.67L-4.12,15.66L-2.54,10.83L-6.66,7.84H-1.58L0,3Z',
        open: true,
    },
    pentagon: {
        path: 'M4.76,8.46L2.94,14.05H-2.94L-4.76,8.46L0,5Z',
    },
    hourglass: {
        path: 'M5,15H-5L5,5H-5Z',
    },
    hexagram: {
        path: 'M-3.8,10l-1.9,-3.3h3.8l1.9,-3.3l1.9,3.3h3.8l-1.9,3.3l1.9,3.3h-3.8l-1.9,3.3l-1.9,-3.3h-3.8Z',
    },
    star: {
        path: 'M1.58,7.84H6.66L2.54,10.83L4.12,15.66L0,12.67L-4.12,15.66L-2.54,10.83L-6.66,7.84H-1.58L0,3Z',
    },
    'square-x-open': {
        path: 'M5,15L-5,5M5,5L-5,15M5,15H-5V5H5Z',
        open: true,
    },
    'star-square-open': {
        path: 'M-5.5,4.5A 10,20 0 0 1 -5.5,15.5A 10,20 0 0 1 5.5,15.5A 10,20 0 0 1 5.5,4.5A 10,20 0 0 1 -5.5,4.5Z',
        open: true,
    },
    'star-diamond': {
        path: 'M-7,10A 9.5,19.5 0 0 1 0,17A 9.5,19.5 0 0 1 7,10A 9.5,19.5 0 0 1 0,3A 9.5,19.5 0 0 1 -7,10Z',
    },
    'diamond-tall-open': {
        path: 'M0,17L3.5,10L0,3L-3.5,10Z',
        open: true,
    },
    'diamond-wide-open': {
        // path: 'M0,3.5L7,0L0,-3.5L-7,0Z'
        path: 'M0,13.5L7,10L0,6.5L-7,10Z',
        open: true,
    },
    bowtie: {
        path: 'M5,15V5L-5,15V5Z',
    },
    'hourglass-open': {
        path: 'M5,15H-5L5,5H-5Z',
        open: true,
    },
    'arrow-up-open': {
        path: 'M0,10L-5,20H5Z',
        open: true,
    },
    'arrow-down-open': {
        path: 'M0,10L-5,0H5Z',
    },
    'triangle-up-open': {
        path: 'M-5.77,12.5H5.77L0,5Z',
        open: true,
    },
    'triangle-down-open': {
        path: 'M-5.77,7.5H5.77L0,10Z',
        open: true,
    },
}
