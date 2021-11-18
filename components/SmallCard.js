import Image from 'next/image';
function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center m-2 space-x-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105
        transition transform duration-200 ease-out">
            {/* left | image */}
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    className="relative"

                />
            </div>
             {/* left | location desc */}
            <div>
                <h2 className="font-semibold">{location}</h2>
                <h2 className="text-gray-500">{distance}</h2>
            </div>
        </div>
    )
}

export default SmallCard
