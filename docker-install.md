## Install Docker

1. Check if docker is installed
```
docker --version
```
2. Update the apt package index:
```
sudo apt-get update
```
3. Install packages to allow apt to use a repository over HTTPS:
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
4. Add Docker’s official GPG key:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
5. Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88, by searching for the last 8 characters of the fingerprint .
```
sudo apt-key fingerprint 0EBFCD88
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```
7. Use the following command to set up the stable repository.
```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
8. Update the apt package index.
```
sudo apt-get update
```
9. Install the latest version of Docker CE and containerd, or go to the next step to install a specific version:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
10. Check Docker Installation
: Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it's running:
```
sudo systemctl status docker
```
The output should be similar to the following, showing that the service is active and running:
```
Output
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-10-18 20:28:23 UTC; 35s ago
     Docs: https://docs.docker.com
 Main PID: 13412 (dockerd)
   CGroup: /system.slice/docker.service
           ├─13412 /usr/bin/dockerd -H fd://
           └─13421 docker-containerd --config /var/run/docker/containerd/containerd.toml
```
11.Executing the Docker Command Without Sudo 
: By default, running the docker command requires root privileges — that is, you have to prefix the command with sudo. It can also be run by a user in the docker group, which is automatically created during the installation of Docker. If you attempt to run the docker command without prefixing it with sudo or without being in the docker group, you'll get an output like this:
```
Output
docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.
```
If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:
```
sudo usermod -aG docker ${USER}
```
To apply the new group membership, you can log out of the server and back in, or you can type the following:
```
su - ${USER}
```
You will be prompted to enter your user's password to continue. Afterwards, you can confirm that your user is now added to the docker group by typing:
```
id -nG
```

## Install Compose on Linux systems
1. Run this command to download the latest version of Docker Compose
```
sudo curl -L https://github.com/docker/compose/releases/download/1.24.0-rc1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
2. Apply executable permissions to the binary:
```
Apply executable permissions to the binary:
```

## Docker Commands

1. Containers

	* List Docker Containers
    ```
    docker ps
    ```
	* Use -a option with above command to list all containers including stopped.
    ```
    docker ps -a
    ```
    * Find all Details of Container
    ```
    docker inspect cc5d74cf8250
    ```
    * Delete Docker Container
    : Use docker rm command to delete existing docker container. You need to provide container id or container name to delete specific container.
    ```
    docker stop cc5d74cf8250
    docker rm cc5d74cf8250
    ```
2. Docker Images
	* List Docker Images
    ```
    docker images
    ```
    * Search Docker Images
    : Use docker search command to search images on docker hub
    ```
    docker search centos
    ```
    * Download Docker Images
    ```
    docker pull centos
    ```
	* Delete Docker Images
    ```
    docker rmi centos
    ```
4. Prune(Delete) Objects in Docker
	* Prune All Unused Objects
    ```
    docker system prune --all
    ```
    * Prune Images
    ```
    docker image prune
    ```
    * Prune Containers
    ```
    docker container  prune
    ```
    * Prune Volume
    ```
    docker volume prune
    ```
    * Prune Network
    ```
    docker network prune
    ```