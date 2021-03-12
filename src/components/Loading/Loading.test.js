import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Loading from './Loading'

describe('Loading', () => {
    test('renders Loading component', () => {
        render(<Loading />)

        expect(screen.getByAltText('loading-spinner')).toBeInTheDocument()
    })
})