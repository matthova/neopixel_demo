To run this server you will need to install the following on your raspberry pi:
- nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```
Then set up nvm
```
sudo echo ". ~/.nvm/nvm.sh" >> ~/.bashrc
. ~/.nvm/nvm.sh
```
- node
```
nvm install v4
```
- pip
```
sudo apt-get install python-pip
```
- Flask
```
sudo pip install flask
```
- Neopixel Drivers
```
sudo apt-get install build-essential python-dev git scons swig  
cd ~/
git clone https://github.com/jgarff/rpi_ws281x.git  
cd rpi_ws281x  
scons  
```
Wait for install to complete and then
```
cd python  
sudo python setup.py install  
```
