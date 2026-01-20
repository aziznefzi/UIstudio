import React, { useState, useEffect, useContext } from 'react'
import style from './Services.module.css'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CorsesImg from "../../frontend/image/CorsesImg.jpg"
import VedioEditengImg from "../../frontend/image/VedioEditengImg.jpg"
import DesinerImg from "../../frontend/image/DesinerImg.jpg"
import WebDevalopmentImg from "../../frontend/image/WebDevalopmentImg.jpg"
import UIStudioScoolImg from "../../frontend/image/UIStudioScoolImg.jpg"
import WarningAllert from '../../Allerts/WarningAllert';
import Fade from '@mui/material/Fade';

import { AllertContext } from '../../context/contextAllert';

const ServiceCard = ({ setAllertType, setOpenAllert, item, theme, t, isExpanded, onToggle }) => {
  return (
    <div 
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      style={{
        backgroundImage: theme.palette.colors.websiteColors.ProjectsMeBg,
        cursor: 'pointer'
      }}
      className={style.ServisesItem}
    >
      <img src={item.ImageSErvise} alt="" />
      <h5>{t(item.NameService)}</h5>
      <p className={isExpanded ? style.expandedText : style.truncatedText}>
        {t(item.Description)}
      </p>
      <button onClick={(e) => {
        e.stopPropagation();
        setAllertType("servicesAlert");
        setOpenAllert(true); 
        }}>{t("Explore")}<ArrowForwardIosIcon/></button>
    </div>
  )
}

export default function Servises() {
  const theme = useTheme()
  const {t, i18n} = useTranslation();
  
  const {setAllertType, openAllert, setOpenAllert, allertType} = useContext(AllertContext);

  const [expandedId, setExpandedId] = useState(null);
  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };
  
  useEffect(() => {
    const handleClickOutside = () => {
      setExpandedId(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const ServisesValue = [
    {id: 1, NameService: "Corses", ImageSErvise: CorsesImg, Description: "CorsesDescription" , Link: "/corses"},
    {id: 2, NameService: "Web Development", ImageSErvise: WebDevalopmentImg, Description: "WebDevelopmentDescription" , Link: "/webdevelopment"},
    {id: 3, NameService: "UI Studio Scool", ImageSErvise: UIStudioScoolImg, Description: "UIStudioScoolDescription" , Link: "/uistudioscool"},
    {id: 4, NameService: "Design", ImageSErvise: DesinerImg, Description: "DesignDescription" , Link: "/design"},
    {id: 5, NameService: "Editer Video", ImageSErvise: VedioEditengImg, Description: "EditerVideoDescription" , Link: "/EditerVideo"}
  ]
  return (
    <>
    {/* services */}
    <div id='Services' 
    style={{backgroundColor: theme.palette.colors.background.bg3}}
    className={style.Services}>
      <h4 style={{fontFamily: theme.fonts.Pacifico}}>{t("Services")}</h4>
      <p>{t("alert")}<span style={{fontFamily: theme.fonts.Pacifico}}>UI Studio</span></p>
      <div className={style.ServisesContent}>
        {ServisesValue.map((item) => (
          <ServiceCard
            setAllertType={setAllertType}
            setOpenAllert={setOpenAllert}
            key={item.id} 
            item={item} 
            theme={theme} 
            t={t} 
            isExpanded={expandedId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
    {/* allerts */}
    <Fade in={allertType === "servicesAlert" ? openAllert : false}>
      <WarningAllert/>
    </Fade>
    {/* allerts */}
    {/* services */}    
    </>
  )
}
