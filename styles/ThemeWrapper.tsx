/** @jsx jsx */
import { jsx, ThemeProvider, Link as ThemeLink, Flex } from "theme-ui"

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

const SettingsRow = ({ children }) => (
  <div
    sx={{
      display: "flex",
      alignItems: "center",

      a: {
        margin: "0",
      },

      span: {
        marginRight: "1.2rem",
      },

      "&:not(:last-child)": {
        marginBottom: "1.2rem",
      },
    }}
  >
    {children}
  </div>
)
/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => {
  const defaultTheme = getDefaultTheme()
  const [isSettingsPanelOpened, setIsSettingsPanelOpened] = useState(false)
  const [theme, setTheme] = useState(defaultTheme)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  function handleRandomThemeGeneration() {
    const theme = generateRandomTheme()

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
        <Flex
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            left: "3rem",
            bottom: "3rem",
            width: "4rem",
            height: "4rem",
            backgroundColor: "secondary.0",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
            zIndex: "3",
          }}
          onClick={handleSettingsPanelToggle}
        >
          <ConfigIcon />
        </Flex>
      )}

      <Flex
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
          borderTop: ".5px solid",
          borderRight: ".5px solid",
          borderTopRightRadius: "8px",
          borderColor: "secondary.3",
          background: (theme) => theme.colors.primaryGradient,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          transition: "all .4s linear",

          "@media (min-width: 60rem)": {
            padding: "2.5rem 2.5rem 4rem 2.5rem",
            borderTopLeftRadius: "0",
            borderRight: "1px solid ${secondary[3]}",
          },
        }}
      >
        <StyledExitIconWrapper onClick={handleSettingsPanelToggle}>
          <ExitIcon />
        </StyledExitIconWrapper>

        <SettingsRow>
          <span
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "4rem",
              height: "4rem",
              backgroundColor: "secondary.0",
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
              zIndex: "3",
            }}
            onClick={handleThemeTypeToggle}
          >
            {isDarkTheme ? <SunLogo /> : <MoonLogo />}
          </span>

          <ThemeLink onClick={handleThemeTypeToggle}>
            {isDarkTheme ? "switch to light mode" : "switch to dark mode"}
          </ThemeLink>
        </SettingsRow>

        <SettingsRow>
          <ThemeLink onClick={handleRandomThemeGeneration}>
            generate random theme
          </ThemeLink>
        </SettingsRow>
      </Flex>
    </ThemeProvider>
  )
}

export default ThemeWrapper
