import React from 'react'
import { useTheme } from '@mui/material/styles'
{/* style css*/}
import style from './footer.module.css'
{/* style css*/}

{/* Mui Icon Syle */}
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
{/* Mui Icon Syle */}

{/* i18next Language*/}
import { useTranslation } from 'react-i18next';
{/* i18next Language*/}
export default function Footer() {
    const {t, i18n} = useTranslation();
    const theme = useTheme()
  return (
    <div id='Footer' className={style.footer}>
        <h4 style={{fontFamily: theme.fonts.Pacifico}}>{t("Footer")}</h4>
        <p>{t("alertFooterSection")}</p>
        <hr />
        <div className={style.footerContent}>
          <div className={style.iconMedias}>
            <LinkedInIcon />
            <GitHubIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
          </div>
            <p className={style.email}>AzizNefzi@UiStudio.com</p>
        </div>
    </div>
  )
}