docker build -t travel_backend_manager .

docker stop travel_backend_manager
docker rm travel_backend_manager

docker run -d --name travel_backend_manager -p 4200:4200 travel_backend_manager yarn start