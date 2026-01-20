import React from 'react'
import bg1 from "../../frontend/image/bg1.jpg"
import CheckIcon from '@mui/icons-material/Check';
import styles from './About.module.css'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next';
export default function About() {
  const theme = useTheme()
  const {t, i18n} = useTranslation();
  return (
    <div id='About' className={styles.About}>
       {/* About */}
        <div className={styles.contaner}>
            {/* About contaner */}
              {/* AboutTitle */}
              <div className={styles.AboutTitle}>
                <p className={styles.AboutMe} style={{fontFamily: theme.fonts.Pacifico}}>{t("AboutMe")}</p>
                <p className={styles.developer}>{t("Developer")}</p>
              </div>
              {/* AboutTitle */}
            <div className={styles.Aboutcontent}>
              {/* AboutText */}
              {/*About Me*/}
            <div className={styles.AboutMe}>
             <div className={styles.AboutText}>
                <p style={{
                    color: theme.palette.colors.text.text11}}><span style={{color: theme.palette.colors.text.primary,
                    fontWeight: "bold"
                }}>{t("AboutTextSpan")}</span>{t("AboutTextP")}</p>
              </div>
              {/* AboutText */}
              {/* AboutSkills */}
              <div className={styles.AboutSkills}>
                <div className={styles.skills}>
                  <CheckIcon/>
                  <p><span>{t("Frontend")}</span>{t("SkillsListFrontend")}</p>
                </div>
                 <div className={styles.skills}>
                  <CheckIcon/>
                  <p><span>{t("Backend")}</span>{t("SkillsListBackend")}</p>
                </div>
                <div className={styles.skills}>
                  <CheckIcon/>
                  <p><span>{t("Design")}</span>{t("SkillsListDesign")}</p>
                </div>
                <div className={styles.skills}>
                  <CheckIcon/>
                  <p><span>{t("AndOthers")}</span>{t("SkillsListOthers")}</p>
                </div>
              </div>
              {/* AboutSkills */}
              {/* About CC */}
              <p 
              className={styles.cc}
              style={{
                fontFamily: theme.fonts.Pacifico,
              }}>{t("LetsCreate")}</p>
              {/* About CC */}
              </div>
              {/*About Me*/}
              {/* About Image */}
              <div className={styles.AboutImg}>
                  <img src={bg1} alt="" />
              </div>
              {/* About Image */}
            </div>
           {/* About contaner */}
        </div>
      {/* About */}
    </div>
  )
}
