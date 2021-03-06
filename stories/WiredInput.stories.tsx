import React from 'react';
import { WiredInput } from '../src';
import { inputTypes } from '../src/utils/inputTypes';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredInput',
};

export const Default = () => (
  <Container>
    <WiredInput
      placeholder={text('placeholder', 'Email Address')}
      type={select('type', inputTypes, 'email')}
      disabled={boolean('disabled', false)}
      onChange={action('onChange fired.')}
      onBlur={action('onBlur fired.')}
      onFocus={action('onFocus fired.')}
    />
  </Container>
);
