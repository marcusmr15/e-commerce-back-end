# E-commerce Back End

## Description

This project is a back-end application for an e-commerce website. It utilizes Express.js and Sequelize to create a functional API that allows users to interact with the database, this means that it provides routes for managing categories, products, and tags, including the ability to create, read, update, AND delete data as well.

❗ `Note:` Please refer to the 'Usage' section to watch a video of the app's database management and testing with Postman.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

To install and run the application locally, follow these steps:

1. Clone the [e-commerce-back-end
](https://github.com/marcusmr15/e-commerce-back-end) repository
2. Navigate to the project directory in your terminal
3. Install dependencies by running either `npm i` or  `npm install`
4. Set up your environment variables by creating a `.env` file in the root directory and adding your database name, MySQL username, and MySQL password

Use the following format:

    DB_NAME=your_database_name
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password

5. Create the database schema and seed it with test data by running `npm run seed`
6. Start the application by running `npm start` or `node server.js`


## Usage

🎬 [Click here to view the vide of how to run and test the app](https://drive.google.com/file/d/1pSuGIqE6BMTEquJban-5NZO-Yrkvq4UG/view?usp=sharing)

To use the application, follow these steps:

1. Once the server is running, open __Postman__ or any other API testing tool
2. Test the API GET routes for categories, products, or tags to view the data in a formatted JSON
3. Test the API POST, PUT, and DELETE routes to create, update, and delete data in the database

## Credits

This project was created with the aid of:
* The _Chat GPT_ AI developed by __Open AI__.
* The _Xpert Learning Assistant_ AI developed by __edX__.
* The [Thomas-Object-Relational-Mapping-ORM-E-Commerce-Back-End](https://github.com/ThomasCalle/Thomas-Object-Relational-Mapping-ORM-E-Commerce-Back-End) repository by [Thomas Calle](https://github.com/ThomasCalle).

## License

* This project was created by [Marcos Munoz](https://github.com/marcusmr15).
