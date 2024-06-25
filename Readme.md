# Set Up Nginx server

## Install Nginx Server in Ubuntu
    sudo apt update && sudo apt upgrade
    sudo apt install nginx -y
    sudo systemctl status nginx
    sudo systemctl start nginx

## Useful Commands
    sudo nginx -s reload

## Serving Static Files
cd /srv and clone a git repo 