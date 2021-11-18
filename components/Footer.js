function Footer() {
    return (
        <footer className=" py-10 bg-gray-100">
            <div className="w-[85%] m-auto grid grid-cols-2  md:grid-cols-4 lg:justify-items-center">
            <div className="space-y-4 text-xs text-gray-800 mb-[50px] lg:mb-0">
                <h5 className="font-bold uppercase">about</h5>
                <p className="hover:underline cursor-pointer">New Airbnb works</p>
                <p className="hover:underline cursor-pointer">Newsroom</p>
                <p className="hover:underline cursor-pointer">Investors</p>
                <p className="hover:underline cursor-pointer">Airbnb Plus</p>
                <p className="hover:underline cursor-pointer">Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800 mb-[50px] lg:mb-0">
                <h5 className="font-bold uppercase">Community</h5>
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p className="hover:underline cursor-pointer">This is not a real website</p>
                <p className="hover:underline cursor-pointer">Airbnb Clone </p>
                <p className="hover:underline cursor-pointer">Airbnb Next Js</p>
                <p className="hover:underline cursor-pointer">React</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">Host</h5>
                <p className="hover:underline cursor-pointer">New Airbnb works</p>
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p className="hover:underline cursor-pointer">This is not a real website</p>
                <p className="hover:underline cursor-pointer">Airbnb Clone </p>
                <p className="hover:underline cursor-pointer">Airbnb Next Js</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">support</h5>
                <p className="hover:underline cursor-pointer">Newsroom</p>
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p className="hover:underline cursor-pointer">This is not a real website</p>
                <p className="hover:underline cursor-pointer">Airbnb Clone </p>
                <p className="hover:underline cursor-pointer">Airbnb Next Js</p>
            </div>
           </div>
        </footer>
    )
}

export default Footer;
