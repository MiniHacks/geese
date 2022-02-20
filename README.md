# Geese: The Hackathon In A Box

This is a boilerplate that we often use for our hackathons. Feel free to use this however you wish!

Please make any PRs for anything you would like to add. 

Run this with the [GitHub CLI](https://cli.github.com/) and [Docker Compose](https://docs.docker.com/compose/):
```bash
gh repo create -p https://github.com/minihacks/geese --clone --public [name] 

# after cloning, start the local server
docker-compose up -d
```
<details>
<summary>If you have a team</summary>

You can add it to a team directly by replacing `minihacks/geese` with your team/project name below:
```bash
gh repo create -p https://github.com/minihacks/geese --clone --private minihacks/geese
```

To make the repo public, you can run
```bash
gh repo edit --visibility public 
```
</details>

## Parts
- Infrastructure
  - [x] Replace NGINX with Caddy
  - [x] Shared Directory
  - [ ] dev.js
- Frontend
  - [X] Latest NextJS Version
  - [ ] Storybook
  - [ ] Component Library
  - [x] NextAuth
  - [ ] ThreeJS
- Backend 
  - [X] SocketIO
- Python
  - [ ] Flask
- MongoDB
  - [ ] MongoDB
