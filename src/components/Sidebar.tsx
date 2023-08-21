interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  featuresLinks: any
  companyLinks: string[]
  showFeatures: boolean
  setShowFeatures: (showFeatures: boolean) => void
  showCompany: boolean
  setShowCompany: (showFeatures: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
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
    <div
      className={`flex flex-col items-start gap-y-8 text-slate-600 z-10 bg-white shadow-lg drop-shadow-md fixed top-0 right-0 h-[100vh] pt-12 px-8 md:hidden ${
        isSidebarOpen ? "max-[300px]:w-[100%] w-[300px]" : "hidden"
      }`}
    >
      <ul className="flex flex-col items-start gap-y-4 w-[100%] ">
        <li
          className="flex flex-col items-center hover:text-black hover:cursor-pointer w-[100%] "
          onClick={() => setShowFeatures(true)}
        >
          <div className="flex gap-x-1 items-center w-[100%]">
            Features
            <img src="/images/icon-arrow-down.svg" alt="" className="ml-2" />
          </div>
          <ul
            className={`${
              showFeatures ? "flex flex-col py-2 px-4 gap-y-4 " : "hidden"
            }`}
            onMouseLeave={() => setShowFeatures(false)}
          >
            {featuresLinks.map((link, i) => (
              <li key={i} className="flex gap-x-4">
                <img src={link.icon} alt="" className="object-contain" />
                {link.title}
              </li>
            ))}
          </ul>
        </li>
        <li
          className="flex flex-col items-center hover:text-black hover:cursor-pointer w-[100%] "
          onClick={() => setShowCompany(true)}
        >
          <div className="flex gap-x-1 items-center w-[100%] ">
            Company
            <img src="/images/icon-arrow-down.svg" alt="" className="ml-2" />
          </div>
          <ul
            className={`${
              showCompany ? "flex flex-col py-2 px-4 gap-y-4" : "hidden"
            }`}
            onMouseLeave={() => setShowCompany(false)}
          >
            {companyLinks.map((link, i) => (
              <li key={i} className="px-4">
                {link}
              </li>
            ))}
          </ul>
        </li>
        <li
          className="flex items-center hover:text-black hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          Careers
        </li>
        <li
          className="flex items-center hover:text-black hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          About
        </li>
      </ul>
      <div className="flex flex-col">
        <button
          className="bg-white border-slate-600 px-8 py-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          Login
        </button>
        <button
          className="bg-white border rounded-full border-solid border-black px-4 py-2"
          onClick={() => setIsSidebarOpen(false)}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Sidebar
