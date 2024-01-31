import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (    
        <div className="flex items-center">
            <Link href="/">
                <Image
                    src="/logo-talenta.png"
                    alt="Talenta Logo"
                    width={300}
                    height={400}
                />
            </Link>
        </div>
    );
};

export default Header;