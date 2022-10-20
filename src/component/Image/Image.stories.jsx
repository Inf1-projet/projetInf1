import React from "react";
import Image from "./Image";

export default {
    component : Image,
    image : 'component/Image'
}

const Template = (args) => <Image {...args} />

export  const Small = Template.bind({});

Small.args = {
    taille : "small",
    image : "./public/logo192.png",
}

export const Medium = Template.bind({});

Medium.args = {
    taille : "medium",
    image : "./public/logo192.png",
}

export const Large = Template.bind({});

Large.args = {
    taille : "large",
    image : "./public/logo192.png",
}