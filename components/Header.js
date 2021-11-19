import Image from "next/image";
import { useState } from "react";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid";
{/* date-picker main files */ }
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({ inputPlaceholder }) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const router = useRouter();
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchInput("");
    }
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests
            }
        })
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left section - airbnb logo image*/}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* middle section - Search input*/}
            <div className="flex items-center md:border-2 rounded-full py-2 px-2 md:shadow-sm">

                <input
                    type="text"
                    placeholder={inputPlaceholder || "Start your search"}
                    className="pl-2 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 
                w-[80%]
                sm:min-w[90%] "
                    autoComplete="off"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer ml-2" />
            </div>
            {/* right section */}
            <div className="flex items-center space-x-4 justify-end text-gray-400">
                <p className="hidden lg:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer " />
                <div className="flex items-center space-x-2 boder-2 border-2 p-1.5 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto pt-5">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        onChange={handleSelect}
                        rangeColors={["#fd5b61"]}
                    />
                    <div className="flex items-center border-b mb-4 px-2 pb-2">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input type="number" className="w-12 pl-2 text-lg outline-none text-red-400"
                            value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}
                            min="1" max="20"
                        />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-500 hover:text-gray-700 transition duration-150">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400 hover:text-red-500 transition duration-150">Search</button>
                    </div>
                </div>
            )}

        </header>
    );
}

export default Header;
