import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import FocusTimeSlider from './FocusTimeSlider'

describe('FocusTimeSlider', () => {
    test('renders FocusTimeSlider component', () => {
        const onChange = jest.fn()
        const focus = 50

        render(<FocusTimeSlider handleFocusTimeChange={onChange} focus={focus}/>)
        
        fireEvent.change(screen.getByDisplayValue(50), {
            target: {value: 60 }
        })

        expect(onChange).toHaveBeenCalledTimes(1)
    })
})