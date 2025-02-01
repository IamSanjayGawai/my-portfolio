import career_survival from "../assets/images/career-survival.webp";
import vibencode from "../assets/images/vibencode.webp";
import codeinbound from "../assets/images/codeinbound.png";
import phn from "../assets/images/phn.png";
import * as React from 'react'


const WorkWith = () => {
  return (
    <>
      <div>
        <section className="bg-white ">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="lg:text-5xl font-extrabold text-gray-900 text-4xl mb-8 text-center">
              I have <span className="text-green-400">worked with</span>
            </h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400 ">
              <a href="#" className="flex justify-center items-center h-30 w-[200px]">
                <img src={career_survival} />
              </a>
              <a href="#" className="flex justify-center items-center h-15 w-[150px]">
                <img src={vibencode} />
              </a>
              <a href="#" className="flex justify-center items-center h-15 w-[200px]">
                <img src={codeinbound} />
              </a>

              <a href="#" className="flex justify-center items-center h-15 w-[150px]">
                <svg
                  width="148"
                  height="26"
                  viewBox="0 0 148 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1687_3847)">
                    <path
                      d="M38.0979 18.0323C35.2241 18.0323 33.0464 15.8546 33.0464 13.0036C33.0464 10.1527 35.2241 7.99255 38.0979 7.99255C40.4892 7.99255 42.3461 9.44438 42.8814 11.6397H40.9181C40.418 10.542 39.3476 9.86885 38.0979 9.86885C36.3666 9.86885 35.0633 11.2319 35.0633 13.0028C35.0633 14.7736 36.3842 16.1542 38.0979 16.1542C39.3652 16.1542 40.382 15.4811 40.9005 14.3131H42.8989C42.3813 16.5436 40.4716 18.0314 38.0979 18.0314V18.0323Z"
                      fill="#414141"
                    />
                    <path
                      d="M49.3077 18.0323C46.3452 18.0323 44.1499 15.8897 44.1499 13.0036C44.1499 10.1176 46.3452 7.99255 49.3077 7.99255C52.2703 7.99255 54.448 10.1351 54.448 13.0036C54.448 15.8721 52.2527 18.0323 49.3077 18.0323ZM49.3077 16.1551C51.1287 16.1551 52.4311 14.8448 52.4311 13.0036C52.4311 11.1625 51.1278 9.86973 49.3077 9.86973C47.4877 9.86973 46.1668 11.1801 46.1668 13.0036C46.1668 14.8272 47.4701 16.1551 49.3077 16.1551Z"
                      fill="#414141"
                    />
                    <path
                      d="M64.0552 4.80591H66.0361V17.802H64.5368L64.2688 16.7044C63.4119 17.5366 62.2167 18.0323 60.8783 18.0323C57.9509 18.0323 55.8628 15.8721 55.8628 13.0212C55.8628 10.1703 57.9509 7.99254 60.8783 7.99254C62.1095 7.99254 63.1984 8.39944 64.0552 9.10777V4.80591ZM61.0206 16.1551C62.8416 16.1551 64.18 14.792 64.18 13.0036C64.18 11.2152 62.8416 9.86972 61.0206 9.86972C59.1997 9.86972 57.8797 11.2152 57.8797 13.0036C57.8797 14.792 59.2182 16.1551 61.0206 16.1551Z"
                      fill="#414141"
                    />
                    <path
                      d="M68.8291 6.75426V4.71802H70.8636V6.75426H68.8291ZM68.8651 17.7844V8.22367H70.846V17.7844H68.8651Z"
                      fill="#414141"
                    />
                    <path
                      d="M78.745 8.01099C81.0115 8.01099 82.422 9.67549 82.422 12.0299V17.7844H80.4411V12.4376C80.4411 10.7028 79.6739 9.78183 78.2282 9.78183C76.7113 9.78183 75.6401 10.9858 75.6401 12.6679V17.7844H73.6592V8.22366H75.0337L75.4265 9.56915C76.1401 8.59541 77.3362 8.01099 78.7458 8.01099H78.745Z"
                      fill="#414141"
                    />
                    <path
                      d="M92.981 8.22364H94.2843V16.5453C94.2843 19.5904 92.4633 21.45 89.4832 21.45C87.0023 21.45 85.2534 20.1748 84.7718 18.0859H86.7351C87.1104 19.1308 88.2529 19.7143 89.4665 19.7143C91.1267 19.7143 92.3579 18.6167 92.3579 16.8107V16.3677C91.5186 17.0937 90.4122 17.519 89.1625 17.519C86.4671 17.519 84.3975 15.4476 84.3975 12.7566C84.3975 10.0657 86.468 7.99426 89.1625 7.99426C90.573 7.99426 91.8042 8.56111 92.6787 9.46366L92.9827 8.22452L92.981 8.22364ZM89.376 15.6954C91.0897 15.6954 92.3385 14.4563 92.3385 12.7566C92.3385 11.057 91.1073 9.83541 89.376 9.83541C87.6447 9.83541 86.4126 11.0921 86.4126 12.7566C86.4126 14.4211 87.6623 15.6954 89.376 15.6954Z"
                      fill="#414141"
                    />
                    <path
                      d="M101.867 8.04614C104.187 8.04614 105.633 9.69307 105.633 12.1186V17.7844H104.758V12.2962C104.758 10.1184 103.616 8.84324 101.67 8.84324C99.7244 8.84324 98.2611 10.419 98.2611 12.3313V17.7844H97.3867V8.22367H98.0291L98.2075 10.1712C98.9036 8.87839 100.278 8.04614 101.866 8.04614H101.867Z"
                      fill="#414141"
                    />
                    <path
                      d="M108.695 6.2577V5.03613H109.802V6.2577H108.695ZM108.82 17.7844V8.22364H109.695V17.7844H108.82Z"
                      fill="#414141"
                    />
                    <path
                      d="M117.536 8.04614C119.857 8.04614 121.302 9.69307 121.302 12.1186V17.7844H120.428V12.2962C120.428 10.1184 119.285 8.84324 117.34 8.84324C115.394 8.84324 113.931 10.419 113.931 12.3313V17.7844H113.056V8.22367H113.699L113.877 10.1712C114.573 8.87839 115.948 8.04614 117.536 8.04614H117.536Z"
                      fill="#414141"
                    />
                    <path
                      d="M124.597 6.2577V5.03613H125.685V6.2577H124.597ZM122.062 21.1837V20.3866H122.472C123.883 20.3866 124.704 19.572 124.704 18.1737V8.22364H125.578V18.2274C125.578 20.0333 124.401 21.1846 122.58 21.1846H122.062V21.1837Z"
                      fill="#414141"
                    />
                    <path
                      d="M137.359 8.22364H138.073V17.7844H137.341L137.234 15.713C136.396 17.0937 134.896 17.9795 133.04 17.9795C130.219 17.9795 128.095 15.8369 128.095 13.0045C128.095 10.172 130.219 8.047 133.04 8.047C134.896 8.047 136.395 8.93198 137.234 10.3135L137.359 8.22452V8.22364ZM133.093 17.1473C135.467 17.1473 137.198 15.394 137.198 13.0045C137.198 10.6149 135.467 8.87925 133.093 8.87925C130.719 8.87925 128.988 10.6677 128.988 13.0045C128.988 15.3413 130.755 17.1473 133.093 17.1473Z"
                      fill="#414141"
                    />
                    <path
                      d="M144.305 17.9795C142.092 17.9795 140.7 16.8819 140.575 15.0935H141.432C141.556 16.4214 142.663 17.1824 144.323 17.1824C145.983 17.1824 147.125 16.4214 147.125 15.2174C147.125 13.7304 145.679 13.4641 144.18 13.2163C142.52 12.9333 140.753 12.6143 140.753 10.6492C140.753 9.09107 142.164 8.04614 144.251 8.04614C146.338 8.04614 147.677 9.10865 147.749 10.8083H146.91C146.839 9.55158 145.857 8.82566 144.233 8.82566C142.609 8.82566 141.609 9.55158 141.609 10.6317C141.609 11.9244 142.912 12.1362 144.393 12.3849C146.071 12.6679 147.998 12.9869 147.998 15.1822C147.998 16.8819 146.516 17.9795 144.304 17.9795H144.305Z"
                      fill="#414141"
                    />
                    <path
                      d="M12.8274 25.9821C19.9117 25.9821 25.6548 20.1698 25.6548 13C25.6548 5.83021 19.9117 0.0179443 12.8274 0.0179443C5.74301 0.0179443 0 5.83021 0 13C0 20.1698 5.74301 25.9821 12.8274 25.9821Z"
                      fill="#414141"
                    />
                    <path
                      d="M4.65156 13.0406C4.61289 14.365 4.84315 15.6894 5.26674 16.9733C5.65167 18.0639 6.38285 18.999 7.34605 19.6608C8.46216 20.3621 9.74349 20.6345 11.0802 20.6345H19.2797V16.729H11.067C9.06152 16.729 8.09833 15.3501 8.09833 13.0485V13.0511C8.09833 10.7495 9.0624 9.37585 11.067 9.37585H19.2788V5.47034H11.0793C9.78304 5.47034 8.46216 5.74277 7.34517 6.44408C6.38285 7.10584 5.65167 8.04003 5.26586 9.13154C4.84227 10.4164 4.61201 11.7399 4.65068 13.0643"
                      fill="url(#paint0_linear_1687_3847)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.63184 12.2417L13.4811 12.9861C13.4811 12.9861 10.6574 15.9547 9.63184 12.2417Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6591 12.2549L14.9268 13.0379C14.9268 13.0379 18.1591 15.975 18.6591 12.2549Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1687_3847"
                      x1="4.64717"
                      y1="13.0529"
                      x2="19.2788"
                      y2="13.0529"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F16222" />
                      <stop offset="0.26" stop-color="#F37421" />
                      <stop offset="0.71" stop-color="#F68D1E" />
                      <stop offset="1" stop-color="#F7981D" />
                    </linearGradient>
                    <clipPath id="clip0_1687_3847">
                      <rect
                        width="148"
                        height="25.9641"
                        fill="white"
                        transform="translate(0 0.0179443)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="#" className="flex justify-center items-center h-15 w-[150px]">
                <img src={phn} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkWith;
