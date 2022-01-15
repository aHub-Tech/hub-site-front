FROM node:12.16.3-alpine3.9 as builder

WORKDIR /app

COPY . .

RUN npm install \
	--prefer-offline \
	--frozen-lockfile \
	--non-interactive \
	--production=false

RUN npm run build

RUN rm -rf node_modules && \
	NODE_ENV=production npm install \
	--prefer-offline \
	--pure-lockfile \
	--non-interactive \
	--production=true

FROM node:12.16.3-alpine3.9

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "run", "start" ]
