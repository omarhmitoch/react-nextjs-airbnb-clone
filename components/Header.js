import Image from "next/image";
import {SearchIcon, GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from "@heroicons/react/solid"
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left section - airbnb logo image*/}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* middle section - Search input*/}
            <div className="flex items-center md:border-2 rounded-full py-2 px-2 md:shadow-sm">
                <input type="text" placeholder="Start your search" className="pl-2 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 
                w-[80%]
                sm:min-w[90%] "
                    autoComplete="off" 
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer ml-2"/>
            </div>
            {/* right section */}
            <div className="flex items-center space-x-4 justify-end text-gray-400">
                <p className="hidden lg:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer " />
                <div className="flex items-center space-x-2 boder-2 border-2 p-1.5 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
            
        </header>
    )
}

export default Header
