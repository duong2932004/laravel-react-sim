# Sim Số Đẹp - Website Bán Sim Số Đẹp

Dự án xây dựng website bán sim số đẹp giúp người dùng dễ dàng tìm kiếm, mua bán sim với các con số đẹp và ý nghĩa.

## Mục lục
- [Giới thiệu](#giới-thiệu)
- [Ứng dụng cần thiết](#ứng-dụng-cần-thiết)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Cài đặt](#cài-đặt)
- [Liên hệ](#liên-hệ)

## Giới thiệu
Dự án bao gồm hai phần:
- **Backend (`back-laravel`)**: Xây dựng bằng Laravel với các chức năng như quản lý sim, xử lý đơn hàng và tích hợp Redis để tối ưu hóa.
- **Frontend (`font-react`)**: Xây dựng bằng React, sử dụng React Query để quản lý trạng thái, cung cấp giao diện người dùng thân thiện và mượt mà.

## Ứng dụng cần thiết
- [**Laragon**](https://laragon.org/) - Môi trường phát triển localhost tất cả trong một.
- [**Visual Studio Code**](https://code.visualstudio.com/) - Trình soạn thảo mã nguồn.
- [**RedisInsight**](https://redis.com/redis-enterprise/redis-insight/) - Công cụ quản lý và theo dõi Redis.
- [**Ubuntu**](https://ubuntu.com/) - Hệ điều hành Linux mã nguồn mở.

## Cấu trúc dự án
Dự án chia thành hai thư mục chính:
- `back-laravel`: Mã nguồn backend.
- `font-react`: Mã nguồn frontend.

## Cài đặt
### 1. Cài đặt Backend (`back-laravel`)

1. **Chuyển vào thư mục backend**:
    ```bash
    cd back-laravel
    ```

2. **Cài đặt các package của Laravel**:
    ```bash
    composer install
    ```

3. **Tạo file cấu hình `.env`**:
    ```bash
    cp .env.example .env
    ```

4. **Cập nhật cấu hình trong `.env`**: Mở file `.env` xóa tất cả và thêm các thông tin cấu hình dưới đây:
    ```plaintext
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
    ```

5. **Khởi tạo cơ sở dữ liệu**:
    ```bash
    php artisan migrate
    ```

6. **Tạo dữ liệu mẫu**:
    ```bash
    php artisan db:seed
    ```

### 2. Cài đặt Frontend (`font-react`)

1. **Chuyển vào thư mục frontend**:
    ```bash
    cd font-react
    ```

2. **Cài đặt các package cần thiết**:
    ```bash
    npm install
    ```

3. **Tạo file cấu hình `.env.development`** và thêm URL API:
    ```plaintext
    VITE_BASE_URL=http://127.0.0.1:8000/api
    ```

## Liên hệ
- **Email**: duong2932004@gmail.com
- **GitHub**: [duong2932004](https://github.com/duong2932004/)
