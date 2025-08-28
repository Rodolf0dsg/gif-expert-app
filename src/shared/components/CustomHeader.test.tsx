import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('Tests on CustomHeader', ()=> {
    test('should render the title correctly', () => {

        const title = 'Custom title'

        render(<CustomHeader title = { title } />);
        const h1:HTMLElement = screen.getByRole('heading', {level: 1});
        

        expect( h1.innerHTML ).toBe( title );

    });

    test('should render the description when provided', () => {
        const title = 'Custom title';
        const description = 'Custom description';

        render(<CustomHeader title = { title } description={ description } />);

        const h1:HTMLElement = screen.getByRole('heading', {level: 1});
        const p:HTMLElement = screen.getByRole('paragraph');
        
        expect( h1.innerHTML ).toBe( title );
        expect( p.innerHTML ).toBe( description );
    });

    test('should not render the description when no provided', () => {

        const title = 'Custom title';

        render(<CustomHeader title = { title } />);
        const p = screen.queryByRole('paragraph');
        
        expect( p ).toBeFalsy();

    });
})