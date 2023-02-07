# QRgenerator from a text file filled by links
A project to generate QR codes from a text file filled with links by using NODEJS and eport in .PNG.

## Prerequisites
- Clone the repository.
- Run `npm install` to install the dependencies.

## Description
The project generates QR codes from a text file filled with links. Each line in the text file must contain a single link, and line breaks are used as separators to generate new QR codes.

## Configuration
To set the output pattern name of the generated QR codes and the path to the links.txt file, you need to set up the environment variables in a .env file.

## Usage
After editing the links.txt file, you can run the following command in the app directory to generate the QR codes:

node app.mjs


## License
This project has a free license.
