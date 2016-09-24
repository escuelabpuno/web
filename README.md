# web
sitio web de escuelab

### Preparar el container ###

cat << EOF > Dockerfile
FROM httpd:2.4
COPY . /usr/local/apache2/htdocs
EOF

$ docker build -t web .
$ docker run -dit -p 80:80 --name efimero web
$ docker exec -it efimero bash
$ docker ps
$ docker stop efimero
$ docker rm efimero
