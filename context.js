import React,{useState,useEffect, useContext} from "react";
import sublinks from "./data";
import sublink from './data'


const AppContent = React.createContext();
  const AppProvider = ({children}) => {
const [isSidebarOpen,setIsSidebarOpen] = useState(false)
const [isSubmenuOpen,setIsSubmenuOpen] = useState(false)
const [location,setLocation] = useState({})
const [page ,setPage] = useState({page:"",links:[]})


const openSidebar = () => {
    setIsSidebarOpen(true)
}
const closeSidebar = () => {
    setIsSidebarOpen(false)
}
const openSubmenu = (text,coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
}
const closeSubmenu = () => {
    setIsSubmenuOpen(false)
}

    return <AppContent.Provider value={{
        isSubmenuOpen, 
        isSidebarOpen,
        openSidebar
        ,openSubmenu
        ,closeSidebar,
        closeSubmenu,
        location,page
    }}>
        {children}
    </AppContent.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContent)
}
export { AppContent, AppProvider };