import { GifItem } from "../../src/components/GifItem"
import { render, screen } from "@testing-library/react";

describe('Pruebas en GifItem', () => {

    const title = 'Gif';
    const url = 'https://random-gif.com/random.jpg'

    test('Evaluando el snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url }  />)

        expect( container ).toMatchSnapshot();

    });

    test('Imagen debe mostrar url y titulo indicado', () => {

        render(<GifItem title={ title } url={ url }  />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt }  = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('Debe de mostrar el titulo del componente', () => {

        render(<GifItem title={ title } url={ url }  />);
        expect( screen.getByText( title ) ).toBeTruthy();

    });

});