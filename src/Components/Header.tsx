import Link from "next/link";
import Image from "next/image";

const Header = () => {
return (
        <header className="fixed top-0 left-0 right-0 py-2 flex items-center justify-between px-3 z-50 bg-white drop-shadow-md">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo-talenta.png"
                        alt="Talenta Logo"
                        width={300}
                        height={400}
                        layout="fixed"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;