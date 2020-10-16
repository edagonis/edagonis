import { defaultColorPalette, theme } from "./theme"
const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateMonochromaticPalette = (paletteType = "primary") => {
  const monochromaticVariationsQuantity = 5

  const hue = getRandomNumber(360, 0)
  const saturation = getRandomNumber(100, 0)
  let lightness =
    paletteType === "primary"
      ? getRandomNumber(65, 0)
      : getRandomNumber(100, 85)

  let colors = []

  for (let i = 0; i < monochromaticVariationsQuantity; i++) {
    if (i !== 0) {
      lightness -= lightness > 10 ? 10 : 0
    }

    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
  }

  return colors
}

const getThemeFromColors = (colors) => {
  const defaultTheme = {
    ...theme,
    colors,
  }

  return defaultTheme
}

export const generateRandomTheme = (type = "dark") => {
  const darkColors = {
    primary: generateMonochromaticPalette(),
    secondary: generateMonochromaticPalette("secondary"),
  }
  const darkTheme = getThemeFromColors(darkColors)
  const lightColors = {
    primary: generateMonochromaticPalette("secondary"),
    secondary: generateMonochromaticPalette(),
  }

  const lightTheme = getThemeFromColors(lightColors)

  return {
    dark: darkTheme,
    light: lightTheme,
  }
}

export const getDefaultTheme = () => {
  /** default theme */
  const darkTheme = getThemeFromColors(defaultColorPalette)

  let primary = [],
    secondary = []
  for (let i = 0; i < 4; i++) {
    primary.push(defaultColorPalette["primary" + i])
    secondary.push(defaultColorPalette["secondary" + i])
  }
  const lightColors = {
    primary,
    secondary,
  }

  const lightTheme = getThemeFromColors(lightColors)

  return {
    dark: darkTheme,
    light: lightTheme,
  }
}
