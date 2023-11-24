import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en GifGrid', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
    });

    const category = 'Rodolfo';

    test('Debe de mostrar loading al inicio', () => {

        render(<GifGrid category={ category } />);

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

    })

    test('Debe mostrar items cuando se carguen imagenes', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Shingeky',
                url: 'https://cualquierlink.com/shongeky.jpg'
            },
            {
                id: '123',
                title: 'DBZ',
                url: 'https://cualquierlink.com/goku.jpg'
            }
        ]

        //simular que un customHook regrese lo que nosotros queramos

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={ category } />);

        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});