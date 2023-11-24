import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en GetGifs', () => {

    test('Debe retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('Shingeky');

        expect( gifs.length ).toBeGreaterThan(0); 
        
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        }); 

        expect( gifs.length ).toBeGreaterThan(0); 


    });

});