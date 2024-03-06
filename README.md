
# Convene - Meetup Questions Hub

Convene is a platform that empowers meetup organizers by allowing users to crowdsource and prioritize questions for upcoming meetups. This repository contains the codebase for the Convene project.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication:**
   - User sign-up page.
   - User sign-in page.
   - Form validation for sign-up and sign-in.

2. **Meetup Interaction:**
   - Display upcoming meetups.
   - Create a new meetup (admin).
   - Delete a meetup (admin).

3. **Question Interaction:**
   - Users can post questions to a specific meetup.
   - Upvote and downvote questions.
   - Add comments to a question.

4. **User Profile:**
   - Display user profile information.
   - Include user's posted questions and commented questions.
   - Top questions feed for upcoming meetups.

5. **Admin Actions:**
   - Admin can create a meetup.
   - Admin can delete a meetup.
   - Optional: Admin can add images and tags to a meetup.

## Project Structure

The project is divided into two main challenges:
1. **Challenge One: UI Templates**
   - Located in the `UI` directory.
   - UI templates built with HTML, CSS, and React.
    -Form validation with formik and yup.
   - Hosted on GitHub Pages.

2. **Challenge Two: API Endpoints**
   - Server-side code using Expressjs.
      - Server-side database using sql lite.
   - API endpoints created to power front-end pages.
   - Continuous Integration with Nodemon.
   -  Hosted on Heroku.

## Getting Started

Follow these steps to set up and run the Convene project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/convene.git
   cd convene

## Install dependencies

### For UI templates (Challenge One)
cd UI
### Install dependencies (e.g., React)
npm install

### For API Endpoints (Challenge Two)
cd ../API
### Install dependencies (e.g., Node modules)
npm install

## Run the project
### For UI templates
npm start

### For API Endpoints
npm start
