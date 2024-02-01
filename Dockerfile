FROM mcr.microsoft.com/playwright:v1.41.1-jammy

WORKDIR /test

COPY . /test

RUN npm install

CMD ["npm", "run", "api-tests"]