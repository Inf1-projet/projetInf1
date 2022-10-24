import React from "react";
import Card2 from "./Card2";

export default {
    component : Card2,
    Card2 : 'component/Card2'
}

const Template = (args) => <Card2 {...args} />

export  const Default = Template.bind({});

Default.args = {
    image : "./public/logo192.png",
    nom:"Pikachu",
    type:"Electrique",
    abilite:"Tonnerre",
    poids:"10",
}

