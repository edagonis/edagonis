/** @jsx jsx */
import { jsx, useThemeUI, ThemeProvider, Text } from "theme-ui"

import { useState } from "react"
import styled from "styled-components"

import { generateRandomTheme, getDefaultTheme } from "./helper"
import {
  MoonLogo,
  SunLogo,
  ConfigIcon,
} from "../components/atoms/icons/MiscIcons"
import ExitIcon from "../components/atoms/icons/ExitIcon"

const StyledExitIconWrapper = styled.span`
  align-self: flex-end;
  cursor: pointer;
`

const StyledThemeIconWrapper = styled.span(({ theme }) => {
  const {
    colors: { secondary },
  } = theme

  return `
    display: flex;
    alignItems: center;
    justifyContent: center;
    width: 4rem;
    height: 4rem;
    background: ${secondary[0]};
    borderRadius: 50%;
    boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    zIndex: 3;
  `
})

const StyledSettingRow = styled.div`
  display: flex;
  alignitems: center;

  a {
    margin: 0;
  }

  span {
    marginright: 1.2rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => {
  const defaultTheme = getDefaultTheme()
  const [isSettingsPanelOpened, setIsSettingsPanelOpened] = useState(false)
  const [theme, setTheme] = useState(defaultTheme)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  function handleRandomThemeGeneration() {
    const theme = generateRandomTheme(isDarkTheme && "dark")
    console.log(
      "Generating random " + (isDarkTheme ? "dark" : "light") + " theme"
    )
    setTheme(theme)
  }

  function handleThemeTypeToggle() {
    setIsDarkTheme((prev) => !prev)
  }

  function handleSettingsPanelToggle() {
    setIsSettingsPanelOpened((prev) => !prev)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      {children}

      {!isSettingsPanelOpened && (
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            left: "3rem",
            bottom: "3rem",
            width: "4rem",
            height: "4rem",
            background: "${secondary[0]}",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
            zIndex: "3",
          }}
          onClick={handleSettingsPanelToggle}
        >
          <ConfigIcon />
        </div>
      )}

      <div
        sx={{
          visibility: isSettingsPanelOpened ? "visible" : "hidden",
          opacity: isSettingsPanelOpened ? 1 : 0,
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          maxWidth: "30rem",
          padding: "1.5rem 1.5rem 4rem 1.5rem",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "9",
          borderTop: ".5px solid ${secondary[3]}",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
          // background: "linear-gradient(to left bottom, ${primary.map"(
          //   (shade) => shade
          // )}),
          // boxShadow: "0px 4px 4px ${secondary[4]}",
          transition: "all .4s linear",

          "@media (min-width: 60rem": {
            padding: "2.5rem 2.5rem 4rem 2.5rem",
            borderTopLeftRadius: "0",
            borderRight: "1px solid ${secondary[3]}",
          },
        }}
      >
        <StyledExitIconWrapper onClick={handleSettingsPanelToggle}>
          <ExitIcon />
        </StyledExitIconWrapper>

        <StyledSettingRow>
          <span
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "4rem",
              height: "4rem",
              background: "${secondary[0]}",
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
              zIndex: "3",
            }}
            onClick={handleThemeTypeToggle}
          >
            {isDarkTheme ? <SunLogo /> : <MoonLogo />}
          </span>

          <Text onClick={handleThemeTypeToggle}>
            {isDarkTheme ? "switch to light mode" : "switch to dark mode"}
          </Text>
        </StyledSettingRow>

        <StyledSettingRow>
          <Text onClick={handleRandomThemeGeneration}>
            generate random theme
          </Text>
        </StyledSettingRow>
      </div>
    </ThemeProvider>
  )
}

export default ThemeWrapper
