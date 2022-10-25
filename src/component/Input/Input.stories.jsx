import React from 'react';
import Input from './Input';

export default {
    component: Input,
    title: 'component/Input'
};

const Template = (args) => <Input {...args} />

export  const Default = Template.bind({});

Default.args = {
    placeholder : "Entrez un pokemon",
}
