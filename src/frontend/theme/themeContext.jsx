import { createTheme } from '@mui/material/styles'

export const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: ['Englesh', 'Arabe', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Englesh';
          src: url('../Fonts/Poppins/Poppins-Regular.ttf');
        }
        @font-face {
          font-family: 'Arabe';
          src: url('../Fonts/Readex_Pro/ReadexPro-VariableFont_HEXP,wght.ttf');
        }
        @font-face {
          font-family: 'Pacifico';
          src: url('../Fonts/Pacifico/Pacifico-Regular.ttf');
        }
      `,
    },
  },
  fonts: {
    English: 'Englesh',
    Arabic: 'Arabe',
    Pacifico: "Pacifico",
  },
  palette: {
    primary: {
      main: '#7b1fa2',
    },
    mode,
    colors: mode === 'dark' ? {
      background: {
        primary: '#000',
        secondary: '#fff',
        bg1: '#111',
        bg2: '#222',
        bg3: '#333',
        bg4: '#444',
        bg5: '#555',
        bg6: '#666',
        bg7: '#777',
        bg8: '#888',
        bg9: '#999',
        bg10: '#aaa',
        bg11: '#bbb',
        bg12: '#ccc',
        bg13: '#ddd',
        bg14: '#eee',
      },
      text: {
        primary: '#fff',
        secondary: '#000',
        text1: '#111',
        text2: '#222',
        text3: '#333',
        text4: '#444',
        text5: '#555',
        text6: '#666',
        text7: '#777',
        text8: '#888',
        text9: '#999',
        text10: '#aaa',
        text11: '#bbb',
        text12: '#ccc',
        text13: '#ddd',
        text14: '#eee',
      },
      websiteColors: {
        BorderColer1: "#ffffffff",
        headerBg: '#111',
        ProjectsMeBg: "radial-gradient( circle farthest-corner at 6.3% 21.8%,  rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90% )",
        welcomColor: "radial-gradient( circle farthest-corner at 8.3% 21.6%,  rgba(252,92,125,1) 13.1%, rgba(106,130,251,1) 90% )",
        borderButton: "solid 2px #fff",
        shadowButton: "0 0 10px rgba(255, 255, 255, 0.79)"
      }
    } : {
      background: {
        primary: '#fff',
        secondary: '#000',
        bg1: '#eee',
        bg2: '#ddd',
        bg3: '#ccc',
        bg4: '#bbb',
        bg5: '#aaa',
        bg6: '#999',
        bg7: '#888',
        bg8: '#777',
        bg9: '#666',
        bg10: '#555',
        bg11: '#444',
        bg12: '#333',
        bg13: '#222',
        bg14: '#111',
      },
      text: {
        primary: '#111',
        secondary: '#fff',
        text1: '#eee',
        text2: '#ddd',
        text3: '#ccc',
        text4: '#bbb',
        text5: '#aaa',
        text6: '#999',
        text7: '#888',
        text8: '#777',
        text9: '#666',
        text10: '#555',
        text11: '#444',
        text12: '#333',
        text13: '#222',
        text14: '#111',
      },
      websiteColors: {
        headerBg: '#444',
        BorderColer1: "#460526ff",
        ProjectsMeBg: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(132,10,190,1) 0%, rgba(163,0,81,1) 100.2% )",
        welcomColor: "radial-gradient( circle farthest-corner at 6.3% 21.8%,  rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90% )",
        borderButton: "solid 2px #111",
        shadowButton: "0 0 10px rgba(0, 0, 0, 0.822)"
      }
    }
  }
});
