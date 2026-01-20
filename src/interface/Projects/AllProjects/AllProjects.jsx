import React from 'react'
import style from "./AllProjects.module.css"
import { useTranslation } from 'react-i18next'

export default function AllProjects() {
  const { t } = useTranslation()
  
  return (
    <div className={style.AllProjects}>
      <h1>{t('All Projects')}</h1>
      <div className={style.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aperiam, quod, totam modi, at dolore quos dolorem architecto exercitationem est excepturi velit optio. Rerum in provident suscipit veritatis, iusto ea!
        </p>
      </div>
    </div>
  )
}
