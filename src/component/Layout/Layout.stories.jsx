import React from "react";
import Layout from "./Layout";


export default {
    component: Layout,
    title: 'component/Layout'
};


const Template = (args) => <Layout {...args} />

export  const Default = Template.bind({});

Default.args = {
    textButton : "valider",
    labelInput: "Entrez un pays"
}