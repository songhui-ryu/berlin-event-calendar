import Header from './components/header';
import Footer from './components/footer';
import Calendar from './components/calendar';
import fetchEvents from './components/events';

export default async function Page() {
    return (
        <main className="flex flex-col w-full">
            <Header />
            <div className="flex-1">
                <Calendar events={await fetchEvents('en')} />
            </div>
            <Footer />
        </main>
    );
}
