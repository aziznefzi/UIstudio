import React from 'react'
import style from './404page.module.css'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className={style.Page404}>
        <div className={style.stars}></div>
        <div className={style.content}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/" className={style.homeLink}>
                Back to Home
            </Link>
        </div>
    </div>
  )
}
