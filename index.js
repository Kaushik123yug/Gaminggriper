require('dotenv').config()
const express = require('express');

const app = express()

const port = 4000

const githubData = {
  "login": "Kaushik123yug",
  "id": 194477771,
  "node_id": "U_kgDOC5d-yw",
  "avatar_url": "https://avatars.githubusercontent.com/u/194477771?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kaushik123yug",
  "html_url": "https://github.com/Kaushik123yug",
  "followers_url": "https://api.github.com/users/Kaushik123yug/followers",
  "following_url": "https://api.github.com/users/Kaushik123yug/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kaushik123yug/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kaushik123yug/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kaushik123yug/subscriptions",
  "organizations_url": "https://api.github.com/users/Kaushik123yug/orgs",
  "repos_url": "https://api.github.com/users/Kaushik123yug/repos",
  "events_url": "https://api.github.com/users/Kaushik123yug/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kaushik123yug/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-10T08:49:58Z",
  "updated_at": "2026-10-10T07:14:55Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
  res.send('iron_grip_gaming')
})

app.get('/login', (req, res) => {
  res.send('<h2>Login at iron_grip_gaming</h2>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Iron Grip Gaming</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 