import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en useFetchGifs.test.js', () => {



    test('Debe regresar el estado inicial', () => {

        const { result, rerender, unmount } = renderHook( () => useFetchGifs('Shingeky') );


        // console.log(result);
        //{ current: { images: [], isLoading: true } }
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Debe retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result, rerender, unmount } = renderHook( () => useFetchGifs('Shingeky') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            // {
            //     timeout,

            // }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});