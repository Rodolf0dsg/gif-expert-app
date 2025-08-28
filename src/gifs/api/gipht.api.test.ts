import { describe, expect, test } from "vitest";
import { giphtApi } from "./gipht.api";

describe('GiphyApi', () => {
    test('should be configured correctly', () => {

        const params = giphtApi.defaults.params;
        expect( giphtApi.defaults.baseURL ).toBe('https://api.giphy.com/v1/gifs/');


        expect( params.lang ).toBe('es');
        expect( params.api_key ).toBe(import.meta.env.VITE_GIPHY_API_KEY);

        expect( params ).toEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
        });
        
    })
})