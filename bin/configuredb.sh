#!/bin/bash

database="db_name"

echo "Configuring database: database"

docker exec -it postgres bash
psql -U postgres $database < ./bin/sql/monster.sql

echo "database configured"
