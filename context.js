import React,{useState,useEffect, useContext} from "react";
import sublink from './data'


const AppContent = React.createContext();
  const AppProvider = ({children}) => {
const [isSidebarOpen,setIsSidebarOpen] = useState(true)
const [isSubmenuOpen,setIsSubmenuOpen] = useState(true)


const openSidebar = () => {
    setIsSidebarOpen(true)
}
const closeSidebar = () => {
    setIsSidebarOpen(false)
}
const openSubmenu = () => {
    setIsSubmenuOpen(true)
}
const closeSubmenu = () => {
    setIsSubmenuOpen(false)
}

    return <AppContent.Provider value={{
        isSubmenuOpen, isSidebarOpen,openSidebar,openSubmenu,closeSidebar,closeSubmenu
    }}>
        {children}
    </AppContent.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContent)
}
export { AppContent, AppProvider };