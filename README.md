<!--
title: 'Serverless Nodejs Rest API with TypeScript And MongoDB Atlas'
description: 'This is Weather REST API for AWS Lambda By Serverless framwork with TypeScript and MongoDB Atlas.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/teammob'
authorName: 'Yucel Zengin'
-->
# Serverless Nodejs Rest API with TypeScript And MongoDB Atlas

This is simple REST API example for AWS Lambda By Serverless framwork with TypeScript and MongoDB Atlas.

## Use Cases

* REST API with typescript
* MongoDB Atlas data storage
* Multi-environment management under Serverless
* Mocha unit tests and lambda-tester interface test
* AWS lambda function log view

## Invoke the function locally

```bash
serverless invoke local --function find
```

Which should result in:

```bash
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.

  "statusCode": 200,
    "body": "{\"code\":0,\"message\":\"success\",\"data\":[{\"_id\":\"5ff739d833d3184117c2cdcf\",\"cityId\":2643743,\"country\":\"GB\",\"name\":\"London\",\"coord\":{\"lon\":-0.1257,\"lat\":51.5085},\"weather\":{\"id\":804,\"main\":\"Clouds\",\"description\":\"overcast clouds\"},\"main\":{\"temp\":1.44,\"pressure\":1017,\"humidity\":70,\"temp_min\":0,\"temp_max\":0},\"createdAt\":\"2021-01-07T16:42:00.941Z\",\"__v\":0}]}"
}

```

## Deploy

### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm run local``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

The expected result should be similar to:

```
Serverless: Typescript compiled.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Installing dependencies for custom CloudFormation resources...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service weather-rest-api-app.zip file to S3 (2.36 MB)...
Serverless: Uploading custom CloudFormation resources...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............................................
Serverless: Stack update finished...
Service Information
service: weather-rest-api-app
stage: dev
region: us-east-1
stack: weather-rest-api-app-dev
resources: 51
api keys:
  None
endpoints:
  POST - XXXX.amazonaws.com/dev/weather
  PUT - XXXX.amazonaws.com/dev/weather/{id}
  GET - XXXX.amazonaws.com/dev/weather
  GET - XXXX.amazonaws.com/dev/weather/{id}
  DELETE - XXXX.amazonaws.com/dev/weather/{id}
  GET - XXXX.amazonaws.com/dev/openweather/v1.0/{location}
  GET - XXXX.amazonaws.com/dev/temperature/v1.0/{city}
  GET - XXXX.amazonaws.com/dev/temperature/v1.0/{city}/{selectedmonth}
functions:
  create: weather-rest-api-app-dev-create
  update: weather-rest-api-app-dev-update
  find: weather-rest-api-app-dev-find
  findOne: weather-rest-api-app-dev-findOne
  deleteOne: weather-rest-api-app-dev-deleteOne
  openWeather: weather-rest-api-app-dev-openWeather
  temperature: weather-rest-api-app-dev-temperature
  temperaturemonth: weather-rest-api-app-dev-temperaturemonth
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Publishing service to the Serverless Dashboard...
Serverless: Successfully published your service to the Serverless Dashboard: https://app.serverless.com/testcompany/apps/weather-rest-api-app/weather-rest-api-app/dev/us-east-1

```

## Usage

send an HTTP request directly to the endpoint using a tool like curl

```
curl https://XXXX.amazonaws.com/dev/weather
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).
