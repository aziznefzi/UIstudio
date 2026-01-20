import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import style from './AlllertStyle.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const ErrerAllert = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <Stack ref={ref} className={style.Allerts} spacing={2} {...props}>
      <Alert severity="error" >
      This is an error Alert. 
      <Link to="">
      {t('More')}
      </Link>
      </Alert>
    </Stack>
  )
})

export default ErrerAllert
