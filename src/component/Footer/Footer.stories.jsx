import React from "react";
import Footer from "./Footer";

export default {
    component : Footer,
    Footer : 'component/Footer'
}

const Template = (args) => <Footer {...args} />

export  const Default = Template.bind({});

Default.args = {
    previous : true || false,
    link1 : "oui",
    name1 : "oui",
    link2 : "non",
    name2 : "non"
}