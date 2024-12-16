"use client";

import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import localFont from "next/font/local";
import { FCEvent } from "./events";

const titleFont = localFont({
    src: "../../public/fonts/Linebeam.ttf",
    variable: "--title-font",
    weight: "500",
});

export default function MoreEvents({ events }: { events: FCEvent[] }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const eventsWithoutDate = events.filter(
        (e: FCEvent) => e.start === undefined
    );

    return (
        <div className="justify-between p-4">
            {/* <div className="relative"> */}
            {/* Check More Section */}
            <div className="flex items-center space-x-2">
                <span className={`text-3xl font-bold ${titleFont.className}`}>
                    Check out more!
                </span>
                <button onClick={openModal} className="sub-button">
                    <FaQuestionCircle size={15} />
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-xl font-bold mb-4">
                            What are these?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            These are the events without date information on the
                            original website.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="px-2 py-2 main-button hover:main-button"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Event List Section */}
            <div className="mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {eventsWithoutDate.map((event, index) => (
                        <div key={index} className="p-4 rounded-lg card">
                            <a
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-title hover:underline"
                            >
                                <h4 className="text-md font-semibold mb-2">
                                    {event.title}
                                </h4>
                            </a>
                            <p className="text-sm">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
