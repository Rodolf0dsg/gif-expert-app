import { beforeEach, describe, expect } from 'vitest';
import { useCounter } from './useCounter'
import { renderHook, act } from '@testing-library/react';


describe('Tests on useCounter', () => {

    // let result;
    
    // beforeEach(()=>{
    //     const { result:hookValue } = renderHook( () => useCounter() );
    //     result = hookValue;
    // })

    test('should initialize with initial value', () => {
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
    });

    test('should initialize with custom value', () => {
        const customValue = 2;

        const { result } = renderHook( () => useCounter( customValue ) );

        expect( result.current.counter ).toBe(customValue);
    });    

    test('should increment when handleAdd is called', () => {
        const customValue = 2;
    
        const { result } = renderHook( () => useCounter( customValue ) );
    
        act(() => {
            result.current.handleAdd();
        })
    
        expect( result.current.counter ).toBe(customValue + 1);
    });    

    test('should decrement when handleSustract is called', () => {
        const customValue = 4;
    
        const { result } = renderHook( () => useCounter( customValue ) );
    
        act(() => {
            result.current.handleSustract();
        })
    
        expect( result.current.counter ).toBe(customValue - 1);
    });  

    test('should reset to initial value when reset is called', () => {
        const customValue = 4;
    
        const { result } = renderHook( () => useCounter( customValue ) );
    
        act(() => {
            result.current.handleSustract();
        });

        expect( result.current.counter ).toBe(customValue - 1);
    

        act(() => {
            result.current.reset();
        })
    
        expect( result.current.counter ).toBe(customValue);
    });  
})