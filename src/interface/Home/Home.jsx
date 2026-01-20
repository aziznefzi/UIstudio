{/* React import */}
import React, { useEffect, useRef } from 'react'
{/* React import */}

{/* style import*/}
import style from './Home.module.css'
{/* style import*/}

{/* images import */}
import TitleDark from "../../frontend/image/TitleDark.png"
import TitleLight from "../../frontend/image/TitleLight.png"
{/* images import */}

{/* language import*/}
import { useTranslation } from 'react-i18next'
{/* language import*/}

{/* icons import */}
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
{/* icons import */}

{/* staye backround animation*/}
// Simplex Noise implementation to avoid dependency issues if noisejs doesn't export nicely
// This is a common compact implementation of Simplex Noise
const SimplexNoise = (function() {
  const grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
  const p = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  const perm = new Array(512);
  const gradP = new Array(512);

  function seed(s) {
    if (s > 0 && s < 1) s *= 65536;
    s = Math.floor(s);
    if (s < 256) s |= s << 8;
    for (let i = 0; i < 256; i++) {
      let v = (i & 1) ? p[i] ^ (s & 255) : p[i] ^ ((s >> 8) & 255);
      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  }

  function simplex3(xin, yin, zin) {
    let n0, n1, n2, n3;
    const F3 = 1.0 / 3.0;
    let s = (xin + yin + zin) * F3;
    let i = Math.floor(xin + s);
    let j = Math.floor(yin + s);
    let k = Math.floor(zin + s);
    const G3 = 1.0 / 6.0;
    let t = (i + j + k) * G3;
    let x0 = xin - i + t;
    let y0 = yin - j + t;
    let z0 = zin - k + t;
    let i1, j1, k1;
    let i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if (x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if (y0 < z0) { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if (x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    let x1 = x0 - i1 + G3;
    let y1 = y0 - j1 + G3;
    let z1 = z0 - k1 + G3;
    let x2 = x0 - i2 + 2.0 * G3;
    let y2 = y0 - j2 + 2.0 * G3;
    let z2 = z0 - k2 + 2.0 * G3;
    let x3 = x0 - 3.0 * G3;
    let y3 = y0 - 3.0 * G3;
    let z3 = z0 - 3.0 * G3;
    let ii = i & 255;
    let jj = j & 255;
    let kk = k & 255;
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) n0 = 0.0;
    else {
      t0 *= t0;
      n0 = t0 * t0 * (gradP[ii + perm[jj + perm[kk]]][0] * x0 + gradP[ii + perm[jj + perm[kk]]][1] * y0 + gradP[ii + perm[jj + perm[kk]]][2] * z0);
    }
    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) n1 = 0.0;
    else {
      t1 *= t1;
      n1 = t1 * t1 * (gradP[ii + i1 + perm[jj + j1 + perm[kk + k1]]][0] * x1 + gradP[ii + i1 + perm[jj + j1 + perm[kk + k1]]][1] * y1 + gradP[ii + i1 + perm[jj + j1 + perm[kk + k1]]][2] * z1);
    }
    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) n2 = 0.0;
    else {
      t2 *= t2;
      n2 = t2 * t2 * (gradP[ii + i2 + perm[jj + j2 + perm[kk + k2]]][0] * x2 + gradP[ii + i2 + perm[jj + j2 + perm[kk + k2]]][1] * y2 + gradP[ii + i2 + perm[jj + j2 + perm[kk + k2]]][2] * z2);
    }
    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) n3 = 0.0;
    else {
      t3 *= t3;
      n3 = t3 * t3 * (gradP[ii + 1 + perm[jj + 1 + perm[kk + 1]]][0] * x3 + gradP[ii + 1 + perm[jj + 1 + perm[kk + 1]]][1] * y3 + gradP[ii + 1 + perm[jj + 1 + perm[kk + 1]]][2] * z3);
    }
    return 32.0 * (n0 + n1 + n2 + n3);
  }

  return { seed, simplex3 };
})();
{/* staye backround animation*/}


