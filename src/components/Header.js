import Image from "next/image";

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
                <div>
                    <input>
                    
                    </input>
                </div>
            </div>

            {/* Bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default Header;