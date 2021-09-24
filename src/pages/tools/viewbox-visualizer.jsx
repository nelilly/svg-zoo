import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'src/components/Layout';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Shelf from 'src/components/Shelf';
import { formatDate } from 'src/shared/functions/formatDate';
import {
  books,
} from 'src/data/home.json';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const ViewboxVisualizerPage = ({lastUpdated}) => {
  const [viewBox, setViewBox] = useState('0,0 100,100');
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);
  const [viewboxWidth, setViewboxWidth] = useState(100);
  const [viewboxHeight, setViewboxHeight] = useState(100);
  const [svgWidth, setSvgWidth] = useState();
  const [svgHeight, setSvgHeight] = useState();
  const [meetOrSlice, setSlice] = useState('');
  const [ratio, setRatio] = useState('');
  const [displayImage, setDisplayImage] = useState('<circle cx="50" cy="50" r="45" />');

  useEffect(() => {
    setViewBox(`${originX},${originY} ${viewboxWidth},${viewboxHeight}`);
  },[originX,originY,viewboxWidth,viewboxHeight]);

  const handleExample = (svg) => {
    switch (svg) {
      case 'Circle':
        setDisplayImage('<circle cx="50" cy="50" r="45" />');
        break;
      case 'Hearts':
        setDisplayImage('<g fill="#a00"><path d="M20.86,49.18C12.66,33.06-11,35.21-11,10.62-11-.59-3.9-6.72,6-6.72c7.59,0,12.68,3,14.84,11.48h.34C23.36-3.7,28.45-6.72,36-6.72,46-6.72,53-.59,53,10.62,53,35.21,29.4,33.06,21.2,49.18Z"/><path d="M103.83,54.37c-5.33-10.48-20.7-9.08-20.7-25.07C83.13,22,87.73,18,94.18,18c4.93,0,8.24,2,9.65,7.46h.22c1.4-5.5,4.71-7.46,9.65-7.46,6.45,0,11,4,11,11.27,0,16-15.37,14.59-20.7,25.07Z"/><path d="M36.89,135.4C25.12,112.24-8.82,115.34-8.82,80c0-16.11,10.16-24.9,24.4-24.9,10.9,0,18.21,4.33,21.31,16.47h.49c3.1-12.14,10.41-16.47,21.3-16.47,14.25,0,24.4,8.79,24.4,24.9,0,35.3-33.93,32.2-45.7,55.36Z"/></g>');
        break;
      case 'Toucans':
        setDisplayImage('<linearGradient id="gradient0" x1="960" x2="960" y1="1079.9" y2="-.1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00180c"/><stop offset=".5" stop-color="#006837"/><stop offset="1" stop-color="#39b54a"/></linearGradient><path fill="url(#gradient0)" d="M0 -100h1920v1080H0z"/><path d="M1064 114c8 5 15 16 9 22-7 7-18-2-26-5-16-7-35 5-41 21-5 16 0 34 9 49 7 10 15 20 13 31-1 11-11 19-15 29-10 21 4 45 18 64l62 88c6 8 13 18 23 22 12 6 26 3 40 5 18 4 34 17 51 24 22 10 46 10 68 17 38 13 65 45 83 80 7 12 13 25 13 38 1 31-29 59-60 54l72 70c27 27 56 55 72 90s17 81-8 111c-9 11-25 20-38 14-19-9-16-35-13-55 10-77-27-159-92-202-14-9-34-17-47-6s-11 31-20 44c-7 10-20 14-31 17-54 13-113 5-161-23-22-13-41-30-60-46-24-20-51-47-46-78 1-6 4-12 4-19s-5-13-11-14c-6 0-11 4-16 7-12 6-29 1-39-9a91 91 0 01-21-37c-20-58-29-120-26-181 3-82 31-169 101-212 30-18 67-31 101-23 13 2 22 6 32 13zM1466 13c6 6 11 17 4 22-8 5-16-5-24-10-14-9-34-2-42 13s-7 32-1 47c4 11 10 22 6 33-3 10-14 15-20 24-13 18-4 43 5 64l42 95c4 9 9 19 17 25 11 8 25 8 37 13 17 6 29 22 44 32 19 13 42 18 61 29 33 19 52 55 63 91 4 13 7 26 5 39-5 29-39 50-67 40l54 79c21 31 43 63 51 100 9 36 1 79-28 102-11 9-28 15-39 6-16-11-9-36-2-54 25-71 5-156-48-209-12-11-29-22-44-14-13 7-15 27-27 37-8 8-21 10-32 11-54 2-108-18-148-53-18-16-33-36-48-55-19-24-39-54-28-82 2-6 6-11 7-18 1-6-2-13-8-15-5-2-10 2-16 3-13 4-28-4-36-15-8-12-10-26-12-40-7-58-4-118 10-176 19-76 62-153 136-180 32-12 69-17 101-3 11 5 19 10 27 19zM1837 199c1 5-1 13-6 13-6 1-8-8-10-14-4-10-18-13-28-8-10 6-15 16-17 27-2 7-3 15-8 20-6 5-14 4-20 7-14 5-18 22-20 37l-10 68c-1 7-2 14 0 20 3 8 11 13 16 20 8 10 9 23 14 34 6 14 17 25 24 38 11 23 10 50 3 74-3 8-6 17-11 23a35 35 0 01-52-1l2 63c1 25 2 51-6 74-9 23-28 45-53 48-9 1-20-2-24-11-5-12 8-23 19-31 39-31 58-85 46-134-2-11-8-23-19-24-10 0-18 10-28 12-8 1-15-2-22-6-31-18-54-48-64-82-4-15-6-31-8-48-2-20-2-43 14-55l10-8c3-3 4-8 1-11-2-3-6-3-10-4-9-2-14-12-15-21 0-10 4-19 8-27 16-35 39-68 67-95 38-36 90-64 141-53 22 5 44 15 57 34 4 7 7 13 9 21zM465-118c31-14 69-9 101 3C640-88 683-11 702 65c14 58 17 118 10 176-2 14-5 28-13 40-8 11-22 19-36 15-5-1-10-5-15-3-6 2-9 9-8 15s5 12 7 18c10 28-9 58-28 82-15 19-30 39-49 55-40 35-93 55-147 53-11-1-24-3-32-11-12-10-14-30-28-37-14-8-31 3-43 14-53 53-73 138-48 209 6 18 14 43-2 54-11 9-28 3-39-6-29-23-37-66-29-102s30-69 52-100l54-79a53 53 0 01-67-40c-2-13 1-26 4-39 11-36 31-72 63-91 20-11 43-16 62-29 15-10 27-26 44-32 12-5 26-5 37-13 8-6 12-16 17-25l42-95c9-21 18-46 4-64-6-9-16-14-20-24-3-11 3-22 7-33 5-15 7-33-1-47s-29-22-42-13c-8 5-16 15-24 10-7-5-2-16 4-22 8-9 16-14 27-19zM800 514c2 8 0 20-9 20s-11-12-14-21c-7-15-28-20-42-12-15 7-23 23-27 39-2 11-3 24-12 31-9 6-20 5-30 9-21 8-28 34-31 57l-16 102c-2 10-3 21 1 31 4 12 16 20 24 30 10 15 12 35 19 52 9 20 25 37 36 57 17 34 14 74 3 111-4 12-8 25-17 35a53 53 0 01-78-3l3 96c0 37 1 76-12 111-12 35-42 67-79 71-14 2-31-3-36-16-7-19 12-35 28-47 59-46 88-128 72-201-3-16-12-35-28-36s-28 14-43 17c-12 2-23-3-33-9-46-27-81-73-95-124-7-24-9-49-11-73-3-30-4-66 21-84 5-4 11-6 15-11s6-12 2-17c-4-4-10-4-15-6-13-4-21-19-22-33 0-14 5-27 11-40 26-53 61-101 104-142 57-54 136-95 212-78 34 8 68 24 86 52 7 11 11 20 13 32zM25 54c12-19 35-29 57-34 51-11 103 17 140 53 29 27 52 60 68 95 4 9 8 18 7 27s-5 19-14 21c-4 1-8 1-10 4-3 3-2 8 1 11 3 4 7 5 10 8 16 12 16 36 13 56-1 16-3 32-7 48-10 34-34 64-64 81-7 4-14 8-22 6-10-2-18-12-29-11-10 1-16 13-19 23-11 49 8 103 47 134 10 8 23 19 19 31-4 9-15 12-25 11-24-3-44-24-52-48-8-23-7-49-6-74l2-63a35 35 0 01-52 1c-6-6-9-15-11-23-7-24-9-51 3-73 7-14 18-24 24-38 5-12 6-24 13-34 5-7 13-12 16-20 3-7 2-14 1-21l-10-68c-2-14-6-32-20-37-7-3-15-2-20-7-6-4-6-13-8-20-2-11-8-21-17-26s-24-2-28 8c-3 5-4 14-10 14-6-1-7-9-6-14 2-8 4-14 9-21z" fill="#074228"/><linearGradient id="gradient1" x1="1433.4" x2="1677.9" y1="794.5" y2="1085.9" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-color="#01365a"/></linearGradient><path fill="url(#gradient1)" d="M1428 799h256v282h-256z"/><linearGradient id="gradient3" x1="267.7" x2="527.3" y1="774.1" y2="1083.4" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-color="#01365a"/></linearGradient><path fill="url(#gradient3)" d="M269 773h256v312H269z"/><linearGradient id="gradient4" x1="959.9" x2="959.9" y1="956.8" y2="751" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#200f04"/><stop offset=".9" stop-color="#42210b"/><stop offset="1" stop-color="#603813"/></linearGradient><path fill="url(#gradient4)" d="M-1 800l695-49 11 1 724 104 492-52v100l-487 52a47 47 0 01-13 0L696 851-1 900V800z"/><linearGradient id="gradient5" x1="365.8" x2="365.8" y1="838.3" y2="265.6" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-color="#01365a"/></linearGradient><circle cx="365.8" cy="552" r="286.3" fill="url(#gradient5)"/><linearGradient id="gradient6" x1="405.2" x2="405.2" y1="439.8" y2="89.8" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-color="#01365a"/></linearGradient><circle cx="405.2" cy="264.8" r="175" fill="url(#gradient6)"/><radialGradient id="gradient7" cx="424.8" cy="247.3" r="220" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#0ff"/><stop offset=".4" stop-color="#0f0"/><stop offset=".5" stop-color="#ff0"/><stop offset="1" stop-color="#fddb1b"/></radialGradient><path fill="url(#gradient7)" d="M521 192c0-64-52-56-116-56a116 116 0 00-105 166 175 175 0 10221 168V192z"/><circle cx="422.3" cy="243.1" r="58.6"/><linearGradient id="gradient8" x1="422.3" x2="422.3" y1="194.4" y2="291.9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray"/><stop offset=".5"/></linearGradient><circle cx="422.3" cy="243.1" r="48.7" fill="url(#gradient8)"/><circle cx="442" cy="219.6" r="10.9" fill="#fff"/><linearGradient id="gradient9" x1="609.8" x2="933.4" y1="90.3" y2="476" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0f0"/><stop offset=".3" stop-color="#fcee21"/><stop offset=".7" stop-color="#fcee21"/><stop offset="1" stop-color="#ed1e79"/></linearGradient><path fill="url(#gradient9)" d="M1007 414c-49-51-117-80-188-80H545c-6 0-11-5-11-11V166c0-13 10-23 23-23h302c82 0 148 66 148 147v125z"/><path d="M243 862c-14 0-26-12-26-26v-81c0-14 12-26 26-26s26 12 26 26v81c0 14-12 26-26 26zM305 838c-15 0-26-11-26-26v-80c0-15 11-26 26-26 14 0 26 11 26 26v80c0 15-12 26-26 26zM366 856c-14 0-26-12-26-26v-81c0-14 12-26 26-26s26 12 26 26v81c0 14-12 26-26 26zM591 831c14 0 26-11 26-26v-80c0-15-12-26-26-26-15 0-26 11-26 26v80c0 15 11 26 26 26zM529 868c14 0 26-12 26-26v-81c0-14-12-26-26-26-15 0-26 12-26 26v81c0 14 11 26 26 26zM468 836c14 0 26-12 26-26v-81c0-14-12-26-26-26-15 0-26 12-26 26v81c0 14 11 26 26 26zM1793 889c14 0 26-12 26-26v-81c0-14-12-26-26-26s-26 12-26 26v81c0 14 12 26 26 26zM1731 916c15 0 26-12 26-26v-81c0-14-11-26-26-26-14 0-26 12-26 26v81c0 14 12 26 26 26zM1670 903c15 0 26-11 26-26v-80c0-15-11-26-26-26-14 0-26 11-26 26v80c0 15 12 26 26 26zM1538 905c14 0 26-12 26-26v-81c0-14-12-26-26-26-15 0-26 12-26 26v81c0 14 11 26 26 26zM1476 932c14 0 26-12 26-26v-81c0-15-12-26-26-26s-26 11-26 26v80c0 15 12 27 26 27zM1415 899c14 0 26-11 26-26v-80c0-15-12-26-26-26-15 0-26 11-26 26v80c0 15 12 26 26 26z" fill="#0586c6"/><path d="M640 283l-21 39-20-39 20-40 21 40zM786 283l-20 39-20-39 20-40 20 40zM717 283l-25 47-24-47 25-48 24 48z" opacity=".4"/><linearGradient id="gradient10" x1="1514.9" x2="1514.9" y1="843.6" y2="271" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-color="#01365a"/></linearGradient><path fill="url(#gradient10)" d="M1336 844a175 175 0 01-34-347 286 286 0 11280 347h-246z"/><radialGradient id="gradient11" cx="874.6" cy="678.9" r="203.7" gradientTransform="matrix(-1 0 0 1 2197 0)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#0ff"/><stop offset=".4" stop-color="#0f0"/><stop offset=".5" stop-color="#ff0"/><stop offset="1" stop-color="#fddb1b"/></radialGradient><path fill="url(#gradient11)" d="M1397 595a175 175 0 11169 221h-219c-64 0-116-52-116-116v-52c0-29 24-53 53-53h113z"/><linearGradient id="gradient12" x1="1057.3" x2="1379.3" y1="550.8" y2="934.5" gradientTransform="matrix(-1 0 0 1 2197 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0f0"/><stop offset=".3" stop-color="#fcee21"/><stop offset=".7" stop-color="#fcee21"/><stop offset="1" stop-color="#ed1e79"/></linearGradient><path fill="url(#gradient12)" d="M745 873c49-51 117-80 188-80h275c5 0 10-5 10-10V630c0-17-13-30-30-30H892c-81 0-147 66-147 148v125z"/><circle cx="1326" cy="678.9" r="58.6"/><linearGradient id="gradient13" x1="871.5" x2="871.5" y1="630.1" y2="727.6" gradientTransform="matrix(-1 0 0 1 2197 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray"/><stop offset=".5"/></linearGradient><circle cx="1326" cy="678.9" r="48.7" fill="url(#gradient13)"/><circle cx="1346.7" cy="655.3" r="10.9" fill="#fff"/><path d="M1018 737l-20 40-21-40 21-39 20 39zM1165 737l-20 40-21-40 21-39 20 39zM1096 737l-25 48-25-48 25-47 25 47z" opacity=".4"/><path d="M1821 656c5 6 8 16 2 20-7 4-14-5-20-11-11-9-30-4-38 8-9 12-9 28-5 42 3 10 7 20 3 29s-14 13-20 20c-13 15-7 38-1 57l29 86c3 9 7 18 13 24 9 8 21 9 32 14 14 8 23 22 36 33 15 12 35 18 52 30 27 19 41 53 48 86 2 11 4 23 1 34-7 26-39 41-62 30l41 74c16 29 32 59 37 92 4 33-6 70-34 88-10 7-25 11-35 2-13-11-4-32 3-48 28-61 17-137-25-188-10-11-24-22-37-16s-16 23-27 31c-9 6-20 7-30 6-47-2-93-24-125-58-15-16-27-34-39-52-14-23-29-51-18-75 3-5 6-9 8-15 1-5-1-12-6-14-4-2-9 0-14 1-12 3-25-5-31-16s-7-24-7-36c-2-52 6-105 23-154 22-66 67-130 135-148 29-8 62-9 88 5 10 5 17 11 23 19zM143 512c38-1 75 19 103 45 66 58 79 156 67 243-10 65-31 128-63 186-8 13-16 27-29 36-13 8-31 11-44 1-5-4-9-9-15-10-7-1-13 6-14 13v21c-1 34-34 56-63 73-24 14-48 28-73 37-56 20-120 18-174-6-12-6-24-13-30-24-7-16-1-37-12-50-12-14-34-11-51-3a229 229 0 00-136 195c-1 22-3 51-25 56-15 4-30-8-38-22-20-37-11-84 13-118 24-35 60-59 94-82l89-60c-33-1-60-36-53-69 3-14 12-26 21-38 26-33 61-62 103-68 25-4 51 1 75-5 20-4 39-15 60-15 14 0 29 6 43 2 11-3 20-11 28-19l83-81c18-17 37-40 31-64-3-12-12-22-11-34s11-21 20-30c12-14 21-32 19-50s-21-34-39-30c-10 2-22 9-28 0-6-8 4-17 13-21 13-6 23-8 36-9zM913 877c31-15 68-11 100 0 75 25 121 101 142 177 15 57 20 117 14 175-1 14-3 29-11 40s-22 20-36 17c-5-2-10-5-15-3-6 2-9 10-8 16l8 17c11 28-8 58-26 83-14 19-29 39-47 56-39 37-92 57-146 57-11 0-24-2-32-10-12-10-15-29-29-36-14-8-31 3-43 15-52 55-69 140-42 210 7 18 15 43 0 55-11 8-28 3-40-5-29-23-38-66-31-102 8-37 28-70 48-101l52-81c-27 11-62-9-68-38-2-13 0-26 4-39 10-36 28-73 60-93 19-12 42-17 61-30 15-11 26-27 43-34 12-5 26-6 36-14 8-6 13-16 17-26l39-95c9-21 17-47 3-65-7-8-17-13-21-23-4-11 2-22 6-33 5-15 6-33-3-47s-29-21-42-12c-8 6-16 16-23 11-8-5-3-16 3-23 8-8 16-14 27-19z" fill="#0c6b2e" />');
        break;
      case 'Logo':
        setDisplayImage('<defs><g id="d" fill="#fff"><path d="M5.48 31.32a18.34 18.34 0 1 1 31.3-12.96H26.04a7.6 7.6 0 1 0-12.97 5.36c1.38 1.38 2.53 1.78 5.37 2.23 5.07.53 9.65 2.06 12.97 5.37A18.34 18.34 0 1 1 .1 44.28h10.74a7.6 7.6 0 1 0 12.97-5.36c-1.38-1.37-3.35-1.85-5.38-2.22-4.9-.76-9.64-2.06-12.96-5.38zM73.45.02l-12.97 62.6H49.74L36.78.02h10.74l7.6 36.67L62.72.02h10.73zM91.8 25.95h18.33V44.3a18.34 18.34 0 0 1-36.67 0V18.36a18.34 18.34 0 0 1 36.67 0H99.39a7.6 7.6 0 0 0-15.2 0v25.93a7.6 7.6 0 0 0 15.2 0v-7.6h-7.6V25.96z" transform="matrix(2 0 0 2 40 158)"/></g></defs><path id="c" d="M8.5 150h283v100c0 23.5-18 41.5-41.5 41.5H50c-23.5 0-41.5-18-41.5-41.5z"/><g stroke="#000" stroke-width="38.01"><g id="b" transform="translate(150 150)"><path id="a" fill="#ffb13b" d="M-84.15-15.85a22.42 22.42 0 1 0 0 31.7h168.3a22.42 22.42 0 1 0 0-31.7z"/><use transform="rotate(45)" xlink:href="#a"/><use transform="rotate(90)" xlink:href="#a"/><use transform="rotate(135)" xlink:href="#a"/></g></g><use xlink:href="#b"/><use opacity=".85" xlink:href="#c"/><use xlink:href="#d"/>');
        break;
      default:
        setDisplayImage('<circle cx="50" cy="50" r="45" />');
    }
  }

  const handleOriginX = (event) => {
    setOriginX(event.target.value);
  }

  const handleOriginY = (event) => {
    setOriginY(event.target.value);
  }

  const handleViewboxWidth = (event) => {
    setViewboxWidth(event.target.value);
  }

  const handleViewboxHeight = (event) => {
    setViewboxHeight(event.target.value);
  }

  const handleSvgWidth = (event) => {
    setSvgWidth(event.target.value);
  }

  const handleSvgHeight = (event) => {
    setSvgHeight(event.target.value);
  }

  const handleRatio = (event) => {
    setRatio(event.target.value);
  }

  const handleMeetOrSlice = (event) => {
    setSlice(event.target.checked ? 'slice': '');
  }

  const returnRatio = (ratio, meetOrSlice) => {
    const ratioString = `${ratio} ${meetOrSlice}`.trim();
    if(ratioString === ' ') { return ''; }
    return ratioString;
  }
  // const dimensions = (height, width) => width && height && `height="${height}" width="${width}"`

  const title = 'Viewbox Visualizer: SVG Tools: SVG ZOO';
  const description = 'Understand the SVG viewBox attribute.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Breadcrumbs labels={title} />
          <header>
            <h1>Viewbox Visualizer</h1>
          </header>
          <style>
            {`
            figure svg {
              background-color: transparent;
              border: .1rem dashed #999;
              fill: initial;
              stroke: initial;
              stroke-width: initial;
              vertical-align: top;
            }
            `}
          </style>
          <div style={{margin: '0 calc(50% - 50vw)', padding: '1rem 1rem 3rem'}}>
            <fieldset>
              <legend>{description}</legend>
              <div className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
                <div>
                  <label htmlFor="origin-x">Origin X</label>
                  <input type="number" id="origin-x" value={originX} onChange={handleOriginX} onKeyUp={handleOriginX} />
                  <label htmlFor="origin-y">Origin Y</label>
                  <input type="number" id="origin-y" value={originY} onChange={handleOriginY} onKeyUp={handleOriginY} />
                </div>
                <div>
                  <label htmlFor="view-width">Viewbox Width</label>
                  <input type="number" id="view-width" value={viewboxWidth} onChange={handleViewboxWidth} onKeyUp={handleViewboxWidth} min="1" />
                  <label htmlFor="view-height">Viewbox Height</label>
                  <input type="number" id="view-height" value={viewboxHeight} onChange={handleViewboxHeight} onKeyUp={handleViewboxHeight} min="1" />
                </div>
                <div>
                  <label htmlFor="svg-width">SVG Width</label>
                  <input type="number" id="svg-width" value={svgWidth} onChange={handleSvgWidth} onKeyUp={handleSvgWidth} min="1" max="1200" />
                  <label htmlFor="svg-height">SVG Height</label>
                  <input type="number" id="svg-height" value={svgHeight} onChange={handleSvgHeight} onKeyUp={handleSvgHeight} min="1" max="1200" />
                </div>
                <div>
                  <fieldset>
                    <legend>Preserve Aspect Ratio</legend>
                    <label>align</label>
                    <select onChange={handleRatio}>
                      <option value=""></option>
                      <option value="none">none (stretches to fit)</option>
                      <option value="xMinYMin">xMinYMin</option>
                      <option value="xMinYMid">xMinYMid</option>
                      <option value="xMinYMax">xMinYMax</option>
                      <option value="xMidYMin">xMidYMin</option>
                      <option value="xMidYMid">xMidYMid (default)</option>
                      <option value="xMidYMax">xMidYMax</option>
                      <option value="xMaxYMin">xMaxYMin</option>
                      <option value="xMaxYMid">xMaxYMid</option>
                      <option value="xMaxYMax">xMaxYMax</option>
                    </select>
                    <label htmlFor="meetOrSlice">
                      <input id="meetOrSlice" type="checkbox" onClick={handleMeetOrSlice} disabled={!ratio} /> Slice
                    </label>
                  </fieldset>
                </div>
              </div>
              <figure>
                <figcaption><code>&lt;svg {viewboxHeight && viewboxWidth && `viewBox="${viewBox}"`} {svgWidth && `width="${svgWidth}"`} {svgHeight && `height="${svgHeight}"`} {ratio && `preserveAspectRatio="${returnRatio(ratio,meetOrSlice)}"`}&gt;</code></figcaption>
                <svg
                  viewBox={viewBox}
                  height={svgHeight}
                  width={svgWidth}
                  preserveAspectRatio={returnRatio(ratio,meetOrSlice)}
                  dangerouslySetInnerHTML={{ __html: displayImage }}
                >
                </svg>
              </figure>
            </fieldset>
          </div>

          <div>
            Examples:
            <button onClick={() => handleExample('Circle')}>Circle</button>
            <button onClick={() => handleExample('Hearts')}>Hearts</button>
            <button onClick={() => handleExample('Toucans')}>Toucans</button>
            <button onClick={() => handleExample('Logo')}>Logo</button>
          </div>
          <section>
            <h2>Resources</h2>
            <ul>
              <li><Link href="/guides/drawing-svgs#viewbox">Drawing SVGs: The viewBox</Link></li>
            </ul>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default ViewboxVisualizerPage;

ViewboxVisualizerPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

