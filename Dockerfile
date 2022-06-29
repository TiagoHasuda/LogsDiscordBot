FROM 16.15.0 AS production

WORKDIR /projects/logsDiscordBot

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
