FROM python:3.10-alpine

RUN mkdir /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN pip install -r ./requirements.txt

EXPOSE 8000

CMD ./scripts/start-server.sh
