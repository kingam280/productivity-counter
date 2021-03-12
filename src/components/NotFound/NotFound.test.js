import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import NotFound from './NotFound'

describe('NotFound', () => {
    test('renders NotFound component', () => {
        render(<NotFound />)

        expect(screen.getByText('Not Found')).toBeInTheDocument()
    })
})