import React from "react";
import CardPokemonDetail from "./CardPokemonDetail";

export default {
    component : CardPokemonDetail,
    CardPokemonDetail : 'component/CardPokemonDetail'
}

const Template = (args) => <CardPokemonDetail {...args} />

export  const Default = Template.bind({});

Default.args = {
    image : "./public/logo192.png",
    nom:"Pikachu",
    type:"Electrique",
    taille:"180",
    poids:"10",
}

