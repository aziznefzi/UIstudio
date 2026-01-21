import React from 'react'
import style from "./AllProjects.module.css"
import { useTranslation } from 'react-i18next'
import {TotalProjects} from "../TotalProjects"
import { useTheme} from '@mui/material/styles'
export default function AllProjects() {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <div className={style.AllProjects}>
      <h1>{t('All Projects')}</h1>
      <div className={style.content}>
        {
          TotalProjects.map((project) => (
            <div 
            style={{
              backgroundColor: theme.palette.colors.background.bg3,
            }}
            key={project.id} className={style.project}>
              <h2>{project.NameProject}</h2>
              <img src={project.imageProject} alt={project.NameProject} />
              <p
              style={{
                color: theme.palette.text.primary
              }}
              >{project.SkelsProject}</p>
              <div className={style.Btns}>
                  <a href={project.GitLink} target="_blank" rel="noopener noreferrer">{t('Git Link')}</a>
                  <a href={project.ProjectLink} className={style.Projectiink} target="_blank" rel="noopener noreferrer">{t('Project Link')}</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
