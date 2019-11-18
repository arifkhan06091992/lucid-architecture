### Server setup steps	
1. New Machine : Install `Ubantu 16.04 LTS`	
2. Install Apache2	
3. Install PHP	
4. Give Owner permission of /var/www/html/	
- `/var/www/html/`	
- `sudo chown bigday .`	
5. Enable Apache Re-write module	
- `sudo a2enmod rewrite`	
6. Install Git	
- `sudo apt-get install git`	
7. Install MongoDB	
- Version : MongoDB `4.0` Community Edition	
- [Installation document](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)	
	
8. Install Node.js and npm	
- Node Version : `10.14.2`	
- npm Version : `6.4.1`	
- [Installation Document](https://github.com/nodesource/distributions#manual-installation)
- Remove the old PPA if it exists**
```sh
# add-apt-repository may not be present on some Ubuntu releases:
# sudo apt-get install python-software-properties
sudo add-apt-repository -y -r ppa:chris-lea/node.js
sudo rm -f /etc/apt/sources.list.d/chris-lea-node_js-*.list
sudo rm -f /etc/apt/sources.list.d/chris-lea-node_js-*.list.save
```
- Add the NodeSource package signing key**
```sh
curl -sSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
# wget can also be used:
# wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
```
- Add the desired NodeSource repository**
```sh
# Replace with the branch of Node.js or io.js you want to install: node_6.x, node_8.x, etc...
VERSION=node_{version}.x
# The below command will set this correctly, but if lsb_release isn't available, you can set it manually:
# - For Debian distributions: jessie, sid, etc...
# - For Ubuntu distributions: xenial, bionic, etc...
# - For Debian or Ubuntu derived distributions your best option is to use the codename corresponding to the upstream release your distribution is based off. This is an advanced scenario and unsupported if your distribution is not listed as supported per earlier in this README.
DISTRO="$(lsb_release -s -c)"
echo "deb https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list
```
- Update package lists and install Node.js**
```sh
sudo apt-get update
sudo apt-get install nodejs
```
	
9. Install Rockmongo : A GUI for mongoDB Access	
- `sudo apt-get install php7.x-dev`  ( For phpsize not found error )	
- [Installation Document](https://medium.com/@RichieOmoka/running-rockmongo-on-php7-b4b39a180840)	
	
10. Setup Express	
- `npm install express-generator -g`	
- `express --view=ejs big-data`	
- `cd big-data`	
- `npm install`	
- `npm install -g nodemon`	
