import { useState } from "react"
import Left from "./components/Left"
import Navbar from "./components/Navbar"
import Right from "./components/Right"
import Sidebar from "./components/Sidebar"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)
  const [showCompany, setShowCompany] = useState(false)
  const featuresLinks = [
    { icon: "/images/icon-todo.svg", title: "Todo List" },
    { icon: "/images/icon-calendar.svg", title: "Calendar" },
    { icon: "/images/icon-reminders.svg", title: "Reminders" },
    { icon: "/images/icon-planning.svg", title: "Planning" }
  ]
  const companyLinks = ["History", "Our Team", "Blog"]
  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        companyLinks={companyLinks}
        featuresLinks={featuresLinks}
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        showCompany={showCompany}
        setShowCompany={setShowCompany}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        companyLinks={companyLinks}
        featuresLinks={featuresLinks}
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        showCompany={showCompany}
        setShowCompany={setShowCompany}
      />
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row gap-12 px-2 md:p-8">
        <Left />
        <Right />
      </div>
    </>
  )
}

export default App
