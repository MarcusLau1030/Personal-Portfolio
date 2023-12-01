import Link from "../../components/Link"
import images from "../../images"

function Header() {

    return(
        <div className="flex justify-center bg-page_background">
          <div className="z-50 fixed bg-header_background flex justify-between w-[90%] px-20 py-7 rounded-b-2xl">
            <header className="flex w-full justify-center items-center gap-4 md:gap-32 lg:gap-72 2xl:gap-80">
              <Link text="About"></Link>
              <Link text="Experience"></Link>
              <Link text="Projects"></Link>
              <div className="flex justify-between w-20 h-5">
                <a href="https://github.com/BabyDinos" className="w-10 h-5">
                  <img src={images["github"]}/> 
                </a>
                <a href="https://www.linkedin.com/in/marcus-lau-2a904918b/" className="w-10 h-5">
                  <img src={images["linkedin"]}/> 
                </a>
              </div>
            </header>
          </div>
        </div>
    );

}

export default Header