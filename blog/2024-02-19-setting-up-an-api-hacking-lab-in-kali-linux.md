---
slug: setting-up-an-api-hacking-lab-in-kali-linux
title: Setting up API hacking lab in Kali Linux
authors: knign
tags: [crAPI, api hacking, Kali]
---

If you want to get started with API hacking, crAPI is one of the best resources to get hands-on practice.

In this blog post, I will walk you through the process of getting crAPI set up and running.

<!-- truncate -->

## Cloning the Github repository

Install the application from the following URI.

![1](https://github.com/Knign/Blog/assets/110326359/2d683142-93d5-4a6c-a651-ca892bf45424)

You can clone the repository in your machine using the following command:

```
git clone https://github.com/OWASP/crAPI.git
```

Once that is done, we have to install Docker in our system to spin up the containers.


## Docker installation

```
sudo apt install docker.io
```

This command will install Docker on your system. After the installation is complete, you can verify that Docker has been installed correctly by running:

```
docker --version
```

Next we have to install Docker Composein our system using the following command.

```
sudo apt install docker-compose
```

Next, we have to change directories to the `deploy/docker/` repository inside the `crAPI` repository. Once inside, we can spin up the container using the following command:

```
sudo docker-compose up
```

The application will take some time to install the dependancies and finish setting up the first time.

## Endpoints

There are two endpoints in this application:
- Login page
- Mailhog mail server

### Login page
The login page can be foun at the following URI:

```
http://localhost:8888/login
```

![1](https://github.com/Knign/Blog/assets/110326359/d30cd841-b922-4ebf-b035-0f50777fb8b7)

### Mailhog mail server
The mail server can be found at the following URI:

```
http://localhost:8025/
```

![2](https://github.com/Knign/Blog/assets/110326359/2b47ed91-08d0-4af8-b9bb-a4ef3ed17576)

