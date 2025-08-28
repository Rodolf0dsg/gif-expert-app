import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
    test('should match snapshot', () => {
        const { container } = render(<GifsApp/>)

        expect(container).toMatchSnapshot();
    })
})