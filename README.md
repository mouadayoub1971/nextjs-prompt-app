# My Next.js Project with MongoDB and TailwindCSS

This is a full-stack web application built with Next.js, MongoDB, and styled with TailwindCSS. The project demonstrates how to set up a modern web application using these powerful technologies.

## Features

- Full-stack development with Next.js
- MongoDB for database management
- TailwindCSS for responsive and utility-first styling
- REST API for managing data

  ![Alt text](./images/image2.png)
  ![Alt text](./images/image.png)


## Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- MongoDB (either local installation or MongoDB Atlas)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/mouadayoub1971/nextjs-prompt-app.git
cd nextjs-prompt-app
touch .env
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
# or
yarn install
```

### 3. Set up MongoDB

- If you're using MongoDB locally, make sure you have MongoDB running on your machine.
- If you're using MongoDB Atlas, create a new cluster and get the connection string from the MongoDB Atlas dashboard.

### 4. Configure environment variables

Create a `.env.local` file in the root of your project and add the following MongoDB connection string:

```env
MONGODB_URI=mongodb://your-username:your-password@your-cluster-url/your-database-name
```

If you're using MongoDB Atlas, it would look like this:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority
```

### 5. TailwindCSS configuration

TailwindCSS should already be set up. If not, make sure you have the following in your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   fontFamily: {
    satoshi: ['Satoshi', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
   },
   colors: {
    'primary-orange': '#FF5722',
   },
  },
 },
 plugins: [],
};
```

### 6. Run the development server

Once everything is set up, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

- The app connects to MongoDB to fetch/store data.
- You can add, update, or delete data (depending on your implemented API routes).
- The user interface is styled using TailwindCSS for a responsive design.

## Technologies Used

- **Next.js**: React framework for building full-stack applications.
- **MongoDB**: NoSQL database for storing data.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.

## Contributing

Feel free to fork this project and open pull requests. If you find any bugs or have feature suggestions, open an issue.

## Contact

You can reach me on X at @AyoubMouad1971.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
