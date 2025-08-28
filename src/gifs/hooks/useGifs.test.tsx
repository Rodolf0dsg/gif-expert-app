import { describe, expect, test, vi } from 'vitest';
import { useGifs } from './useGifs';
import { act, renderHook } from '@testing-library/react';
import * as gifsActions from '../actions/get-gifs-by-query.action';
import { mockGifs } from '../../mock-data/gifs.mock';


// const deleteSearchMock = vi.fn();
// const handleSearchMock = vi.fn();
// const handleTermClickedMock = vi.fn();

// vi.mock('./useGifs', () => ({
//     gifData:  gifsMock,
//     searches: ['goku', 'hola'],
    
//     deleteSearch:      deleteSearchMock,
//     handleSearch:      handleSearchMock,
//     handleTermClicked: handleTermClickedMock,
// }));

describe('useGifs.tsx', () => {

    test('should return default values', () => {

        const { result } = renderHook(() => useGifs());

        expect( result.current ).toEqual({
            gifData: expect.any(Array),
            searches: expect.any(Array),
            isLoading: expect.any(Boolean),
            deleteSearch: expect.any(Function),
            handleSearch: expect.any(Function),
            handleTermClicked: expect.any(Function)
        });

        expect( result.current.gifData.length ).toBe(0);
        expect( result.current.searches.length ).toBe(0);

    });

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('goku');
        });

        expect( result.current.gifData.length ).toBe(12);
        expect( typeof result.current.gifData ).toBe('object');
    });

    test('should return a list of gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect( result.current.gifData.length ).toBe(12);
        expect( typeof result.current.gifData ).toBe('object');
    });

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        
        await act(async () => {
            await result.current.handleTermClicked('goku');
        });
        
        expect( result.current.gifData.length ).toBe(12);
        
        vi.spyOn( gifsActions, 'getGifsByQuery' )
            .mockRejectedValue(new Error('This is my custom error'));
            
        try {
            await act(async () => {
                await result.current.handleTermClicked('goku');
            });
        } catch (e) {
        //   Ignorar el error
        }


        expect( result.current.gifData.length ).toBe(12);

    });

    test('Should not return more than 7 terms', async ()=> {
        const { result } = renderHook(() => useGifs());

        vi.spyOn( gifsActions, 'getGifsByQuery' )
                    .mockResolvedValue([]);
        
        await act(async () => {
            await result.current.handleSearch('goku');
        });
        await act(async () => {
            await result.current.handleSearch('goku2');
        });
        await act(async () => {
            await result.current.handleSearch('goku3');
        });
        await act(async () => {
            await result.current.handleSearch('goku4');
        });
        await act(async () => {
            await result.current.handleSearch('goku5');
        });
        await act(async () => {
            await result.current.handleSearch('goku6');
        });
        await act(async () => {
            await result.current.handleSearch('goku7');
        });
        await act(async () => {
            await result.current.handleSearch('goku8');
        });
        await act(async () => {
            await result.current.handleSearch('goku9');
        });

        expect( result.current.searches.length ).toBe(7);
        expect( result.current.searches ).toStrictEqual([
            'goku9', 'goku8',
            'goku7', 'goku6',
            'goku5', 'goku4',
            'goku3'
        ]);
    });
});