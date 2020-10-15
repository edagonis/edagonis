/** @jsx jsx */
import { jsx, Text, Flex } from "theme-ui"
import Logo from "../components/atoms/icons/Logo"

export default function Home() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        flex: "1 auto",
      }}
      className="container"
    >
      <main
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 auto",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            margin: "auto",
            height: "100%",
          }}
        >
          <Logo />
          <canvas id="audio_visual"></canvas>
        </Flex>
      </main>
    </Flex>
  )
}
