import React from 'react';
import AAA from "./aa";
import Description1 from "./Description1";
import Description2 from "./Description2";
import Description3 from "./Description3";
import Description4 from "./Description4";

export const accordionFirstTabData = [
    {
        id:1,
        title:'How do I add a new question & answer?',
        description:<Description1/>,
        panelContent:null,
    },
    {
        id:2,
        title:'Can I insert an image, video, or gif in my FAQ?',
        description:<Description2/>,
        panelContent:null,
    },
    {
        id:3,
        title:'How do I edit or remove the “FAQ” title?',
        description:<Description3/>,
        panelContent:null,
    },
]

export const accordionSecondTabData = [
    {
        id:4,
        title:'What is an FAQ section?',
        description:<Description4/>,
        panelContent:AAA,
    },
]