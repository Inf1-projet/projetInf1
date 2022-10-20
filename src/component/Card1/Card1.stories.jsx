import React from "react";
import Card1 from "./Card1";

export default {
    component : Card1,
    Card1 : 'component/Card1'
}

const Template = (args) => <Card1 {...args} />

export  const Default = Template.bind({});

Default.args = {
    image : "./public/logo192.png",
}

