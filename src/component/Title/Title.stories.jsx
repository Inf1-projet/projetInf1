import React from 'react';
import Title from './Title';

export default {
    component: Title,
    title: 'component/Title'
};

const Template = (args) => <Title {...args} />

export const Small = Template.bind({});

Small.args = {
    children: 'Titre du composant',
    size: 'small',
}

export const Medium = Template.bind({});

Medium.args = {
    children: 'Titre du composant',
    size: 'medium',
}

export const Large = Template.bind({});
Large.args = {
    children: 'Titre du composant',
    size: 'large',
}