/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Fragment } from "react"

const ColorGradient = ({ type = "secondary" }) => {
  const { theme } = useThemeUI()

  const gradientsByType = {
    primary: [
      theme.colors.primary[4],
      theme.colors.primary[3],
      theme.colors.primary[2],
      theme.colors.primary[1],
    ],
    secondary: [
      theme.colors.secondary[0],
      theme.colors.secondary[1],
      theme.colors.secondary[2],
      theme.colors.secondary[3],
    ],
  }

  const currentGradientColors = gradientsByType[type]

  return (
    <Fragment>
      <stop sx={{ stopColor: currentGradientColors[0] }}></stop>
      <stop offset="0.316" sx={{ stopColor: currentGradientColors[1] }}></stop>
      <stop offset="0.665" sx={{ stopColor: currentGradientColors[2] }}></stop>
      <stop offset="1" sx={{ stopColor: currentGradientColors[3] }}></stop>
    </Fragment>
  )
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="328"
      height="240"
      fill="none"
      viewBox="0 0 328 240"
      sx={{
        opacity: 1,
        "& *": {
          transition: "all .3s linear",
        },
        "g:not(#Curve1), circle, path": {
          "&:hover": {
            opacity: 0.9,
          },
        },
      }}
    >
      <g id="logo">
        <path
          id="Golden Circle"
          fill="url(#paint0_linear)"
          sx={{
            stroke: "primary.2",
          }}
          strokeWidth="3"
          d="M255.423 112c0 50.492-40.931 91.423-91.423 91.423-50.491 0-91.423-40.931-91.423-91.423 0-50.491 40.932-91.423 91.423-91.423 50.492 0 91.423 40.932 91.423 91.423z"
        ></path>
        <circle
          id="Earth"
          cx="163.999"
          cy="112.246"
          r="72.346"
          fill="url(#paint1_linear)"
          stroke="url(#paint2_linear)"
          strokeWidth="3"
        ></circle>
        <g id="Traces" filter="url(#filter0_d)">
          <path
            fill="url(#paint3_linear)"
            fillRule="evenodd"
            d="M127.241 148.923h-.164.176-.012z"
            clipRule="evenodd"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M137.347 76.454a36.959 36.959 0 00-10.024-1.377h-.246v.079a36.715 36.715 0 004.94 18.383 37.106 37.106 0 0112.508-12.914 46.033 46.033 0 01-7.178-4.171z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M127.323 148.923c3.474 0 6.836-.48 10.024-1.377l.008-.006.082-.058a47.883 47.883 0 011.57-1.059l.142-.092a46.13 46.13 0 015.376-2.956 37.106 37.106 0 01-12.508-12.914 36.752 36.752 0 00-4.94 18.462H127.323z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            fillRule="evenodd"
            d="M100.986 137.878z"
            clipRule="evenodd"
          ></path>
          <path
            fill="url(#paint3_linear)"
            fillRule="evenodd"
            d="M122.796 75.352a37.519 37.519 0 014.281-.275v.079a36.715 36.715 0 004.94 18.383"
            clipRule="evenodd"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M225.708 84.856a118.897 118.897 0 00-18.96-9.282 36.803 36.803 0 0118.96 9.282z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M59.807 128.753l11.281-15.273c-.007-.453-.01-.908-.011-1.363a119.599 119.599 0 00-11.27 16.636z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M256.912 113.48l11.281 15.273a119.641 119.641 0 00-11.27-16.636c-.001.455-.004.91-.011 1.363z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M255.818 112h1.01a119.702 119.702 0 00-6.348-7.227l5.338 7.227z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M256.912 113.48c.007-.453.01-.908.011-1.363l-.095-.117h-1.01l1.094 1.48z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M72.182 112l5.338-7.227A120.056 120.056 0 0071.172 112h1.01z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M71.077 112.117c0 .455.004.91.011 1.363l1.094-1.48h-1.01l-.095.117z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M164 19.077V0a19.609 19.609 0 00-12.243 4.267 19.748 19.748 0 00-6.11 8.272l-7.526 10.19a92.364 92.364 0 016.24-1.573c.609 8.282 6.339 15.14 14.036 17.42 1.776.526 3.657.809 5.603.809V19.077z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M164 0v39.384c1.946 0 3.827-.282 5.603-.808 7.697-2.28 13.427-9.138 14.036-17.42 2.107.454 4.188.978 6.24 1.572l-7.526-10.189a19.748 19.748 0 00-6.11-8.272A19.609 19.609 0 00164 0z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M102.292 84.856a36.803 36.803 0 0118.96-9.282 118.4 118.4 0 015.858-2.073c.086-2.056.341-4.068.75-6.023a45.971 45.971 0 01-8.938-18.757L77.52 104.773a119.917 119.917 0 0124.772-19.917z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M206.748 75.574a36.803 36.803 0 0118.96 9.282 119.908 119.908 0 0124.772 19.917l-41.402-56.052a45.971 45.971 0 01-8.938 18.757c.409 1.956.664 3.968.75 6.023a118.4 118.4 0 015.858 2.073z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M195.983 93.538a36.75 36.75 0 004.94-18.461h-.246c-3.474 0-6.836.48-10.024 1.377a46.033 46.033 0 01-7.178 4.17 37.106 37.106 0 0112.508 12.914z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M190.653 147.546a36.959 36.959 0 0010.024 1.377h.246v-.079a36.719 36.719 0 00-4.94-18.383 37.106 37.106 0 01-12.508 12.914 46.08 46.08 0 017.178 4.171z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M182.339 144.054a36.644 36.644 0 008.314 3.492 46.08 46.08 0 00-7.178-4.171c-.374.233-.753.459-1.136.679z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            fillRule="evenodd"
            d="M178.216 141.308a37.047 37.047 0 004.123 2.746c.383-.22.762-.446 1.136-.679a45.743 45.743 0 00-5.259-2.067z"
            clipRule="evenodd"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M137.347 147.546a36.671 36.671 0 008.315-3.492c-.384-.22-.763-.446-1.137-.679a46.13 46.13 0 00-5.376 2.956l-.142.092c-.531.343-1.054.696-1.57 1.059l-.082.058-.008.006z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M145.662 144.054a37.034 37.034 0 004.122-2.746 45.737 45.737 0 00-5.259 2.067c.374.233.753.459 1.137.679z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M144.525 80.625c.374-.233.753-.46 1.137-.68a36.712 36.712 0 00-8.315-3.491 46.033 46.033 0 007.178 4.17z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M149.784 82.692a36.957 36.957 0 00-4.122-2.746c-.384.22-.763.446-1.137.679a45.813 45.813 0 005.259 2.067z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M182.339 79.946a36.97 36.97 0 00-4.123 2.746 45.813 45.813 0 005.259-2.067c-.374-.233-.753-.46-1.136-.68z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M182.339 79.946c.383.22.762.446 1.136.679a46.033 46.033 0 007.178-4.171 36.685 36.685 0 00-8.314 3.492z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M121.252 75.574a118.897 118.897 0 00-18.96 9.282 36.803 36.803 0 0118.96-9.282z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M200.923 112a36.746 36.746 0 01-4.94 18.461 36.719 36.719 0 014.94 18.383v.079a37.129 37.129 0 007.818-.883 36.6 36.6 0 009.159-3.371 37.122 37.122 0 0013.328-11.927A36.75 36.75 0 00237.6 112h-36.677z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M200.923 112H237.6c0-10.733-4.58-20.397-11.892-27.144a118.897 118.897 0 00-18.96-9.282 36.934 36.934 0 00-5.825-.497 36.75 36.75 0 01-4.94 18.461 36.75 36.75 0 014.94 18.462z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M90.4 112h36.677a36.75 36.75 0 014.94-18.462 36.715 36.715 0 01-4.94-18.382v-.08a37.362 37.362 0 00-4.753.336l-.029.004c-.349.048-.697.1-1.043.158a118.897 118.897 0 00-18.96 9.282C94.98 91.603 90.4 101.267 90.4 112z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M127.077 148.923a36.752 36.752 0 014.94-18.462 36.746 36.746 0 01-4.94-18.461H90.4A36.76 36.76 0 0095 129.864a37.105 37.105 0 0012.923 13.559 36.777 36.777 0 0019.153 5.5z"
          ></path>
          <path
            fill="url(#paint3_linear)"
            d="M118.505 193.043C90.6 177.344 71.622 147.651 71.089 113.48l-11.282 15.273C50.132 146 44.615 165.894 44.615 187.077c0 5.851.421 11.604 1.235 17.231h76.111c7.259 15.971 23.352 27.077 42.039 27.077s34.78-11.106 42.039-27.077h76.111a120.301 120.301 0 001.235-17.231c0-21.183-5.517-41.077-15.192-58.324l-11.281-15.273c-.534 34.171-19.512 63.864-47.417 79.563l.036-.209a46.48 46.48 0 00.623-7.603 45.953 45.953 0 00-10.014-28.709c-3.503 16.746-18.353 29.324-36.14 29.324s-32.637-12.578-36.14-29.324l-.005.006-.016.019-.149.189a45.957 45.957 0 00-9.844 28.495c0 2.662.226 5.272.659 7.812z"
          ></path>
        </g>
        <g id="Curve1" filter="url(#filter1_d)">
          <path
            fill="url(#paint35_linear)"
            d="M164.001 19.692c-92.307 92.308-44.308 173.539 0 184.616 44.308-11.077 92.308-92.308 0-184.616z"
          ></path>
          <path
            stroke="url(#paint36_linear)"
            strokeWidth="5"
            d="M164.001 19.692c-92.307 92.308-44.308 173.539 0 184.616 44.308-11.077 92.308-92.308 0-184.616z"
          ></path>
        </g>
        <g id="Curve2" filter="url(#filter2_d)" opacity="0.75">
          <path
            stroke="url(#paint37_linear)"
            strokeWidth="5"
            d="M163.999 38.4c-70.13 52.923-43.052 132.677 0 147.446 43.077-14.769 70.153-94.523 0-147.446z"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="328"
          height="239.385"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d"
          width="118.454"
          height="198.728"
          x="104.774"
          y="16.157"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter2_d"
          width="99.069"
          height="161.221"
          x="114.474"
          y="35.268"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="256.923"
          x2="71.077"
          y1="19.077"
          y2="204.923"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="primary" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="90.153"
          x2="237.845"
          y1="186.092"
          y2="38.4"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="secondary" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="90.153"
          x2="237.845"
          y1="186.092"
          y2="38.4"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="secondary" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="4"
          x2="223.733"
          y1="231.385"
          y2="-72.501"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="secondary" />
        </linearGradient>

        <linearGradient
          id="paint35_linear"
          x1="216.727"
          x2="57.707"
          y1="19.692"
          y2="110.524"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="primary" />
        </linearGradient>
        <linearGradient
          id="paint36_linear"
          x1="111.276"
          x2="270.296"
          y1="204.308"
          y2="113.476"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="secondary" />
        </linearGradient>
        <linearGradient
          id="paint37_linear"
          x1="120.965"
          x2="249.367"
          y1="185.846"
          y2="110.879"
          gradientUnits="userSpaceOnUse"
        >
          <ColorGradient type="secondary" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
