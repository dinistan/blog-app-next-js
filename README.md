# Tech Zone

![Screenshot_9](https://github.com/user-attachments/assets/2bed0990-b6dc-4c61-b753-6e83b0a4788e)


## Overview

Tech Zone is a full-stack blog website focused on technology-related content. Built using Next.js, MongoDB, and Tailwind CSS, this project showcases the capabilities of modern web development technologies. It includes a frontend for displaying blog posts, a backend for API management, and an admin panel for content management.

## Features

- **Frontend:** A user-friendly interface for browsing and reading blog posts.
- **Backend:** RESTful APIs for managing blog data.
- **Admin Panel:** A dashboard for uploading and managing blog posts.
- **Database:** MongoDB for data storage.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express, Next.js API Routes
- **Database:** MongoDB
- **Styling:** Tailwind CSS

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/tech-zone.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tech-zone
    ```

3. Install dependencies:

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

4. Set up environment variables:

    Create a `.env.local` file in the root of your project and add your MongoDB connection string:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

5. Run the development server:

    Using npm:

    ```bash
    npm run dev
    ```

    Using yarn:

    ```bash
    yarn dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `/pages`: Contains the Next.js pages for the frontend and API routes.
- `/components`: Reusable React components.
- `/styles`: Tailwind CSS configurations and custom styles.
- `/lib`: Database connection and utility functions.
- `/admin`: Admin panel for managing blog posts.

## Features

### Frontend

- Display blog posts with titles, content, and publication dates.
- Responsive design using Tailwind CSS.

### Backend

- RESTful API for CRUD operations on blog posts.
- Secure endpoints for admin actions.

### Admin Panel

- User authentication for admin access.
- Dashboard for creating, updating, and deleting blog posts.

## Usage

### Create a blog post:

Access the admin panel at `/admin` and use the dashboard to create a new blog post. Fill in the title, content, and other necessary fields, and save the post.

### View blog posts:

Visit the homepage to see a list of all published blog posts. Click on any post to read the full content.

### Edit or delete a blog post:

Use the admin panel to edit or delete existing blog posts.
