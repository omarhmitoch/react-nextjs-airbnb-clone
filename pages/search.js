import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
const { default: Header } = require("../components/Header");
const { default: Footer } = require("../components/Footer");

function Search({ searchResults }) {
    const generateKey = (elem) => {
        return `${elem}_${new Date().getTime()}`
    }
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const dateRange = `${formatedStartDate} - ${formatedEndDate}`
    return (
        <div>
            <Header inputPlaceholder={`${location} | ${dateRange} | ${numberOfGuests}`} />
            <main className="flex">

                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {dateRange} - {numberOfGuests} {numberOfGuests == 1 ? "guest" : "guests"}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-4">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 gap-x-3 text-gray-800 whitespace-nowrap">
                        {/*"button-filter" custom className using tailwind custom reusable clasename*/}
                        <p className="button-filter">Cancellation Flexibility</p>
                        <p className="button-filter">Type of Place</p>
                        <p className="button-filter">Price</p>
                        <p className="button-filter">Rooms and Beds</p>
                        <p className="button-filter">More filters</p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard img={img} location={location} title={title} description={description} star={star} price={price} total={total} key={generateKey(title)} />
                        ))}
                    </div>
                </section>

                <section className="hidden lg:inline-flex min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://jsonkeeper.com/b/BYLN')
        .then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}
