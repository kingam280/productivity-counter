import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {
    HashRouter as Router,
} from "react-router-dom";

import Menu from './Menu'

describe('Menu', () => {
    test('renders Menu component', () => {
        render(<Router><Menu /></Router>)

        expect(screen.getByText('Timer')).toBeInTheDocument()
        expect(screen.getByText('Stats')).toBeInTheDocument()
        expect(screen.getByText('Settings')).toBeInTheDocument()
    })
})