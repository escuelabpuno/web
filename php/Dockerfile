FROM php:7.0-fpm

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng12-dev \
    && docker-php-ext-install -j$(nproc) iconv mcrypt \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd

ARG PUID=1000
ARG PGID=1000
RUN groupadd -g $PGID escuelab && \
	useradd -u $PUID -g escuelab -m escuelab && \
	usermod -aG www-data escuelab

RUN mkdir /drupal

WORKDIR /drupal
