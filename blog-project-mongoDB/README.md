# Blog Project README

This is a blog project developed using Node.js, Express.js, and MongoDB. The project allows authenticated users to create blog posts, like blog posts, and update their profile image. Additionally, creators of blog posts have the privilege to edit and delete their own blog posts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

This blog project provides a platform for users to express their thoughts and ideas through blog posts. Users need to sign up and authenticate themselves to access the full functionality of the platform. Once authenticated, they can create, read, update, and delete blog posts. Additionally, users can like blog posts to show their appreciation for the content.

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts
- Like and comment blog posts
- Change profile image
- User-specific actions (only creators can edit and delete their own blog posts)
- API for interacting with the blog platform

## Requirements

Make sure you have the following installed before setting up the project:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)
- npm (Node Package Manager, comes with Node.js installation)

## Installation

1. Clone the repository or download the project files:

```bash
git clone git@github.com:sahil-6394/blog-project.git
cd blog-project
```

2. Install the required npm packages:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file and set their values:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/blog_project
COOKIE_SECRET=your_session_secret_here
```

Make sure to replace `your_session_secret_here` with a secure random string that will be used as the session secret for the application.

## Usage

1. Start the development server:

```bash
npm start
```

2. Access the application by visiting `http://localhost:3000` in your web browser.

3. Register a new account and log in to create blog posts, like posts, and change your profile image.

## API Endpoints

The project exposes the following API endpoints for interacting with the platform:

- `POST /auth/signup`: Register a new user account.
- `POST /auth/login`: Authenticate user credentials and obtain a session.
- `POST /auth/logout`: Destroy the current session and log out the user.
- `POST /blog/create`: Create a new blog post (requires authentication).
- `GET /blog/search`: Retrieve a list of all blog posts.
- `GET /blog/:blogid`: Retrieve a specific blog post by ID.
- `PUT /blog/edit/blog:id`: Update a blog post (requires authentication as the creator).
- `DELETE /blog/delete/:id`: Delete a blog post (requires authentication as the creator).
- `POST /blog//blog:id/like`: Like a blog post (requires authentication).
- `POST /blog//blog:id/comment`: Like a blog post (requires authentication).
- `POST /user/profile//:userId`: user can edit profile image here  (requires authentication).