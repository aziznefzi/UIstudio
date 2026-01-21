import './App.css'
{/* components website import */}

{/* inteface project components import*/}
import Header from './interface/header/header'
import Home from './interface/Home/Home'
import About from './interface/About/About'
import Projects from './interface/Projects/Projects'
import Services from './interface/Services/Servises'
import Footer from './interface/Footer/footer'
import AllProjects from "./interface/Projects/AllProjects/AllProjects"
{/* inteface project components import*/}

{/* App project components import*/}
import Page404 from './404PAGES/404page/404page'
{/* App project components import*/}

{/* BrowserRouter */}
  import { Routes, Route } from 'react-router-dom'
{/* BrowserRouter */}

{/* React hocks */}
import { useContext, useMemo, useEffect, useState } from 'react'
{/* React hocks */}

{/* Context Project*/}
import { LanguechButtonContextProvider } from './context/languechButtonContext'
import { getDesignTokens } from './frontend/theme/themeContext'
import { ThemeButonContextProvider, ThemeButonContext } from "./context/themeButonContext"
import { AllertContextProvider } from './context/contextAllert'
{/* Context Project*/}

{/* MUI Function*/}
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
{/* MUI Function*/}

{/* i18next Function*/}
import { useTranslation } from 'react-i18next'; // Import useTranslation
{/* i18next Function*/}

function AppContent() {
  const { WebsiteTheme } = useContext(ThemeButonContext)
  const { i18n } = useTranslation(); // Use i18n to get current language
  
  // Create theme instance based on current WebsiteTheme state
  const theme = useMemo(() => createTheme(getDesignTokens(WebsiteTheme)), [WebsiteTheme])
  {/* state global project */}
  const [navOpenNavMedia, setNavOpenNavMedia] = useState(false);
  {/* state global project */}
  useEffect(() => {
    // Update body styles when theme changes
    document.body.style.backgroundColor = theme.palette.colors.background.bg1
    document.body.style.fontFamily = theme.fonts.English
    document.body.style.color = theme.palette.colors.text.primary
    // Prevent scrolling on both html and body to support all browsers/devices
    const overflowStyle = navOpenNavMedia ? 'hidden' : 'auto';
    document.body.style.overflow = overflowStyle;
    document.documentElement.style.overflow = overflowStyle;

    // Handle Direction (RTL/LTR)
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;

  }, [theme, navOpenNavMedia, i18n.language])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguechButtonContextProvider>
        <AllertContextProvider>
        <Header navOpenNavMedia={navOpenNavMedia}
               setNavOpenNavMedia={setNavOpenNavMedia}/>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Projects />
              <Services />
              <Footer />
            </>
          } />
         <Route path="/projects/AllProjects" element={<AllProjects />} />
         <Route path="*" element={<Page404 />} />
        </Routes>
        </AllertContextProvider>
      </LanguechButtonContextProvider>
    </ThemeProvider>
  )
}

function App() {
  return (
    <ThemeButonContextProvider>
      <AppContent />
    </ThemeButonContextProvider>
  )
}

export default App
