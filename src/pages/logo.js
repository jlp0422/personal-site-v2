// import React from 'react'
// import SEO from '../components/Seo'
// import { motion } from 'framer-motion'
// import GlobalStyle from '../components/GlobalStyle'
// import styled from '@emotion/styled'

// const Container = styled.div`
//   /* width: 400px;
//   height: 400px; */
//   display: flex;
//   place-content: center;
//   overflow: hidden;
//   background: blue; /*rgba(255, 255, 255, 0.2);*/
//   border-radius: 30px;
// `

// const Svg = styled(motion.svg)`
//   width: 56%;
//   overflow: visible;
//   stroke: green;
//   stroke-width: 2;
//   stroke-linejoin: round;
//   stroke-linecap: round;
// `

// const icon = {
//   hidden: {
//     pathLength: 0,
//     fill: 'blue' /* 'rgba(255, 255, 255, 0)'*/
//   },
//   visible: {
//     pathLength: 1,
//     fill: 'blue' /*'rgba(255, 255, 255, 1)' */
//   }
// }

// const Logo = () => {
//   return (
//     <Container>
//       <Svg
//         version="1.0"
//         xmlns="http://www.w3.org/2000/svg"
//         // width="360.000000pt"
//         // height="360.000000pt"
//         viewBox="0 0 100.000000 100.000000"
//         // preserveAspectRatio="xMidYMid meet"
//       >
//         {/* <g
//           transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)"
//           fill="#000000"
//           stroke="none"
//         > */}
//           {/* <motion.path
//             variants={icon}
//             initial="hidden"
//             animate="visible"
//             transition={{
//               default: { duration: 2, ease: 'easeInOut' },
//               fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//             }}
//             d="M4545 9343 c-218 -17 -315 -27 -400 -39 -646 -93 -1271 -327 -1817
// -681 -571 -369 -1078 -892 -1433 -1478 -620 -1023 -806 -2273 -514 -3455 166
// -676 503 -1326 962 -1860 116 -134 363 -381 492 -491 1130 -965 2642 -1318
// 4085 -954 814 205 1533 620 2131 1231 269 275 464 527 664 859 86 141 250 474
// 313 635 355 897 418 1877 182 2813 -323 1280 -1212 2375 -2403 2961 -636 313
// -1327 470 -2037 464 -102 -1 -203 -3 -225 -5z m485 -373 c1328 -80 2506 -755
// 3249 -1864 816 -1216 923 -2813 278 -4131 -218 -445 -487 -817 -843 -1165
// -680 -665 -1513 -1058 -2489 -1172 -168 -20 -734 -16 -900 5 -513 68 -905 182
// -1334 388 -441 213 -800 468 -1147 813 -681 681 -1088 1531 -1206 2521 -17
// 145 -17 711 0 860 81 693 292 1289 658 1852 152 234 307 426 518 642 353 360
// 731 631 1188 850 628 302 1337 442 2028 401z"
//           /> */}
//           <motion.path
//             variants={icon}
//             initial="hidden"
//             animate="visible"
//             transition={{
//               default: { duration: 2, ease: 'easeInOut' },
//               fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//             }}
// //             d="M4590 8741 l-85 -6 -3 -3936 -2 -3936 46 -7 c60 -8 457 -8 507 0 l37
// // 7 0 3937 0 3937 -127 6 c-137 7 -237 7 -373 -2z"
//             // d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
//             d="M30,5
//            l25,0 -10,0 0,75
//            c0,15 -30,15 -30,-10" />

//           <motion.path
//             variants={icon}
//             initial="hidden"
//             animate="visible"
//             transition={{
//               default: { duration: 2, ease: 'easeInOut' },
//               fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//             }}
//             d="M10,10
//            l0,80z
//            l0,3
//            a10,5 -15 1,1 0,40"
//           />
//           {/* <motion.path
//             variants={icon}
//             initial="hidden"
//             animate="visible"
//             transition={{
//               default: { duration: 2, ease: 'easeInOut' },
//               fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//             }}
//             d="M6040 7404 c-14 -2 -73 -6 -132 -9 l-108 -7 0 -2563 c0 -2406 1
// -2565 17 -2581 30 -30 85 -46 178 -53 169 -12 340 14 378 57 13 15 15 264 19
// 2107 5 2076 5 2090 25 2136 91 205 432 248 750 95 253 -122 417 -324 480 -592
// 26 -112 25 -370 -1 -469 -39 -146 -124 -293 -223 -386 -72 -67 -161 -131 -231
// -164 -57 -28 -81 -55 -48 -55 26 0 190 51 281 87 297 118 517 318 622 566 63
// 149 77 229 77 432 1 139 -3 200 -18 265 -163 752 -815 1148 -1876 1138 -91 0
// -176 -2 -190 -4z"
//           /> */}
//         {/* </g> */}
//       </Svg>
//       {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//         <motion.path
//           d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           transition={{
//             default: { duration: 2, ease: 'easeInOut' },
//             fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//           }}
//         />
//       </Svg> */}
//     </Container>
//   )
// }

// export default Logo
