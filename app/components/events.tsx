import { promises as fs } from 'fs';
import dayjs from 'dayjs';

interface JsonEvent {
    name: string;
    date?: {
        start: string;
        end: string;
        locale: 'en' | 'de';
        originalString: string;
    };
    description: string;
    href: string;
}

export interface FCEvent {
    id?: string;
    title: string;
    start?: string;
    end?: string; // exclusive
    allDay?: boolean;
    url?: string; // eventClick
    color?: string;
}

const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        title: 'All-day event',
        start: todayStr,
    },
    {
        title: 'Timed event',
        start: todayStr + 'T12:00:00',
    },
    {
        title: 'Timed event',
        start: todayStr + 'T01:00:00',
    },
];

function getEventColor(index: number) {
    const colors = [
        'DeepSkyBlue',
        'Lavender',
        'LemonChiffon',
        'LightCoral',
        'LightCyan',
        'LightGray',
        'LightGreen',
        'LightPink',
        'LightSalmon',
        'LightSeaGreen',
        'LightSkyBlue',
        'LightSteelBlue',
        'Plum',
    ];
    return colors[index];
}

function parseEvent(event: JsonEvent, index: number): FCEvent | unknown {
    try {
        if (!event.date || !event.date?.start || !event.date?.end) {
            // console.log("event without date: ", event)
            return {};
        }
        const startTime = dayjs(event.date.start);
        const endTime = dayjs(event.date.end);
        const duration = endTime.diff(startTime, 'day');

        const parsed = {
            title: event.name,
            start: startTime.toISOString(),
            end: endTime.add(1, 'day').toISOString(), // fullcalendar's end date is exclusive
            allDay: duration > 0 ? true : false, // oneday event work as timed event
            url: event.href,
            color: getEventColor(index % 13),
        };
        return parsed;
    } catch (err) {
        console.log('parseEvent(): ', err);
        return {};
    }
}

export default async function fetchEvents() {
    try {
        const file = await fs.readFile(
            process.cwd() + '/public/events_en.json',
            'utf8'
        );
        const events = JSON.parse(file);
        const parsedEvents = events.map((x: JsonEvent, index: number) =>
            parseEvent(x, index)
        );

        return parsedEvents;
    } catch (err) {
        console.log('fetchEvents(): ', err);
        return INITIAL_EVENTS;
    }
}
