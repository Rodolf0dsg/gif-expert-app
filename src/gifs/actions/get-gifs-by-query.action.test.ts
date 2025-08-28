import { beforeEach, describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter'

import { getGifsByQuery } from './get-gifs-by-query.action';
import { giphtApi } from '../api/gipht.api';
import { giphySearchResponseMock } from '../../../test/mocks/giphy.response.data';



describe('get-gifs-by-query.action.ts', () => {

    let mock = new AxiosMockAdapter( giphtApi );

    beforeEach(()=>{
        mock = new AxiosMockAdapter( giphtApi );
    });

    // test('should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery('goku');

    //     const [ gif ] = gifs;
    //     expect( gifs.length ).toBe(12);
        
    //     expect( gif ).toEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     });
        
    // });

    test('should return a list of gifs', async() => {
        mock.onGet('/search').reply(200, giphySearchResponseMock );

        const gifs = await getGifsByQuery('goku')

        expect( gifs.length ).toBe( 12 );

        gifs.forEach((gif) => {
            expect( typeof gif.id     ).toBe('string')
            expect( typeof gif.height ).toBe('number')
            expect( typeof gif.width  ).toBe('number')
            expect( typeof gif.title  ).toBe('string')
            expect( typeof gif.url    ).toBe('string')
        });
    });

    test('should return a empty list whrn query is empty', async() => {

        mock.restore();

        const gifs = await getGifsByQuery('')

        expect( gifs.length ).toBe( 0 );
    });

    test('should handle error when api returns error', async() => {

        const consoleErrorSpy = vi.spyOn( console, 'error' )
            .mockImplementation(() => {});

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad request',
            }
        });

        const gifs = await getGifsByQuery('goku')

        expect( gifs.length ).toBe( 0 );
        expect( consoleErrorSpy ).toHaveBeenCalled();
        expect( consoleErrorSpy ).toHaveBeenCalledTimes(1);
        expect( consoleErrorSpy ).toHaveBeenCalledWith( expect.anything() );
        
    });
})