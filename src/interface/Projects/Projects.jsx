import React, { useState, useContext, useEffect } from 'react'

{/* css page import */}
import style from './Projects.module.css'
{/* css page import */}

{/* MUI transition import */}
import Fade from '@mui/material/Fade';
{/* MUI transition import */}

{/* MUI Icon import */}
import GitHubIcon from '@mui/icons-material/GitHub';
{/* MUI Icon import */}

{/* open allerts */}
{/* open allerts */}

{/* Languedch Sours import */}
import { useTranslation } from 'react-i18next';
{/* Languedch Sours import */}

{/* theme Sours import */}
import { useTheme } from '@mui/material/styles';
{/* theme Sours import */}

{/* TotalProjects Data */}
import {TotalProjects} from './TotalProjects'
{/* TotalProjects Data */}

{/* Allert Context import */}
import { AllertContext } from '../../context/contextAllert';
{/* Allert Context import */}

{/* allerts import*/}
import  InfoAllert from '../../Allerts/InfoAllert';
import  WarningAllert from '../../Allerts/WarningAllert';
{/* allerts import*/}

export default function Projects() {

  {/* Languedch and Theme Hoks*/}
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  {/* Languedch and Theme Hoks*/}
   
  {/* allerts context*/}
  const {allertType, setAllertType, openAllert, setOpenAllert, setOpenAllertValue} = useContext(AllertContext);
  {/* allerts context*/}
  
  const OpenLinkProject = (url) => {
    if(url) {
      window.location.href = url;
    }
  }

  return (
    <div id='Projects'
    style={{
    borderTop: theme.palette.colors.websiteColors.borderButton,
    borderBottom: theme.palette.colors.websiteColors.borderButton,
    backgroundImage: theme.palette.colors.websiteColors.ProjectsMeBg}}
    className={style.ProjectsMe}>
      <h4 style={{fontFamily: theme.fonts.Pacifico}}>{t('Projects')}</h4>
    {/* Projects Data Handle */}
    <div 
    
    className={style.projects}>
       {TotalProjects.slice(0, 3).map((project) => (
         <div
           onClick={() => {
            if (project.ProjectLink) {
              setAllertType("projectsAllet");
              setOpenAllert(true);
              setOpenAllertValue("underDevelopment")
              setTimeout(() => {
                window.location.href = project.ProjectLink;
              }, 2000);
            } else {
              setAllertType("projectsAllet");
              setOpenAllert(true);
              setOpenAllertValue("project")
            }
           }}
            style={{backgroundColor: theme.palette.colors.background.bg3}}
            className={style.Project} key={project.id}>
           <img src={project.imageProject} alt={project.NameProject} />
           <h5>{t(project.NameProject)}</h5>
           <p>{t(project.SkelsProject)}</p>
           <button
           onClick={(e) => {
            e.stopPropagation();
            if (project.GitLink) {
              setAllertType("codeProjectsAllet");
              setOpenAllert(true);
              setOpenAllertValue("underDevelopment")
              setTimeout(() => {
                OpenLinkProject(project.GitLink);
              }, 3000);
            } else {
              setAllertType("codeProjectsAllet");
              setOpenAllert(true);
              setOpenAllertValue("code")
            }
           }}
           style={{
            borderColor: theme.palette.colors.websiteColors.BorderColer1,
           }}
           >{t("Veo Code")}<GitHubIcon/></button>
         </div>
       ))}
    {/* Projects Data Handle */}
    </div>
    {/* allerts */}
    <Fade in={allertType === "projectsAllet" ? openAllert: allertType === "codeProjectsAllet" ? openAllert : false}>
      <InfoAllert />
    </Fade>
    {/* allerts */}
    </div>
  )
}
