import localFont from "next/font/local"

const amulya_Bold = localFont({
  src: [
    { path: './fonts/Amulya-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Amulya-Bold.woff', weight: '700', style: 'normal' },
    { path: './fonts/Amulya-Bold.ttf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-amulya-bold'
})

const amulya_BoldItalic = localFont({
  src: [
    { path: './fonts/Amulya-BoldItalic.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Amulya-BoldItalic.woff', weight: '700', style: 'normal' },
    { path: './fonts/Amulya-BoldItalic.ttf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-amulya-bolditalic'
})

const synonym_Regular = localFont({
  src: [
    { path: './fonts/Synonym-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Synonym-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/Synonym-Regular.ttf', weight: '400', style: 'normal' }
  ],
  display: 'swap',
  variable: '--font-synonym'
})

const mochiyPopPOne_Regular = localFont({
  src: [
    { path: './fonts/MochiyPopPOne-Regular.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-mochiyPopPOn'
})

export { amulya_Bold, amulya_BoldItalic, synonym_Regular, mochiyPopPOne_Regular}
