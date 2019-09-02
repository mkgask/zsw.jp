
[![CircleCI](https://circleci.com/gh/mkgask/zsw.jp.svg?style=svg)](https://circleci.com/gh/mkgask/zsw.jp)

## available commands

### before login

- docker-compose build
- docker-compose up -d
- docker-compose exec node bash  
(if use windows, winpty docker-compose exec node bash)

### after login

- npm run build
- npm run serve

### after npm run serve

- access to localhost:8080