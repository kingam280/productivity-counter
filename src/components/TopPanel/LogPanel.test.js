import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import LogPanel from './LogPanel'
import {  AuthContext } from  '../../contexts/Auth'

describe('LogPanel', () => {
    test('renders FocusTimeSlider with \'Log in\' text when user is false', () => {
        const user = false

        render(<AuthContext.Provider value={{user: user}}><LogPanel /></AuthContext.Provider>)

        expect(screen.getByText('Log in')).toBeInTheDocument()
    })
    test('renders FocusTimeSlider with \'Log out\' text when user is true', () => {
        const user = true

        render(<AuthContext.Provider value={{user: user}}><LogPanel /></AuthContext.Provider>)

        expect(screen.getByText('Log out')).toBeInTheDocument()
    })
})