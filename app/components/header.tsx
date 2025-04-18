"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import berlinIcon from "../../public/berlin_logo.svg";
import LanguageButton from "./language";

const titleFont = localFont({
    src: "../../public/fonts/Linebeam.ttf",
    variable: "--title-font",
    weight: "500",
});

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="flex flex-col sm:flex-row sm:items-end justify-between p-4 pb-2 bg-transparent">
            {/* Left Side: Title and Description */}
            <div className="flex-initial w-full sm:w-2/3 mb-4 sm:mb-0 text-left">
                <h1 className={`text-6xl font-bold ${titleFont.className}`}>
                    BERLIN EVENTS
                </h1>
                {/* eslint-disable react/no-unescaped-entities */}
                <p className="text-base">What's happening in Berlin?</p>
                <p className="text-base">
                    This calendar helps you to check the official events easily.
                </p>
                <p className="text-base">
                    <i>Click an event to open the official event page!</i>
                </p>
            </div>

            {/* Right Side: modal and button - second flex to have top and bottom*/}
            <div className="flex-1 text-right sm:self-end flex flex-col justify-between">
                {/* Top: language switch*/}
                <div className="flex justify-end pt-2">
                    {/* Nested flex */}
                    <LanguageButton />
                </div>

                {/* Top: modal */}
                <div>
                    <span
                        className="cursor-pointer text-xs underline"
                        onClick={toggleModal}
                    >
                        Sind Sie mit der Berlin-Webseite verbunden?
                    </span>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center rounded text-[#000000] text-left">
                            <div className="p-6 w-2/3 bg-[#FFF4D0] rounded shadow-lg">
                                <h2 className="mb-2 text-lg font-bold">
                                    Belin.de/events kann besser sein!
                                </h2>
                                <p className="text-sm">
                                    {/* - The events shown on the German and English pages are different. */}
                                    - Die Veranstaltungen auf der deutschen und
                                    der englischen Seite sind Unterschiedlich.
                                </p>
                                <p className="text-sm">
                                    {/* - Each event has different time formats: 7-10, 7 - 10, 7 to 10, 7 and 10 ? */}
                                    - Jede Veranstaltung hat unterschiedliche
                                    Zeitformate (z.B. 7-10, 7 - 10, 7 to 10, 7
                                    and 10)
                                </p>
                                <p className="text-sm mt-1">
                                    {/* It would be appreciated if you can fix these small errors. Furthermore, it would be nice to consider opening APIs for the Berlin events. People will make something out of it 😉 */}
                                    Es wäre sehr nett, wenn Sie diese kleinen
                                    Fehler beheben könnten. Außerdem wäre es
                                    schön, wenn Sie in Erwägung ziehen würden,
                                    APIs für die Berliner Veranstaltungen zu
                                    öffnen. Die Leute werden schon was draus
                                    machen 😉.
                                </p>
                                <button
                                    className="mt-4 px-4 py-2 main-button hover:main-button rounded"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Buttom: button - algin to right in big screen*/}
                <div className="flex justify-end pt-2">
                    {/* Nested flex */}
                    <button className="flex place-items-center px-2 py-2 main-button hover:main-button text-sm">
                        <Link href="https://www.berlin.de/en/events/">
                            <span className="inline">Go to &nbsp;</span>
                            <Image
                                className="inline"
                                src={berlinIcon}
                                width={60}
                                alt=""
                            />
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    );
}
