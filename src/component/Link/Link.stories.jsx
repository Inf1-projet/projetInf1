import React from "react";
import Link from "./Link";

export default {
    component : Link,
    Link : 'component/Link'
}

const Template = (args) => <Link {...args} />

export  const Default = Template.bind({});

Default.args = {
    link : "url",
    name : "nom"
}