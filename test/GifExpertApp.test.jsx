import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { useState } from "react";

describe('Pruebas en GifExpertApp', () => {

    test('Match en el snapshot [opcional]', () => {

        const { container } = render(<GifExpertApp />);

        expect( container ).toMatchSnapshot();
        
    });

    test('Si busco una categoria la renderiza', () => {

        const { getByText } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.input( input , { target: { value: 'DBZ' } });
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( getByText('DBZ')).toBeTruthy()

    })

});

