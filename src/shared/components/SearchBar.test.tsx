import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { SearchBar } from './SearchBar';


describe('SearchBar.tsx', () => {

    test('should render SearchBar correctly', () => {
        render(<SearchBar onQuery={()=>{}}/>)

        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery with correct value after 700ms', async () => {

        const onQuery = vi.fn();
        render(<SearchBar onQuery={ onQuery }/>);
        
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect( onQuery ).toHaveBeenCalled();
            expect( onQuery ).toHaveBeenCalledWith('test');
        });

    });

    test('should call only once with last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={ onQuery }/>);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect( onQuery ).toHaveBeenCalledTimes(1);
            expect( onQuery ).toHaveBeenCalledWith('test');
        });
    });

    test('should call onQuery when button clicked', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={ onQuery }/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });


        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( onQuery ).toHaveBeenCalledTimes(1);
        expect( onQuery ).toHaveBeenCalledWith('test');
    });

    test('should render placeholder on input', () => {
        const placeholder = 'TestPlaceholder'
        render(<SearchBar onQuery={()=>null} placeholder={ placeholder }/>);

        expect( screen.getByPlaceholderText( placeholder ) ).toBeDefined();
    });
})