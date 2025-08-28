import { describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';
import { fireEvent, render, screen } from '@testing-library/react';


const handleAddMock = vi.fn();
const handleSustractMock = vi.fn();
const reset = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSustract: handleSustractMock,
        reset: reset,
    })
}));

describe('MyCounterApp with mocks', () => {

    test('should render the component', () => {
       render(<MyCounterApp/>);

        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain('20');
        expect( screen.getByRole('button', {name: '+1'}) ).toBeDefined();
        expect( screen.getByRole('button', {name: '-1'}) ).toBeDefined();
        expect( screen.getByRole('button', {name: 'Reset'}) ).toBeDefined();

    });

    test('should call handleAdd when button is clicked', () => {
        render(<MyCounterApp/>);

        const button = screen.getByRole('button', {name: '+1'})

        fireEvent.click( button );

        expect( handleAddMock ).toHaveBeenCalled();
        expect( handleSustractMock ).not.toHaveBeenCalled();
        expect( reset ).not.toHaveBeenCalled();
    })
})