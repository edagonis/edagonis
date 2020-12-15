/** @jsx jsx */
import { jsx, Text, Flex } from "theme-ui"

import { Layout } from "../components/organisms/Layout/Layout"
import { fetcher, getHost } from "../helpers/api"

export default function ProjectsPage(props) {
  console.log(props)
  return (
    <Layout>
      <Text variant="heading1">projects showcase</Text>
      <Text variant="heading2">fully-testable-react-hooks</Text>
    </Layout>
  )
}

ProjectsPage.getInitialProps = async (ctx) => {
  const url = getHost(ctx) + "/api/repositories"
  const data = await fetcher(url)

  return { data }
}
