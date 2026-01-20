import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import style from './AlllertStyle.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AllertContext } from '../context/contextAllert';
const InfoAllert = React.forwardRef(({ ...props }, ref) => {
  const { openAllertValue, allertType } = useContext(AllertContext);
  const { t } = useTranslation();
  return (
    <Stack ref={ref} className={style.Allerts} spacing={2} {...props}>
      <Alert severity={openAllertValue === "project" || openAllertValue === "underDevelopment" ? "info" : "warning"}>
        {openAllertValue === "project" ? t('projectInfo') : 
         openAllertValue === "underDevelopment" ? t('underDevelopment') : 
         t('codeInfo')}
        <Link to="">{t('More')}</Link>
       </Alert>
    </Stack>
  )
})

export default InfoAllert
