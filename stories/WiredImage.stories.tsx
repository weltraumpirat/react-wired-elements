import React from 'react';
import { WiredImage } from '../src';
import { text, select } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredImage',
};

export const Default = () => (
  <Container>
    <WiredImage
      elevation={select('elevation', [1, 2, 3, 4, 5], 1)}
      src={text('src', 'http://placekitten.com/200/300')}
    />
  </Container>
);
