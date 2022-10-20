import React from "react";
import Ul from "./Ul";

export default {
    component : Ul,
    Ul : 'component/Ul'
}

const Template = (args) => <Ul {...args} />

export  const Default = Template.bind({});

Default.args = {
}