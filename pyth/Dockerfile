FROM python:3.9-slim

## Uncomment if you need any system libraries
# RUN apt-get update && apt-get install -y ffmpeg

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

ENV PORT 8000
EXPOSE 8000

ENTRYPOINT [ "python3", "-m", "python_backend" ]
