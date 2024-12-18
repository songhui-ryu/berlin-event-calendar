import Header from "./components/header";
import Footer from "./components/footer";
import Calendar from "./components/calendar";
import fetchEvents from "./components/events";
import MoreEvents from "./components/more";

export default async function Page() {
    const events = await fetchEvents("en");
    return (
        <main className="flex flex-col w-full">
            <Header />
            <div className="flex-1">
                <Calendar events={events} />
                {/* <MoreEvents events={events} /> */}
            </div>
            <Footer />
        </main>
    );
}
