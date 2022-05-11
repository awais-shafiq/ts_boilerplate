#!/bin/bash

set -e

echo "Running migrations"
yarn migrate

echo "Starting server"
yarn start