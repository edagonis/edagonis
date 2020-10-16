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

const generateExtraColorsFromPalette = (colors) => {
  const primaryGradient = `linear-gradient(to left bottom, ${colors.primary.map(
    (color) => color
  )})`
  const secondaryGradient = `linear-gradient(to left bottom, ${colors.secondary.map(
    (color) => color
  )})`

  return {
    primaryGradient,
    secondaryGradient,
  }
}

export const generateRandomTheme = () => {
  const primary = generateMonochromaticPalette()
  const secondary = generateMonochromaticPalette("secondary")

  const mainColors = {
    primary,
    secondary,
  }

  /** generate gradients */
  const darkColors = {
    ...mainColors,
    ...generateExtraColorsFromPalette(mainColors),
  }

  const darkTheme = getThemeFromColors(darkColors)

  const mainLightColors = {
    primary: secondary,
    secondary: primary,
  }

  const lightColors = {
    ...mainLightColors,
    ...generateExtraColorsFromPalette(mainLightColors),
  }

  const lightTheme = getThemeFromColors(lightColors)

  return {
    dark: darkTheme,
    light: lightTheme,
  }
}

export const getDefaultTheme = () => {
  /** default theme */
  const darkColors = {
    ...defaultColorPalette,
    ...generateExtraColorsFromPalette(defaultColorPalette),
  }
  const darkTheme = getThemeFromColors(darkColors)

  const mainLightColors = {
    primary: defaultColorPalette.secondary,
    secondary: defaultColorPalette.primary,
  }

  const lightColors = {
    ...mainLightColors,
    ...generateExtraColorsFromPalette(mainLightColors),
  }

  const lightTheme = getThemeFromColors(lightColors)

  return {
    dark: darkTheme,
    light: lightTheme,
  }
}
