/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"

import React from "react"

export function SunLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        sx={{
          stroke: "primary2",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      ></path>
    </svg>
  )
}

export function MoonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        sx={{
          stroke: "primary2",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
      ></path>
    </svg>
  )
}

export function ConfigIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        sx={{
          stroke: "primary2",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
      ></path>
    </svg>
  )
}
