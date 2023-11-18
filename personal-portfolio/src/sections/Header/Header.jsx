import Link from "./Link"

function Header() {

    return(
        <div className="flex justify-center bg-page_background">
          <div className="bg-header_background flex self-center justify-between w-[90%] px-20 py-7 rounded-b-2xl ">
            <header className="flex w-full justify-center items-center gap-56">
              <Link text="About"></Link>
              <Link text="Experience"></Link>
              <Link text="Projects"></Link>
              <Link text="Contact"></Link>
              <Link></Link>
            </header>
          </div>
        </div>
    );

}

export default Header