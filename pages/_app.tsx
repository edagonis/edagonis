import React from "react"
import Head from "next/head"
import { useThemeUI, ThemeProvider } from "theme-ui"
import withGA from "next-ga"
import { Router } from "next/router"

import "nprogress/nprogress.css" //styles of nprogress
import "normalize.css/normalize.css"
import { createGlobalStyle } from "styled-components"

import ThemeWrapper from "../styles/ThemeWrapper"

const GlobalStyleRenderer = () => {
  const { theme } = useThemeUI()

  const GlobalStyle = createGlobalStyle`
    html {
      font-size: 62.5%;
    }

    html, body, #__next {
      display: flex;
      flex: 1 auto;
      flex-direction: column;
      min-height: 100%;
    }

    body {
      font-family: 'Baloo 2', Roboto, "Segoe UI", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", cursive, sans-serif;
      font-size: 1.6rem;
      text-rendering: optimizeLegibility;
    }

    img {
      max-width: 100%;
      heigith: auto;
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors.secondary2};
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `

  return <GlobalStyle />
}

function App(props) {
  const { Component, pageProps } = props

  return (
    <ThemeWrapper>
      <Head>
        <title>Edagonis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyleRenderer />

      <Component {...pageProps} />
    </ThemeWrapper>
  )
}
export default withGA("UA-166241319-1", Router)(App)
