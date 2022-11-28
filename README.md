# react-event-viewer-calendar

Display your events in this simple, easy-to-use calendar events-viewer for React.

## Installation

* Install react-event-viewer-calendar with npm

```cli
  npm install react-event-viewer-calendar
```
## Usage

```js
import Calendar from 'react-event-viewer-calendar'

const events = [
    {date: new Date('2023/04/04'), events: ['Bob\'s Birthday', 'Pay bills'] },
    {date: new Date('2022/02/14'), events: ['Valentine\'s Day'] },
    {date: new Date('2022/12/25'), events: ['Christmas Day'] },
    {date: new Date('2050/7/21'), events: ['Concert'] },
]

// Will display the month for the earliest event
<Calendar events={events} />

// <Calendar month={4} year={2030} /> Displays the desired month/year 
// <Calendar clickHandler={customHandler} /> Allows developers to extract the events and date for the clicked day tile. 

```


## License

[MIT](https://raw.githubusercontent.com/jpagtama/react-event-viewer-calendar/master/license)