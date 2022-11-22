# eventscalendar

Display your events in this simple, easy-to-use calendar events-viewer for React.

## Installation

* Install eventscalendar with npm

```cli
  npm install eventscalendar
```
## Usage

```js
import Calendar from 'eventscalendar'

const events = [
    {date: new Date('2023/04/04'), events: ['Bob\'s Birthday', 'Pay bills'] },
    {date: new Date('2022/02/14'), events: ['Valentine\'s Day'] },
    {date: new Date('2022/12/25'), events: ['Christmas Day'] },
    {date: new Date('2050/7/21'), events: ['Concert'] },
]

<Calendar events={events} />

// Will display the month for the earliest event

```


## License

MIT