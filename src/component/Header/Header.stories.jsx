import React from "react";
import Header from "./Header";

export default {
    component : Header,
    header : 'component/Header'
}

const Template = (args) => <Header {...args} />

export  const Default = Template.bind({});

Default.args = {
    logo:'the logo',

}