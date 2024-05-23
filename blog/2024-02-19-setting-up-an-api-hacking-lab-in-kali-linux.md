---
slug: setting-up-an-api-hacking-lab-in-kali-linux
title: Setting up an API hacking lab in Kali Linux
authors: kunull
tags: [api security]
---

If you want to get started with API hacking, crAPI is one of the best resources to get hands-on practice.
This can be done in any Operating System, but for the sake of this walkthrough we will be using Kali Linux.


<!-- truncate -->


## crAPI machine
### Cloning the Github repository

Install the application from the following URI.

![1](https://github.com/Knign/Blog/assets/110326359/2d683142-93d5-4a6c-a651-ca892bf45424)

You can clone the repository in your machine using the following command:

```
git clone https://github.com/OWASP/crAPI.git
```

Once that is done, we have to install Docker in our system to spin up the containers.


### Docker installation

```
sudo apt install docker.io
```

This command will install Docker on your system. 
After the installation is complete, you can verify that Docker has been installed correctly by running:

```text title="> terminal"
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

### Endpoints

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
The mail server to which emails are sent can be found at the following URI:

```
http://localhost:8025/
```

![2](https://github.com/Knign/Blog/assets/110326359/2b47ed91-08d0-4af8-b9bb-a4ef3ed17576)



## Postman
We will be using the Postman platform in order to interact with with APIs.

### Installation

You can download the Postman client from the [downloads](https://www.postman.com/downloads/) page.

![8](https://github.com/Knign/Blog/assets/110326359/a79aafa3-6317-4721-a6e1-0ca81b102c72)

Once that is done uncompress the file using the following command:

```
tar -xvzf postman-linux-x64.tar.gz
```

Next, move the `Postman` directory in the `/opt` directory.

```
sudo mv Postman /opt
```

### Creating a symbolic link for Postman

Always running the Postman application with `/opt/postman` is tedious. To get around this, we can create a symbolic link/shortcut for the Postman application.

```
sudo ln -s /opt/Postman/Postman /usr/bin/postman
```

Now you can run the application with the `postman` command.


### Importing the crAPI collection into Postman

Before we get started, we need to import the collection of requests the crAPI endpoints in the Postman dashboard.

![2](https://github.com/Knign/Blog/assets/110326359/5693aa9c-8fe1-409e-91c0-3dbfb59a2e30)

Next, select the `crAPI/postman_collections/` directory.

![3](https://github.com/Knign/Blog/assets/110326359/2db50bed-3e1f-46fb-b0ca-7d3df0d55096)

Click `Import`. 

You should be able to see the requests in the Postman dashboard now.

![4](https://github.com/Knign/Blog/assets/110326359/873c5760-7f3a-4b1f-85f3-888e69215941)

If you click on a request you can see the following error.

![5](https://github.com/Knign/Blog/assets/110326359/a8856aee-f32d-4010-acc1-6661e5d2cf59)

This error can be resolved by setting the `Environment` to `Crapi`.

![6](https://github.com/Knign/Blog/assets/110326359/94a70411-6913-4860-a7c0-707aa5652ae5)

You are now all set to practice some API hacking.
You can check out my [write-ups for crAPI](https://kunalwalavalkarwrite-ups.vercel.app/crAPI/).
