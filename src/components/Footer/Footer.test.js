import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Footer from './Footer'

describe('Footer', () => {
    test('renders Footer component', () => {
        render(<Footer />)

        expect(screen.getByText('Created by Kinga Mamak')).toBeInTheDocument()
    })
})