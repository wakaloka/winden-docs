import React from 'react';
import Link from '@docusaurus/Link';

import './wp-styles.scss';

export default function HomepageContent() {
  return (
    <div class="homepage-container text-black bg-white">
      <div>
        <section class="py-24 m-0 bg-no-repeat pb-24 bg-[#f3f7f6] bg-[url('/img/homepage-hero-bg.jpg')] bg-[length:auto_100%] md:bg-[length:80%_auto] bg-center md:bg-right-top bg-fixed">
          <div class="container mx-auto">
            <div>
              <div class="flex gap-4 items-start flex-col md:gap-4 md:flex-row md:items-center">
                <h2 class="m-0"><strong>400+</strong></h2>
                <p class="m-0 text-lg leading-6">Winden users enjoying <br /> Tailwind CSS inside page builder</p>
              </div>
              <hr class="inline-block w-20 border-b-2 border-solid" />
            </div>
            <h1 class="font-light my-20">The #1 utility CSS Framework <br /><strong> for WordPress.</strong></h1>

            <div class="mb-8 grid grid-cols-1 md:grid-cols-3 justify-around gap-4 items-start md:gap-16 md:items-center">
              <div class="flex justify-start items-center gap-2 m-0 ">
                <div>
                  <div class="w-12">
                    <svg class="w-12 h-12" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7245 3.80341L8.5674 17.3323C8.38083 17.6417 8.60367 18.0362 8.965 18.0362L13.0915 18.0363C13.3992 18.0363 13.6486 18.2857 13.6486 18.5934V27.2305H13.158V29.5711H13.91C14.0051 29.5779 14.1042 29.5367 14.165 29.4372L23.2384 14.5715C23.3517 14.3859 23.2181 14.1478 23.0006 14.1478H18.2921C18.0356 14.1478 17.8278 13.9399 17.8278 13.6835V2.97508C17.8278 2.80998 17.7007 2.70612 17.566 2.69674L16.7245 2.69604V3.80341Z" fill="url(#paint0_linear_18_15539)" />
                      <g filter="url(#filter0_i_18_15539)">
                        <path d="M16.4931 2.83125L7.74977 17.3323C7.56321 17.6417 7.78604 18.0363 8.14735 18.0363L12.2739 18.0363C12.5816 18.0363 12.831 18.2857 12.831 18.5934V29.2921C12.831 29.5735 13.2007 29.6774 13.3473 29.4372L22.4208 14.5715C22.5341 14.3858 22.4005 14.1478 22.183 14.1478H17.4744C17.218 14.1478 17.0102 13.9399 17.0102 13.6835V2.97508C17.0102 2.69288 16.6388 2.58958 16.4931 2.83125Z" fill="url(#paint1_linear_18_15539)" />
                      </g>
                      <path d="M16.4931 2.83125L7.74977 17.3323C7.56321 17.6417 7.78604 18.0363 8.14735 18.0363L12.2739 18.0363C12.5816 18.0363 12.831 18.2857 12.831 18.5934V29.2921C12.831 29.5735 13.2007 29.6774 13.3473 29.4372L22.4208 14.5715C22.5341 14.3858 22.4005 14.1478 22.183 14.1478H17.4744C17.218 14.1478 17.0102 13.9399 17.0102 13.6835V2.97508C17.0102 2.69288 16.6388 2.58958 16.4931 2.83125Z" fill="url(#paint2_linear_18_15539)" />
                      <path d="M16.4931 2.83125L7.74977 17.3323C7.56321 17.6417 7.78604 18.0363 8.14735 18.0363L12.2739 18.0363C12.5816 18.0363 12.831 18.2857 12.831 18.5934V29.2921C12.831 29.5735 13.2007 29.6774 13.3473 29.4372L22.4208 14.5715C22.5341 14.3858 22.4005 14.1478 22.183 14.1478H17.4744C17.218 14.1478 17.0102 13.9399 17.0102 13.6835V2.97508C17.0102 2.69288 16.6388 2.58958 16.4931 2.83125Z" fill="url(#paint3_radial_18_15539)" />
                      <path d="M16.4931 2.83125L7.74977 17.3323C7.56321 17.6417 7.78604 18.0363 8.14735 18.0363L12.2739 18.0363C12.5816 18.0363 12.831 18.2857 12.831 18.5934V29.2921C12.831 29.5735 13.2007 29.6774 13.3473 29.4372L22.4208 14.5715C22.5341 14.3858 22.4005 14.1478 22.183 14.1478H17.4744C17.218 14.1478 17.0102 13.9399 17.0102 13.6835V2.97508C17.0102 2.69288 16.6388 2.58958 16.4931 2.83125Z" fill="url(#paint4_linear_18_15539)" />
                      <path d="M16.4931 2.83125L7.74977 17.3323C7.56321 17.6417 7.78604 18.0363 8.14735 18.0363L12.2739 18.0363C12.5816 18.0363 12.831 18.2857 12.831 18.5934V29.2921C12.831 29.5735 13.2007 29.6774 13.3473 29.4372L22.4208 14.5715C22.5341 14.3858 22.4005 14.1478 22.183 14.1478H17.4744C17.218 14.1478 17.0102 13.9399 17.0102 13.6835V2.97508C17.0102 2.69288 16.6388 2.58958 16.4931 2.83125Z" fill="url(#paint5_radial_18_15539)" />
                      <defs>
                        <filter id="filter0_i_18_15539" x="7.68237" y="2.69604" width="14.7796" height="26.8751" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="0.25" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.337255 0 0 0 1 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_18_15539" />
                        </filter>
                        <linearGradient id="paint0_linear_18_15539" x1="18.4074" y1="7.96602" x2="18.4074" y2="23.7116" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFBD61" />
                          <stop offset="1" stop-color="#EB5C74" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_18_15539" x1="15.0722" y1="11.05" x2="15.0722" y2="26.5859" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFA547" />
                          <stop offset="1" stop-color="#F14B49" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_18_15539" x1="15.0722" y1="2.69604" x2="15.0722" y2="13.7608" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#DF9844" />
                          <stop offset="1" stop-color="#DF9844" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient id="paint3_radial_18_15539" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.0992 7.9239) rotate(90) scale(6.45595 1.40857)">
                          <stop stop-color="#FE9052" />
                          <stop offset="1" stop-color="#FE9052" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint4_linear_18_15539" x1="13.0633" y1="8.37241" x2="13.493" y2="8.63022" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#C76C38" />
                          <stop offset="1" stop-color="#C76C38" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient id="paint5_radial_18_15539" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.157 7.71616) rotate(90) scale(6.6875 2.4375)">
                          <stop stop-color="#FFB54B" />
                          <stop offset="1" stop-color="#FFB54B" stop-opacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p class="m-0 text-lg text-[#846358]"><strong><strong>Rapid Prototyping</strong></strong><br />Build your website in no time</p>
              </div>
              <div class="flex justify-start items-center gap-2 m-0">
                <div>
                  <div class="w-12">
                    <svg class="w-12 h-12" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_ii_28327_5144)">
                        <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint0_linear_28327_5144)" />
                        <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint1_radial_28327_5144)" />
                        <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint2_radial_28327_5144)" />
                        <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint3_radial_28327_5144)" />
                        <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint4_radial_28327_5144)" />
                      </g>
                      <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint5_linear_28327_5144)" />
                      <path d="M29.5615 2H25.3915C20.0915 2 14.9715 3.88 10.9315 7.3C6.67155 10.91 4.21155 16.22 4.21155 21.81V25.06C4.21155 25.06 4.38155 24.76 4.70155 24.25C4.61155 24.63 4.57155 24.84 4.57155 24.84V25.06H8.49155C10.5715 25.06 12.5715 24.59 14.3815 23.72C14.5915 23.62 14.5915 23.32 14.3815 23.22L12.2115 22.21C12.0815 22.17 12.1215 22 12.2515 22H16.7815C16.9915 22 17.1915 21.92 17.3515 21.79C18.6815 20.65 19.8015 19.25 20.6215 17.64C20.9215 17.04 21.4915 15.97 21.8015 15.39C21.9315 15.15 21.9215 14.86 21.7815 14.62L20.4215 12.38C20.3215 12.21 20.4415 12 20.6315 12H23.2915C23.5515 12 23.8015 11.86 23.9315 11.64C25.7115 8.68 27.7715 5.69 30.0115 3.19C30.1415 3.05 30.2115 2.86 30.2115 2.67C30.2215 2.3 29.9215 2 29.5615 2Z" fill="url(#paint6_radial_28327_5144)" />
                      <path d="M26.9816 7H19.1916V2.88C17.4216 3.39 15.7116 4.12 14.1116 5.06V12H23.3016C23.5616 12 23.8116 11.86 23.9416 11.64C24.8816 10.07 25.9016 8.5 26.9816 7Z" fill="url(#paint7_linear_28327_5144)" />
                      <path d="M26.9816 7H19.1916V2.88C17.4216 3.39 15.7116 4.12 14.1116 5.06V12H23.3016C23.5616 12 23.8116 11.86 23.9416 11.64C24.8816 10.07 25.9016 8.5 26.9816 7Z" fill="url(#paint8_radial_28327_5144)" />
                      <path d="M26.9816 7H19.1916V2.88C17.4216 3.39 15.7116 4.12 14.1116 5.06V12H23.3016C23.5616 12 23.8116 11.86 23.9416 11.64C24.8816 10.07 25.9016 8.5 26.9816 7Z" fill="url(#paint9_linear_28327_5144)" />
                      <g filter="url(#filter1_f_28327_5144)">
                        <path d="M4.57153 24.9912C6.58228 20.583 9.35117 16.5962 12.8065 13.15C16.3166 9.64004 20.3566 6.85004 24.8466 4.83004C25.1165 4.71004 25.2266 4.41004 25.0966 4.14004C24.9766 3.90004 24.6866 3.80004 24.4466 3.91004C19.8466 5.98004 15.7065 8.85004 12.1066 12.44C8.87006 15.6766 6.58212 19.0162 4.57153 23.0782L4.70154 24.25C4.61154 24.63 4.57153 24.84 4.57153 24.84V24.9912Z" fill="#995E44" />
                      </g>
                      <g filter="url(#filter2_i_28327_5144)">
                        <path d="M25.4716 4.14004C25.3516 3.90004 25.0616 3.80004 24.8216 3.91004C20.2216 5.98004 16.0816 8.85004 12.4816 12.44C8.66159 16.26 5.66159 20.71 3.56159 25.66C3.05159 26.87 2.60159 28.09 2.21159 29.33C2.12159 29.63 2.29159 29.94 2.59159 29.99C2.85159 30.04 3.09159 29.88 3.16159 29.64C3.54159 28.43 3.98159 27.23 4.48159 26.05C6.52159 21.22 9.45159 16.87 13.1816 13.15C16.6916 9.64004 20.7316 6.85004 25.2216 4.83004C25.4916 4.71004 25.6016 4.41004 25.4716 4.14004C25.4716 4.15004 25.4716 4.15004 25.4716 4.14004Z" fill="url(#paint10_linear_28327_5144)" />
                        <path d="M25.4716 4.14004C25.3516 3.90004 25.0616 3.80004 24.8216 3.91004C20.2216 5.98004 16.0816 8.85004 12.4816 12.44C8.66159 16.26 5.66159 20.71 3.56159 25.66C3.05159 26.87 2.60159 28.09 2.21159 29.33C2.12159 29.63 2.29159 29.94 2.59159 29.99C2.85159 30.04 3.09159 29.88 3.16159 29.64C3.54159 28.43 3.98159 27.23 4.48159 26.05C6.52159 21.22 9.45159 16.87 13.1816 13.15C16.6916 9.64004 20.7316 6.85004 25.2216 4.83004C25.4916 4.71004 25.6016 4.41004 25.4716 4.14004C25.4716 4.15004 25.4716 4.15004 25.4716 4.14004Z" fill="url(#paint11_linear_28327_5144)" />
                      </g>
                      <path d="M25.4716 4.14004C25.3516 3.90004 25.0616 3.80004 24.8216 3.91004C20.2216 5.98004 16.0816 8.85004 12.4816 12.44C8.66159 16.26 5.66159 20.71 3.56159 25.66C3.05159 26.87 2.60159 28.09 2.21159 29.33C2.12159 29.63 2.29159 29.94 2.59159 29.99C2.85159 30.04 3.09159 29.88 3.16159 29.64C3.54159 28.43 3.98159 27.23 4.48159 26.05C6.52159 21.22 9.45159 16.87 13.1816 13.15C16.6916 9.64004 20.7316 6.85004 25.2216 4.83004C25.4916 4.71004 25.6016 4.41004 25.4716 4.14004C25.4716 4.15004 25.4716 4.15004 25.4716 4.14004Z" fill="url(#paint12_radial_28327_5144)" />
                      <path d="M25.4716 4.14004C25.3516 3.90004 25.0616 3.80004 24.8216 3.91004C20.2216 5.98004 16.0816 8.85004 12.4816 12.44C8.66159 16.26 5.66159 20.71 3.56159 25.66C3.05159 26.87 2.60159 28.09 2.21159 29.33C2.12159 29.63 2.29159 29.94 2.59159 29.99C2.85159 30.04 3.09159 29.88 3.16159 29.64C3.54159 28.43 3.98159 27.23 4.48159 26.05C6.52159 21.22 9.45159 16.87 13.1816 13.15C16.6916 9.64004 20.7316 6.85004 25.2216 4.83004C25.4916 4.71004 25.6016 4.41004 25.4716 4.14004C25.4716 4.15004 25.4716 4.15004 25.4716 4.14004Z" fill="url(#paint13_radial_28327_5144)" />
                      <g filter="url(#filter3_f_28327_5144)">
                        <path d="M2.6875 29.5C4.22917 24.5417 8.28125 14.5938 19.8125 7.21875" stroke="url(#paint14_linear_28327_5144)" stroke-width="0.25" stroke-linecap="round" />
                      </g>
                      <defs>
                        <filter id="filter0_ii_28327_5144" x="4.21155" y="1.75" width="26.2502" height="23.8101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="0.25" dy="0.5" />
                          <feGaussianBlur stdDeviation="0.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.690196 0 0 0 0 0.466667 0 0 0 0 0.286275 0 0 0 1 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_28327_5144" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-0.25" />
                          <feGaussianBlur stdDeviation="0.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.455972 0 0 0 0 0.501059 0 0 0 1 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_28327_5144" result="effect2_innerShadow_28327_5144" />
                        </filter>
                        <filter id="filter1_f_28327_5144" x="4.07153" y="3.36548" width="21.5795" height="22.1257" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_28327_5144" />
                        </filter>
                        <filter id="filter2_i_28327_5144" x="2.1875" y="3.86548" width="23.3386" height="26.3837" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="0.25" />
                          <feGaussianBlur stdDeviation="0.375" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.443137 0 0 0 0 0.270588 0 0 0 1 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_28327_5144" />
                        </filter>
                        <filter id="filter3_f_28327_5144" x="2.06244" y="6.59375" width="18.3751" height="23.5312" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_28327_5144" />
                        </filter>
                        <linearGradient id="paint0_linear_28327_5144" x1="1.43747" y1="27.875" x2="26.4269" y2="1.202" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#CE9270" />
                          <stop offset="1" stop-color="#D78C55" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.2117 25.06) rotate(-118.387) scale(12.1454 61.4735)">
                          <stop stop-color="#E6A180" />
                          <stop offset="1" stop-color="#E6A180" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.1562 22.4688) rotate(-171.511) scale(4.23388 0.981203)">
                          <stop stop-color="#F2C48E" />
                          <stop offset="1" stop-color="#F2C48E" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.3125 14.4375) rotate(-122.876) scale(6.10232 3.47844)">
                          <stop stop-color="#F2C48E" />
                          <stop offset="1" stop-color="#F2C48E" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint4_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.6875 22.3125) rotate(-143.379) scale(17.2877 31.6984)">
                          <stop offset="0.685432" stop-color="#C68A61" stop-opacity="0" />
                          <stop offset="1" stop-color="#C68A61" />
                        </radialGradient>
                        <linearGradient id="paint5_linear_28327_5144" x1="27.125" y1="0.1875" x2="17.6875" y2="7.875" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#CE8646" />
                          <stop offset="1" stop-color="#CE8646" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient id="paint6_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.2118 2.21875) rotate(147.304) scale(2.77682 1.34177)">
                          <stop stop-color="#EFA86F" />
                          <stop offset="1" stop-color="#E39C62" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint7_linear_28327_5144" x1="14.5625" y1="12" x2="23.5625" y2="6.625" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#9F6562" />
                          <stop offset="1" stop-color="#BC755B" />
                        </linearGradient>
                        <radialGradient id="paint8_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.2812 12.6875) rotate(-152.671) scale(5.24125 2.12873)">
                          <stop stop-color="#934E4C" />
                          <stop offset="1" stop-color="#934E4C" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint9_linear_28327_5144" x1="13.5625" y1="13.75" x2="17.125" y2="10.8125" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#9C6361" />
                          <stop offset="1" stop-color="#9C6361" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_28327_5144" x1="20.4375" y1="8.75004" x2="2.1875" y2="32.5" gradientUnits="userSpaceOnUse">
                          <stop offset="0.00558659" stop-color="#D38750" />
                          <stop offset="1" stop-color="#EEA374" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_28327_5144" x1="38.6875" y1="-5.31246" x2="6.93751" y2="20.625" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D77D2C" />
                          <stop offset="1" stop-color="#D77D2C" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient id="paint12_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.5261 4.17192) rotate(156.111) scale(0.848828 0.630412)">
                          <stop stop-color="#F3A963" />
                          <stop offset="1" stop-color="#F3A963" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint13_radial_28327_5144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.9062 8.37504) rotate(-124.019) scale(1.50812 7.57925)">
                          <stop stop-color="#BB3CCF" />
                          <stop offset="1" stop-color="#BB3CCF" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint14_linear_28327_5144" x1="4.75" y1="28.4375" x2="19.0625" y2="8.8125" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FAAD7C" />
                          <stop offset="1" stop-color="#FAAD7C" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p class="m-0 text-[#846358] text-lg"><strong>Tiny Final CSS </strong><br />Single CSS file for the entire website with less than 10KB</p>
              </div>
              <div class="flex justify-start items-center gap-2 m-0">
                <div>
                  <div class="w-12">
                    <svg class="w-12 h-12" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_i_18_23558)">
                        <path d="M19.4453 14.0703V8.50781C19.4453 5.73776 21.6524 3.49219 24.375 3.49219C27.0976 3.49219 29.3047 5.73776 29.3047 8.50781V9.59369" stroke="#C2C2C6" stroke-width="2.75" stroke-linecap="round" />
                      </g>
                      <path d="M19.4453 14.0703V8.50781C19.4453 5.73776 21.6524 3.49219 24.375 3.49219C27.0976 3.49219 29.3047 5.73776 29.3047 8.50781V9.59369" stroke="url(#paint0_radial_18_23558)" stroke-width="2.75" stroke-linecap="round" />
                      <path d="M19.4453 14.0703V8.50781C19.4453 5.73776 21.6524 3.49219 24.375 3.49219C27.0976 3.49219 29.3047 5.73776 29.3047 8.50781V9.59369" stroke="url(#paint1_radial_18_23558)" stroke-width="2.75" stroke-linecap="round" />
                      <g filter="url(#filter1_f_18_23558)">
                        <path d="M19.8828 13.7578V8.19531C19.8828 5.42526 22.0899 3.17969 24.8125 3.17969C27.5351 3.17969 29.7422 5.42526 29.7422 8.19531V9.28119" stroke="url(#paint2_radial_18_23558)" stroke-linecap="round" />
                        <path d="M19.8828 13.7578V8.19531C19.8828 5.42526 22.0899 3.17969 24.8125 3.17969C27.5351 3.17969 29.7422 5.42526 29.7422 8.19531V9.28119" stroke="url(#paint3_radial_18_23558)" stroke-linecap="round" />
                      </g>
                      <g filter="url(#filter2_iiii_18_23558)">
                        <rect x="2.4375" y="11.0547" width="21.9375" height="18.8438" rx="3" fill="url(#paint4_linear_18_23558)" />
                      </g>
                      <rect x="2.4375" y="11.0547" width="21.9375" height="18.8438" rx="3" fill="url(#paint5_radial_18_23558)" />
                      <rect x="2.4375" y="11.0547" width="21.9375" height="18.8438" rx="3" fill="url(#paint6_linear_18_23558)" />
                      <rect x="2.4375" y="11.0547" width="21.9375" height="18.8438" rx="3" fill="url(#paint7_radial_18_23558)" />
                      <g filter="url(#filter3_f_18_23558)">
                        <path d="M14.8047 20.3915C15.5239 19.9273 16 19.1189 16 18.1992C16 16.7592 14.8326 15.5918 13.3926 15.5918C11.9525 15.5918 10.7852 16.7592 10.7852 18.1992C10.7852 19.1305 11.2734 19.9477 12.0078 20.409V23.7032C12.0078 24.4755 12.6339 25.1016 13.4062 25.1016C14.1786 25.1016 14.8047 24.4755 14.8047 23.7032V20.3915Z" stroke="url(#paint8_linear_18_23558)" stroke-width="1.75" />
                        <path d="M14.8047 20.3915C15.5239 19.9273 16 19.1189 16 18.1992C16 16.7592 14.8326 15.5918 13.3926 15.5918C11.9525 15.5918 10.7852 16.7592 10.7852 18.1992C10.7852 19.1305 11.2734 19.9477 12.0078 20.409V23.7032C12.0078 24.4755 12.6339 25.1016 13.4062 25.1016C14.1786 25.1016 14.8047 24.4755 14.8047 23.7032V20.3915Z" stroke="url(#paint9_linear_18_23558)" stroke-width="1.75" />
                      </g>
                      <path d="M14.8047 20.3915C15.5239 19.9273 16 19.1189 16 18.1992C16 16.7592 14.8326 15.5918 13.3926 15.5918C11.9525 15.5918 10.7852 16.7592 10.7852 18.1992C10.7852 19.1305 11.2734 19.9477 12.0078 20.409V23.7032C12.0078 24.4755 12.6339 25.1016 13.4062 25.1016C14.1786 25.1016 14.8047 24.4755 14.8047 23.7032V20.3915Z" fill="url(#paint10_radial_18_23558)" />
                      <defs>
                        <filter id="filter0_i_18_23558" x="18.0703" y="2.11719" width="13.6094" height="13.3281" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1" />
                          <feGaussianBlur stdDeviation="0.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.560784 0 0 0 0 0.556863 0 0 0 0 0.576471 0 0 0 1 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_18_23558" />
                        </filter>
                        <filter id="filter1_f_18_23558" x="18.6328" y="1.92969" width="12.3594" height="13.0781" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="0.375" result="effect1_foregroundBlur_18_23558" />
                        </filter>
                        <filter id="filter2_iiii_18_23558" x="1.6875" y="10.3047" width="23.4375" height="20.3438" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-0.75" />
                          <feGaussianBlur stdDeviation="0.375" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.898039 0 0 0 0 0.364706 0 0 0 0 0.423529 0 0 0 1 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_18_23558" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1" />
                          <feGaussianBlur stdDeviation="0.375" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.364706 0 0 0 1 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_18_23558" result="effect2_innerShadow_18_23558" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="0.375" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0.266667 0 0 0 1 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_18_23558" result="effect3_innerShadow_18_23558" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="0.75" />
                          <feGaussianBlur stdDeviation="0.375" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.729412 0 0 0 0 0.478431 0 0 0 0 0.207843 0 0 0 1 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_18_23558" result="effect4_innerShadow_18_23558" />
                        </filter>
                        <filter id="filter3_f_18_23558" x="9.41016" y="14.2168" width="7.96484" height="12.2598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_18_23558" />
                        </filter>
                        <radialGradient id="paint0_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.5312 8.15619) rotate(-91.6531) scale(5.41626 5.81234)">
                          <stop offset="0.556487" stop-color="#AB83C0" />
                          <stop offset="1" stop-color="#CBBBDC" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.3047 11.4062) rotate(-90) scale(2.21875 8.81238)">
                          <stop offset="0.110772" stop-color="#B57FD6" />
                          <stop offset="1" stop-color="#B57FD6" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.0361 4.53779) rotate(136.625) scale(5.05367 6.94355)">
                          <stop offset="0.215771" stop-color="#EDECF3" />
                          <stop offset="1" stop-color="#EDECF3" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.7188 16.8124) rotate(-80.1017) scale(9.45321 6.82288)">
                          <stop stop-color="#EDECF3" />
                          <stop offset="1" stop-color="#EDECF3" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint4_linear_18_23558" x1="7.5625" y1="14.1172" x2="14.5" y2="29.8984" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFC74E" />
                          <stop offset="1" stop-color="#F7864E" />
                        </linearGradient>
                        <radialGradient id="paint5_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.8125 29.8984) rotate(-132.274) scale(3.25195 7.57598)">
                          <stop stop-color="#FF8650" />
                          <stop offset="1" stop-color="#FF8650" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint6_linear_18_23558" x1="13.4063" y1="10.7422" x2="13.4062" y2="12.2422" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#F3D04E" />
                          <stop offset="1" stop-color="#F3D04E" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient id="paint7_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0625 11.0547) rotate(126.254) scale(2.32513 5.25171)">
                          <stop stop-color="#FFF760" />
                          <stop offset="1" stop-color="#FFF760" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint8_linear_18_23558" x1="16.5312" y1="21.6797" x2="12.6562" y2="21.6797" gradientUnits="userSpaceOnUse">
                          <stop offset="0.330645" stop-color="#D98A40" />
                          <stop offset="1" stop-color="#D98A40" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_18_23558" x1="10.2812" y1="20.7422" x2="13" y2="20.7422" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFCD63" />
                          <stop offset="1" stop-color="#FFCD63" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient id="paint10_radial_18_23558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7852 18.6172) rotate(34.0609) scale(5.69121 7.82719)">
                          <stop offset="0.21669" stop-color="#564F80" />
                          <stop offset="1" stop-color="#473154" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p class="m-0 text-[#846358] text-lg"><strong>Agnostic Integration</strong> <br /> Do not lock yourself. Work with any of your favorite page builders </p>
              </div>
            </div>
            <p class="text-lg">Build a production-ready website with no performance impact.<br />The latest Tailwind CSS version (3.x) is always available without need to update Winden.</p>
            <div class="mt-16 z-20 relative flex gap-6 flex-col md:flex-row">
              <Link
                className="wp-btn"
                to="https://dplugins.com/products/winden/#product-price">
                Starts from $79
              </Link>
              <Link
                className="wp-btn-outline"
                to="/docs">
                Read Documentation
              </Link>
            </div>
            <figure class="mx-0 my-16 md:my-32 overflow-hidden ">
              <div class="relative">
                <iframe loading="lazy" title="Winden for Bricks Builder" class="rounded-2xl w-full h-full aspect-video" src="https://www.youtube.com/embed/Y4_LBUxsadk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              </div>
            </figure>
            <div class="rounded-lg p-3 md:p-16 md:mt-24">
              <h2 class="text-center ">
                <strong>Focus on Design</strong>
              </h2>
              <p class="text-center text-lg">
                You aren’t wasting energy inventing class names. No more adding silly class names like <code>sidebar-inner-wrapper</code> just to be able to style something, and no more agonizing over the perfect abstract name for something that’s really just a flex container. With utilities, everything is reusable so you rarely need to write new CSS.
              </p>
            </div>
            <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              <div class="border-indigo-200 border-solid border-2 bg-white p-8 rounded-lg">
                <div class="text-center">
                  <img class="h-24 w-24" src="/img/microsoft/fluentui-emoji/handshake_3d.png" />
                </div>
                <h4 class="mt-0">
                  <strong>
                    <span class="text-base uppercase font-normal text-slate-500 tracking-widest">
                      Agnostic Integration
                    </span>
                    <br />
                    Friend of your favorite page builders.
                  </strong>
                </h4>
                <p class="text-justify">
                  Works across the entire WordPress ecosystem and allows you to use Tailwind CSS inside your favorite page builders like Gutenberg, Elementor, Bricks Builder, Oxygen Builder, Zion Builder, etc.
                </p>
              </div>
              <div class="border-indigo-200 border-solid border-2 bg-white p-8 rounded-lg">

                <div class="text-center">
                  <img class="h-24 w-24" src="/img/microsoft/fluentui-emoji/rocket_3d.png" />
                </div>
                <h4 class="mt-0">
                  <strong>
                    <span class="text-base uppercase font-normal text-slate-500 tracking-widest">
                      Performance in mind
                    </span>
                    <br />
                    Lightning-fast and Lightweight website
                  </strong>
                </h4>
                <p class="text-justify">
                  A single cached CSS file for the entire website with less than 10KB. Get higher scores on Google PageSpeed Insights and rank higher on Google Search.
                </p>
              </div>
              <div class="border-indigo-200 border-solid border-2 bg-white p-8 rounded-lg">

                <div class="text-center">
                  <img class="h-24 w-24" src="/img/microsoft/fluentui-emoji/beach_with_umbrella_3d.png" />
                </div>
                <h4 class="mt-0">
                  <strong>
                    <span class="text-base uppercase font-normal text-slate-500 tracking-widest">
                      Developer Experience.
                    </span>
                    <br />
                    Productivity boost. Hello Holiday!
                  </strong>
                </h4>
                <p class="text-justify">
                  Rapidly build modern websites in no time with utility CSS framework. No more writing CSS. No more debugging CSS. No more wasting time on CSS.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="py-24 m-0 ">
          <div class="container mx-auto">
            <h2 class="font-light text-center mb-12"><span class="hidden md:inline-block">Page</span> Builders Compatibility</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
              <div>
                <img src="/img/builder-friends/gutenberg.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
                <h3 class="mt-4 text-[1.75rem] font-light">
                  Gutenberg
                </h3>
              </div>
              <div>
                <img src="/img/builder-friends/oxygen.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
                <h3 class="mt-4 text-[1.75rem] font-light">
                  Oxygen Builder
                </h3>
              </div>
              <div>
                <img src="/img/builder-friends/bricks.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
                <h3 class="mt-4 text-[1.75rem] font-light">
                  Bricks Builder
                </h3>
              </div>
              <div>
                <img src="/img/builder-friends/zion.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
                <h3 class="mt-4 text-[1.75rem] font-light">
                  Zion Builder
                </h3>
              </div>
              <div>
                <img src="/img/builder-friends/cwicly.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
                <h3 class="mt-4 text-[1.75rem] font-light">
                  Cwicly
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
