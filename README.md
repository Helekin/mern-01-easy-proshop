## About The Project

This project is a comprehensive exercise corresponding to the Udemy course "MERN From Scratch 2023 | eCommerce Platform" by Brad Traversy (last updated August 2023). It serves as an eCommerce platform developed using MERN stack.

- [Udemy Instructor](https://www.udemy.com/user/brad-traversy/)
- [Udemy Course](https://www.udemy.com/course/mern-ecommerce/)

This code was developed using `Vite.js` instead of `Create React App`, a choice that aligns with the React documentation's suggestion of employing an alternative frontend tool.

This iteration might feature alterations compared to the initial course code, including modifications in file names, functions, or variables.

## Getting Started

### Prerequisites

- Use any code editor

### Installation

1. Clone the repo

```sh
git clone https://github.com/Helekin/mern-01-easy-proshop.git
```

2. Rename the `.env.example` file to `.env` and add the following

```sh
NODE_ENV="development"
PORT="your_port"
MONGO_URI="your_mongo_uri"
JWT_SECRET="your_jwt_secret"
PAYPAL_CLIENT_ID="your_paypal_client_id"
PAYPAL_APP_SECRET="your_paypal_app_secret"
PAYPAL_API_URL="https://api-m.sandbox.paypal.com"
```

3. Install dependencies (backend & backend)

```sh
npm install
cd frontend
npm install
```

4. Runs the app in the development mode

```sh
npm run dev
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```sh
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

## License

Distributed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact

Github: [https://github.com/Helekin](https://github.com/Helekin)
