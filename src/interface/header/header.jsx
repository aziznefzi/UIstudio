import React, { useContext, useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';

{/* transtion material import */}
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
{/* transtion material import */}

import CV from "../../downloads/AZIZ_NEFZI_CV.PDF.pdf"

{/* icons material import */}
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
{/* icons material import */}

{/* i18n import */}
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
{/* i18n import */}

{/* context import */}
import { languechButtonContext } from "../../context/languechButtonContext"
import { ThemeButonContext } from "../../context/themeButonContext"
{/* context import */}

{/* mui import */}
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './header.module.css'
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import WarningAllert from '../../Allerts/WarningAllert';
{/* mui import */}

export default function header({navOpenNavMedia, setNavOpenNavMedia}) {
  const { t, i18n } = useTranslation();
  const theme = useTheme()
  
  {/* Hader States */}
   const [openAlert, setOpenAlert] = useState(false);
  {/* Hader States */}

  {/* constext stats */}
  const { languech, setLanguech } = useContext(languechButtonContext)
  const { WebsiteTheme, setWebsiteTheme } = useContext(ThemeButonContext)
  {/* constext stats */}

  {/* handle language change */}
  const handleLanguageChange = (e) => {
    const lolanguage = e.target.value;
    setLanguech(lolanguage);
    i18n.changeLanguage(lolanguage);
    localStorage.setItem('languech', lolanguage);
  };
  {/* handle language change */}
  
  {/* useState component */}
  {/* useState component */}

  {/* Sync i18n with context on mount/change */}
  useEffect(() => {
    if (languech) {
      i18n.changeLanguage(languech);
    }
  }, [languech, i18n]);
  
  {/* Auto-close alert */}
  useEffect(() => {
    if (openAlert) {
      const timer = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [openAlert]);

  {/* handle theme change */}
  const toggleTheme = () => {
    const newTheme = WebsiteTheme === 'dark' ? 'light' : 'dark'
    setWebsiteTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }
  {/* handle theme change */}
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, link) => {
    if (link === '#Contests') {
      e.preventDefault();
      setOpenAlert(true);
      return;
    }

    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + link);
      setNavOpenNavMedia(false);
    }
    // If we are on '/', standard href="#link" works with scroll-behavior: smooth
  };

  const NavValue = [
    { id: 1, icon: <HomeIcon/>, name: 'Home', link: '#Home' },
    { id: 2, icon: <PersonIcon/>, name: 'About', link: '#About' },
    { id: 4, icon: <FolderSpecialIcon/>, name: 'Projects', link: '#Projects' },
    { id: 5, icon: <DesignServicesIcon/>, name: 'Services', link: '#Services' },
    { id: 6, icon: <InfoIcon/>, name: 'Footer', link: '#Footer' },
    { id: 7, icon: <EmojiEventsIcon/>, name: 'Contests', link: '#Contests' },
  ]
  {/* nav value */}
  return (
    <>
    {/* SVG Gradient Definition */}
    <svg width={0} height={0} style={{ position: 'absolute' }}>
      <defs>
        <radialGradient id="iconGradient" cx="10%" cy="20%" r="100%" fx="10%" fy="20%">
          <stop offset="0%" stopColor="rgba(132,10,190,1)" />
          <stop offset="100%" stopColor="rgba(163,0,81,1)" />
        </radialGradient>
      </defs>
    </svg>

    {/* navBar media max width 825px*/}
    <div
      className={style.header}
      style={{
        background: theme.palette.colors.websiteColors.headerBg
      }}
    >
    {navOpenNavMedia === true ? (
      <i 
      onClick={() => setNavOpenNavMedia(false)}
      className={`fa-solid fa-x ${style.mobileMenuIcon}`}></i>
    ):(
      <i 
      onClick={() => setNavOpenNavMedia(true)}
      className={`fa-solid fa-list ${style.mobileMenuIcon}`}></i>
    )}
      <ul className={style.nav}>
        {NavValue.map((item) => (
          <li key={item.id}>
            <a href={item.link} onClick={(e) => handleNavClick(e, item.link)}>{t(item.name)}</a>
          </li>
        ))}
      </ul>
      <div className={style.buttonTeam}>
        <FormControl size="small" className={style.languageFormControl}>
          <InputLabel id="language-select-label">{t('Lang')}</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={languech}
            label="Lang"
            onChange={handleLanguageChange}
            className={style.selectLanguage}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: theme.palette.colors.background.bg2,
                  color: theme.palette.colors.text.primary,
                  '& .MuiMenuItem-root': {
                    fontSize: '14px',
                    '&:hover': {
                      bgcolor: theme.palette.colors.background.bg3,
                    },
                    '&.Mui-selected': {
                      bgcolor: theme.palette.colors.background.bg4 + ' !important',
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value={"en"}>{t('English')}</MenuItem>
            <MenuItem value={"ar"}>{t('Arabec')}</MenuItem>
          </Select>
        </FormControl>
        <div className={style.TeamButton} onClick={toggleTheme}>
          {WebsiteTheme === 'dark' ? <LightModeIcon /> : <NightlightRoundIcon />}
        </div>     
        <CvButton/>
        <Fade in={openAlert}>
        <WarningAllert/>
        </Fade>
      </div>
    </div>
    {/* navBar media max width 825px*/}

    {/* nav media min width 825px*/}
    <Slide direction="down" in={navOpenNavMedia}>
    <div 
    style={{
      background: theme.palette.colors.websiteColors.headerBg,
      color: theme.palette.colors.text.primary,
    }}
    className={style.navMedia}>
    <ul className={style.nav}>
        {NavValue.map((item) => (
          <li key={item.id} onClick={(e) => {
            handleNavClick(e, item.link);
            if (location.pathname === '/') {
              setNavOpenNavMedia(false);
              const element = document.querySelector(item.link);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}>
            <a href={item.link} onClick={(e) => e.preventDefault()}>{t(item.name)}</a>
            {React.cloneElement(item.icon, { style: { fill: "url(#iconGradient)" } })}
          </li>
        ))}
      </ul>
      <CvButton/>
      <Fade in={openAlert}>
      <WarningAllert/>
      </Fade>
    </div>
    </Slide>
    {/* nav media max width 825px*/}
    </>
  )
}


function CvButton(){
    const { t } = useTranslation();
  return(
    <a href={CV}
    download
     target="_blank"
      className={style.CvButton}>
      <span>{t('Download CV')}</span>
      <DownloadIcon fontSize="small" />
    </a>
  )
}