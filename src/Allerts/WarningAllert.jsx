import React from 'react'
import style from './AlllertStyle.module.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const WarningAllert = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <Stack ref={ref} className={style.Allerts} spacing={2} {...props}>
      <Alert 
      severity="warning">
      {t('warning')}
      <Link to="">
      {t('More')}
      </Link>
      </Alert>
    </Stack>
  )
})

export default WarningAllert
