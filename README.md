# Sim số đẹp
- Dự án làm về web bán sim số đẹp    
## Table of Contents
- [Giới thiệu](#giới-thiệu)
- [Cài đặt](#cài-đặt)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Cách sử dụng](#cách-sử-dụng)
- [Tính năng](#tính-năng)
- [Liên hệ](#liên-hệ)

## Giới thiệu
Dự án này bao gồm hai phần chính:
- `back-laravel`: Backend được xây dựng bằng Laravel.
    + Laravel
    + Sql
    + API
    + Redis
- `font-react`: Frontend được xây dựng bằng React.
    + ReactJS
    + React Query

## Cài đặt
- Cài đặt cho phần Backend (back-laravel):
    cd back-laravel
    composer install
    cp .env.example .env
    php artisan key:generate
    php artisan migrate
    php artisan db:seed(tạo dữ liệu ảo để test)
- Cài đặt cho phần Frontend (font-react)
    cd font-react
    npm install
## Setup .env
- laravel
  ```bash
  APP_NAME=Laravel
  APP_ENV=local
  APP_KEY=base64:uUYaskZ+FhGJM47YP9flaVRof5aKuhDIWo629HR6qs4=
  APP_DEBUG=true
  APP_URL=http://127.0.0.1:8000
  
  LOG_CHANNEL=stack
  LOG_DEPRECATIONS_CHANNEL=null
  LOG_LEVEL=debug
  
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=project-sim
  DB_USERNAME=root
  DB_PASSWORD=
  
  BROADCAST_DRIVER=log
  CACHE_DRIVER=file
  FILESYSTEM_DISK=public
  QUEUE_CONNECTION=sync
  SESSION_DRIVER=file
  SESSION_LIFETIME=120
  
  MEMCACHED_HOST=127.0.0.1
  
  REDIS_HOST=127.0.0.1
  REDIS_PASSWORD=null
  REDIS_PORT=6379
  REDIS_CLIENT=predis
  
  MAIL_MAILER=smtp
  MAIL_HOST=mailpit
  MAIL_PORT=1025
  MAIL_USERNAME=null
  MAIL_PASSWORD=null
  MAIL_ENCRYPTION=null
  MAIL_FROM_ADDRESS="hello@example.com"
  MAIL_FROM_NAME="${APP_NAME}"
  
  AWS_ACCESS_KEY_ID=
  AWS_SECRET_ACCESS_KEY=
  AWS_DEFAULT_REGION=us-east-1
  AWS_BUCKET=
  AWS_USE_PATH_STYLE_ENDPOINT=false
  
  PUSHER_APP_ID=
  PUSHER_APP_KEY=
  PUSHER_APP_SECRET=
  PUSHER_HOST=
  PUSHER_PORT=443
  PUSHER_SCHEME=https
  PUSHER_APP_CLUSTER=mt1
  
  VITE_APP_NAME="${APP_NAME}"
  VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
  VITE_PUSHER_HOST="${PUSHER_HOST}"
  VITE_PUSHER_PORT="${PUSHER_PORT}"
  VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
  VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
- React
  ```bash
  VITE_BASE_URL=http://127.0.0.1:8000/api

### 1. Clone dự án

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
