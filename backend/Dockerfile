FROM ubuntu:22.04

RUN apt-get update && apt-get install -y python3-pip python3-dev && apt-get clean
WORKDIR /djangoproject
ADD . /djangoproject
RUN pip3 install -r requirements.txt

ENV PYTHONUNBUFFERED=1

EXPOSE 80
CMD [ "gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]