import React from 'react';
import Button from './Button';

export default {
    component: Button,
    title: 'component/Button'
};

const Template = (args) => <Button {...args} />

export  const Default = Template.bind({});

Default.args = {
    text: 'Button',
    type: "b-p3"
}

export const Page2 = Template.bind({});

Page2.args = {
    text: 'Button',

    type: "b-p3"

}

export const Page3 = Template.bind({});

Page3.args = {
    text: 'Button',

    type: "b-p3"
}