#Base image ref timbru31/node-chrometimbru31/node-chrome
FROM ckr123/node-chromium:latest
WORKDIR /usr/src/app 
COPY package.json package-lock.json ./ 
RUN npm ci 
COPY . . 
ENV CHROME_BIN=/usr/bin/google-chrome 
ENTRYPOINT npm run test

