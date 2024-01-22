import {FC} from "react";

const Header: FC = () => {
    return <div className="md:-mt-12 h-full">
       <div className="md:h-auto h-full">
            <div className="h-4/6">
                <img className="md:hidden w-screen h-full block" alt="hero-mobile" src="./assets/images/mobile-header-bg.png" />
            </div>
            <img className="md:block hidden h-full" alt="hero-desktop" src="./assets/images/desktop-header-bg.jpg" />
       </div>
    </div>
}

export default Header;
