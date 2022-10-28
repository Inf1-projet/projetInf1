import React from "react";
import CardPokemon from "./CardPokemon";

export default {
    component : CardPokemon,
    CardPokemon : 'component/CardPokemon'
}

const Template = (args) => <CardPokemon {...args} />

export  const Default = Template.bind({});

Default.args = {
    image : "./public/logo192.png",
}

