import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/solid";

function Header() {
    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0" >
                    <Image
                        src="http://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain" // image won't be distorted
                        className="cursor-pointer"
                    />
                </div>

                {/* Search bar */}
                <div className="hidden sm:flex items-center rounded-md h-10 cursor-pointer bg-yellow-400 hover:bg-yellow-500 flex-grow">
                    <input type="text" className="p-2 h-full w-6 flex-grow"/>
                    <SearchIcon className="h-12 p-4" />
                </div>
            </div>

            {/* Bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default Header;