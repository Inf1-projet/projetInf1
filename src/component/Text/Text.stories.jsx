import React from 'react';
import Text from './Text';

export default {
    component: Text,
    text: 'component/Text'
};

const Template = (args) => <Text {...args} />

export const Children = Template.bind({});

Children.args = {
    children: 'Titre du composant',
    bold: false,
}

export const ChildrenBold = Template.bind({});

ChildrenBold.args = {
    children: 'Titre du composant',
    bold: true,
}
