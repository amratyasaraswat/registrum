import React from 'react'
import StatusList from '../components/StatusList'
import { Provider } from 'react-redux'
import { store } from '../models/redux/store'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
it('Renders StatusList Correctly', () => {
    const statuses = [
        { crn: '12345', status: 'Not Open' },
        { crn: '32343', status: 'Not Open' },
        { crn: '12341', status: 'Not Open' }
    ]
    render(
        <Provider store={store}>
            <Router>
                <StatusList statuses={statuses} />
            </Router>
        </Provider>
    )

    statuses.forEach(status => {
        // * Test for each status in App
        expect(screen.findByText(status.crn)).toBeDefined()
        expect(screen.findByText(status.status)).toBeDefined()
    })
})