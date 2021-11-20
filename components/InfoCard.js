import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 min-w-[100px] md:h-52 md:min-w-[250px] lg:min-w-[280px] xl:min-w-[300px] flex-shrin-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="text-xl font-semibold">{title}</h4>

                <div className="border-b  w-10 pt-2" />
                <p className="text-sm text-gray-500 flex-grow pt-2">{description}</p>


                <div className="flex justify-between items-end">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralights">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
