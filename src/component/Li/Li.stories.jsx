import React from "react";
import Li from "./Li";

export default {
    component : Li,
    Li : 'component/Li'
}

const Template = (args) => <Li {...args} />

export  const Default = Template.bind({});

Default.args = {
    item : "oui"
}