import { useTheme } from '@mui/material/styles'

export default function Home() {
  const { t } = useTranslation();
  const theme = useTheme();
  const canvasRef = useRef(null);

  {/*Load backround animation*/}
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let field;
    let w, h;
    let size = 20;
    let columns;
    let rows;
    let zoom;

    const initField = () => {
      field = new Array(columns);
      for (let x = 0; x < columns; x++) {
        field[x] = new Array(rows);
        for (let y = 0; y < rows; y++) {
          field[x][y] = 0;
        }
      }
    };

    const calculateField = (now) => {
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle = SimplexNoise.simplex3(x / zoom, y / zoom, now / 1500) * Math.PI * 2;
          field[x][y] = angle;
        }
      }
    };

    const reset = () => {
      zoom = Math.random() * 90 + 20;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      
      // Set stroke color based on theme mode
      if (theme.palette.mode === 'light') {
        ctx.strokeStyle = "rgba(132, 10, 190, 0.5)"; // Purple from CV button
      } else {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"; // White for dark mode
      }
      
      ctx.lineWidth = 1;
      SimplexNoise.seed(Math.random());
      columns = Math.floor(w / size) + 2;
      rows = Math.floor(h / size) + 2;
      initField();
    };

    const drawField = () => {
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle = field[x][y];
          ctx.beginPath();
          let x1 = x * size;
          let y1 = y * size;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x1 + Math.cos(angle) * size * 1.5, y1 + Math.sin(angle) * size * 1.5);
          ctx.stroke();
        }
      }
    };

    const clear = () => {
      // Set background color based on theme mode
      ctx.fillStyle = theme.palette.mode === 'light' ? "#ffffff" : "black";
      ctx.fillRect(0, 0, w, h);
    };

    const draw = (now) => {
      calculateField(now);
      clear();
      drawField();
      animationFrameId = requestAnimationFrame(draw);
    };

    reset();
    window.addEventListener('resize', reset);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', reset);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme.palette.mode]); // Re-run effect when theme mode changes
  {/*Load backround animation*/}

  {/* Home JSX */}
  return (
    <div id='Home' className={style.aboutContainer}>
      {/*website background */}
      <canvas ref={canvasRef} 
      className={style.canvas}>
      </canvas>
      {/*website background */}
      
      {/*website container */}
      <div className={style.contaner}>
        {/*website  title */}
        <div className={style.title}>
          <img src={theme.palette.mode === 'dark'
           ? TitleDark : TitleLight} alt="" />
          <h4 style={{backgroundImage: theme.palette.colors.websiteColors.welcomColor}}>{t('Welcome')}</h4>
        </div>
        {/*website  title */}

        {/*website content */}
       <div className={style.content}>
        {/*website tagline*/}
        <h2 className={style.tagline}>{t('Tagline')}</h2>
        {/*website tagline*/}

        {/*button to projects*/}
        <button
        onClick={() => {
          const element = document.getElementById('Projects');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        style={{
          border: theme.palette.colors.websiteColors.borderButton,
          boxShadow: theme.palette.colors.websiteColors.shadowButton,
          cursor: 'pointer'
        }}
        >{t('Projects')}
        </button>
        {/*button to projects*/}

        {/* soshen media icon*/}
         <div className={style.IconList}>
          <a href="https://www.facebook.com/el.orka.aziz"><i id='facebook' className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/_aziz_nefzi_?igsh=aHlvN3dsNng5aDlw"><i id='instagram' className="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.tiktok.com/@aziznefzi"><i id='tiktok' className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.linkedin.com/in/nefzi-aziz-3b223537a/"><i id='linkedin' className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/aziznefzi"><i id='github' className="fa-brands fa-github"></i></a>
         </div>
        {/* soshen media icon*/}
      </div>
      {/*website content */}
      </div>
      {/*website container */}
    </div>
  )
  {/* Home JSX */}
}
