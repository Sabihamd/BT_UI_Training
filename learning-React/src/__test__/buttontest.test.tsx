import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTest from '../Components/testing/ButtonTest';


test('Increment Counter', () => {

    render(<ButtonTest/>)

    const counter= screen.getByTestId('counter')
    const incrementBtn=screen.getByTestId('increment')

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent('1');
});
