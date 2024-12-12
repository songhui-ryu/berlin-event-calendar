"use client";

import { useEffect } from "react";
import { DateSelectArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FCEvent } from "./events";

export default function Calendar({ events }: { events: FCEvent }) {
    useEffect(() => {
        // Find the span element with the specified classes
        const spanElement = document.querySelector(
            "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
        );

        if (spanElement) {
            // Update its text content
            spanElement.textContent = "Ongoing event";
        }
    }, []);

    function handleDateSelect(selectInfo: DateSelectArg) {
        const calendarApi = selectInfo.view.calendar;
        // clear date selection
        calendarApi.unselect();
        // selectInfo.start will be interpreted as ISO
        calendarApi.zoomTo(new Date(selectInfo.startStr), "timeGridDay");
    }

    function renderEventContent(eventInfo: EventContentArg) {
        return (
            <>
                <b>{eventInfo.event._def.allDay ? "" : "🟡"}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    }

    return (
        <div className="event-calendar p-4">
            <div className="event-calendar-main">
                <FullCalendar
                    /* appearance */
                    height="auto"
                    // aspectRatio={1.5}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,dayGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    dayMaxEvents={false}
                    weekends={true}
                    expandRows={true}
                    slotEventOverlap={false}
                    /* locale */
                    timeZone="local"
                    locale="de"
                    /* plugins */
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    /* actions */
                    selectable={true}
                    select={handleDateSelect}
                    /* events */
                    events={events}
                    eventContent={renderEventContent} // custom render function
                    // eventClick={function(){}}

                    /* called after events are initialized/added/changed/removed 
                    eventsSet={function(){}} */

                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                />
            </div>
        </div>
    );
}
