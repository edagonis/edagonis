async function getUserRepositories() {
  const raw = await fetch(
    "https://api.github.com/users/edagonis/repos"
    // {
    //   headers: {
    //     Authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`,
    //   },
    // }
  )

  const repos = await raw.json()

  return repos
}

export default async (req, res) => {
  try {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")

    const repositories = await getUserRepositories()

    res.end(JSON.stringify({ repositories }))
  } catch (e) {
    res.statusCode = 500
    res.end(JSON.stringify({ repositories: [] }))
  }
}
