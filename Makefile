# Makefile version 0.0.1
# Author: Soumyadip Bhattacharjya
# github: github.com/SoumyaCO

db-create:
	@docker run --name kavya-db \
		-e POSTGRES_USER=postgres \
		-e POSTGRES_PASSWORD=mysecretpassword \
		-e POSTGRES_DB=kavya \
		-p 5432:5432 \
		-v postgres-data:/var/lib/postgresql/data \
		-d postgres:17

db-stop:
	@docker stop kavya-db && docker rm kavya-db

db-start:
	@docker start kavya-db

# site commands
dev:
	npm run dev

build:
	npm run build 
