import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calendar from './Calendar'

describe('Calendar.tsx', () => {
    const today = new Date()
    const currentYear = today.getFullYear()
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const events = [
        { date: new Date('2023/11/25'), event: ['event for 2023/11/25'] },
        { date: new Date('2022/11/16'), event: ['event for 2022/11/16 Lorem ipsum dolor sit amet', 'Lorem ipsum', 'dolor sit amet'] },
        { date: new Date('2022/11/24'), event: ['event for 2022/11/24 dolor sit amet'] },
        { date: new Date('2022/11/25'), event: ['event for 2022/11/25 ipsum dolor sit amet'] },
        { date: new Date('2023/11/01'), event: ['event for 2023/11/01 Lorem ipsum dolor sit amet', 'dolor sit amet', 'Lorem ipsum', 'Lorem ipsum'] },
        { date: new Date('2023/11/14'), event: ['event for 2023/11/14 Lorem ipsum dolor sit amet', 'Lorem ipsum', 'Lorem ipsum dolor sit'] },
        { date: new Date('2022/11/01'), event: ['event for 2022/11/01 Lorem ipsum dolor sit amet', 'dolor sit amet', 'Lorem ipsum', 'Lorem ipsum dolor sit'] },
        { date: new Date('2023/11/16'), event: ['event for 2023/11/16 Lorem ipsum dolor sit amet', 'dolor sit amet', 'dolor sit amet'] },
        { date: new Date('2022/11/14'), event: ['event for 2022/11/14 Lorem ipsum dolor sit amet', 'Lorem ipsum', 'dolor sit amet'] },
        { date: new Date('2023/11/24'), event: ['event for 2023/11/24 Lorem ipsum dolor sit amet'] },
        { date: new Date('1815/12/10'), event: ['Ada\'s birthday'] },
        { date: new Date('1976/04/01'), event: ['Apple was founded'] },
        { date: new Date('1996/12/13'), event: ['Mars Attacks! releases'] },
        { date: new Date('1996/6/14'), event: ['The Cable Guy releases'] },
        { date: new Date('1996/1/19'), event: ['From Dusk till Dawn releases'] },
        { date: new Date('2053/01/20'), event: ['Spider Man: Too Far Out releases'] },
        { date: new Date('2053/2/14'), event: ['Batman: The Valentine Knight releases'] },
        { date: new Date('2053/6/28'), event: ['The Fam and the Fury releases'] },
        {
            date: new Date('2022/11/29'), event: [
                'event for 2022/11/29 Lorem ipsum liorem ipsum dolor sit amet liorem ipsum dolor sit amet liorem ipsum dolor sit amet',
                'event for 2022/11/29',
                'event for 2022/11/29',
                'event for 2022/11/29',
                'event for 2022/11/29',
                'event for 2022/11/29 Lorem ipsum liorem ipsum dolor sit amet liorem ipsum dolor sit amet liorem ipsum dolor sit amet',
                'event for 2022/11/29',
                'event for 2022/11/29',
                'event for 2022/11/29 Lorem ipsum liorem ipsum dolor sit amet liorem ipsum dolor sit amet liorem ipsum dolor sit amet',
                'event for 2022/11/29',
            ]
        }
    ]

    test('renders the default calendar', () => {
        render(<Calendar />)

        const calendarElement = screen.getByText(monthNames[today.getMonth()])
        expect(calendarElement).toBeInTheDocument()
    })

    test('renders the calendar with only a month passed in', () => {
        render(<Calendar month={1} />)
        const month = screen.getByText(/january/i)
        const year = screen.getByText(currentYear)
        expect(month).toBeInTheDocument()
        expect(year).toBeInTheDocument()
    })

    test('renders the calendar with only a year passed in', () => {
        render(<Calendar year={today.getFullYear()} />)
        const month = screen.getByText(monthNames[today.getMonth()]) // default month set to today's month
        const year = screen.getByText(currentYear)
        expect(month).toBeInTheDocument()
        expect(year).toBeInTheDocument()
    })

    test('renders the calendar with only events passed in', () => {
        render(<Calendar events={events} />)
        const event = screen.getByText('Ada\'s birthday')
        const otherEvents = screen.queryByText('event for', { exact: false })
        expect(otherEvents).toBeNull()
        expect(event).toBeInTheDocument()
    })

    test('renders the calendar with only events and month passed in', () => {
        render(<Calendar events={events} month={4} />)
        const event = screen.getByText('Apple was founded')
        const otherEvents = screen.queryByText('event for', { exact: false })
        const month = screen.getByText('April')
        const year = screen.getByText('1976')
        expect(event).toBeInTheDocument()
        expect(month).toBeInTheDocument()
        expect(year).toBeInTheDocument()
        expect(otherEvents).toBeNull()
    })

    test('renders the calendar with only events and year passed in', () => {
        render(<Calendar events={events} year={1996} />)
        const event = screen.getByText(/from dusk till dawn releases/i)
        const otherEvents = screen.queryByText('event for', { exact: false })
        const other1996Event1 = screen.queryByText(/mars attacks! releases/i)
        const other1996Event2 = screen.queryByText(/the cable guy releases/i)
        const month = screen.getByText('January')
        const year = screen.getByText('1996')
        expect(event).toBeInTheDocument()
        expect(month).toBeInTheDocument()
        expect(year).toBeInTheDocument()
        expect(otherEvents).toBeNull()
        expect(other1996Event1).toBeNull()
        expect(other1996Event2).toBeNull()
    })

    test('renders the calendar with events, year, and month passed in', () => {
        render(<Calendar events={events} year={2053} month={1} />)
        const event = screen.getByText(/spider man: too far out releases/i)
        const other2053event1 = screen.queryByText(/Batman: The Valentine Knight releases/i)
        const other2053event2 = screen.queryByText(/The Fam and the Fury releases/i)
        expect(event).toBeInTheDocument()
        expect(other2053event1).toBeNull()
        expect(other2053event2).toBeNull()
    })

    test('renders the calendar with user input border set to false', () => {
        const styles = { calendar: { border: false } }
        const { container } = render(<Calendar styles={styles} />)
        const element = container.getElementsByClassName('container')
        expect(element[0]).toHaveStyle("border: 'none'")

    })

    test('renders the calendar with user input dates border set to false', () => {
        const styles = { dates: { border: false } }
        const { container } = render(<Calendar styles={styles} />)
        const elements = container.getElementsByClassName('dayContainer')
        for (let i = 0; i < elements.length; i++) {
            expect(elements[i]).toHaveStyle('border-right: none')
            expect(elements[i]).toHaveStyle('border-bottom: none')
        }
    })

    test('renders the calendar with user input header setting of red background and white font', () => {
        const styles = { header: { background: 'red', fontColor: 'white' } }
        const { container } = render(<Calendar styles={styles} />)
        const element = container.getElementsByClassName('calendarHeader')
        expect(element[0]).toHaveStyle('background: red')
        expect(element[0]).toHaveStyle('color: white')
    })

})