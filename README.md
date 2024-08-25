# BFHL Full Stack Challenge

Hi! 👋 I'm excited to share my solution for the Bajaj Finserv Health Challenge (Qualifier 1). This project was a great learning experience for me as it involved both backend and frontend development.

## Project Overview

This project is a full-stack application that includes a backend REST API and a frontend interface. The backend processes data and returns specific information, while the frontend allows users to interact with the backend by submitting JSON data and filtering the results.

### Backend

- **POST /bfhl**: Accepts JSON data and returns:
  - An array of numbers
  - An array of alphabets
  - The highest lowercase alphabet
  - Other details like user ID, email, and roll number

- **GET /bfhl**: Returns a hardcoded operation code.

### Frontend

- **Input**: A text field to input JSON data.
- **Filters**: Multi-select dropdown to choose what part of the response to display (numbers, alphabets, etc.).
- **Display**: Shows the filtered results based on user selection.

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: React.js
- **Deployment**: Heroku for backend, Netlify for frontend

## Getting Started

To get started with this project, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bfhl-fullstack-challenge.git
cd bfhl-fullstack-challenge
