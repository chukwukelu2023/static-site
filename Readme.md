# Set Up Nginx server

## Install Nginx Server in Ubuntu
    sudo apt update && sudo apt upgrade
    sudo apt install nginx -y
    sudo systemctl status nginx
    sudo systemctl start nginx

## Useful Commands
    sudo nginx -s reload
## Clone the repo and configure your Nginx to serve the file

## Serving Static Files With Nginx Locally 
run this command
docker run oluchioraekwe/ngnix:v.1.0