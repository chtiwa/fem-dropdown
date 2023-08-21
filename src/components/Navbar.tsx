interface NavbarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  featuresLinks: any
  companyLinks: string[]
  showFeatures: boolean
  setShowFeatures: (showFeatures: boolean) => void
  showCompany: boolean
  setShowCompany: (showFeatures: boolean) => void
}
const Navbar: React.FC<NavbarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  featuresLinks,
  companyLinks,
  showFeatures,
  setShowFeatures,
  showCompany,
  setShowCompany
}) => {
  return (
    <div className="flex items-center justify-between py-4 px-4">
      <div className="flex gap-x-8 items-center flex-1">
        <img src="/images/logo.svg" alt="" />
        <ul className="hidden md:flex items-center md:gap-x-8 lg:gap-x-12 ">
          <li
            className="relative flex items-center text-md text-slate-600 hover:cursor-pointer "
            onClick={() => setShowFeatures(true)}
          >
            Features
            <img src="/images/icon-arrow-down.svg" alt="" className="ml-2" />
            <ul
              className={`absolute bg-white top-8 -left-24 flex-col gap-y-4 p-4 w-52 shadow-md rounded-xl border z-50 ${
                showFeatures ? "flex" : "hidden"
              }`}
              onMouseLeave={() => setShowFeatures(false)}
            >
              {featuresLinks.map((link, i) => (
                <li
                  key={i}
                  className="flex gap-x-4 hover:cursor-pointer hover:text-black"
                >
                  <img src={link.icon} alt="" className="object-contain " />
                  {link.title}
                </li>
              ))}
            </ul>
          </li>
          <li
            className="relative flex items-center text-md text-slate-600 hover:cursor-pointer"
            onClick={() => setShowCompany(true)}
          >
            Company
            <img src="/images/icon-arrow-down.svg" alt="" className="ml-2" />
            <ul
              className={`absolute bg-white top-8 left-0 flex-col gap-y-4 p-4 w-40 shadow-md rounded-xl border z-50 ${
                showCompany ? "flex" : "hidden"
              }`}
              onMouseLeave={() => setShowCompany(false)}
            >
              {companyLinks.map((link, i) => (
                <li key={i} className="hover:cursor-pointer hover:text-black">
                  {link}
                </li>
              ))}
            </ul>
          </li>
          <li className="text-md text-slate-600 hover:text-black hover:cursor-pointer">
            Careers
          </li>
          <li className="text-md text-slate-600 hover:text-black hover:cursor-pointer">
            About
          </li>
        </ul>
      </div>
      {isSidebarOpen ? (
        <img
          src="/images/icon-close-menu.svg"
          alt=""
          className="hover:cursor-pointer z-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : (
        <img
          src="/images/icon-menu.svg"
          alt=""
          className="hover:cursor-pointer md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}
      <div className="hidden md:flex items-center justify-end flex-initial gap-x-4">
        <button className="px-4 py-2 hover:font-medium">Login</button>
        <button className="bg-white border rounded-full border-solid border-black px-4 py-2 hover:bg-black hover:text-white">
          Register
        </button>
      </div>
    </div>
  )
}

export default Navbar
