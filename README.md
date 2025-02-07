
# Project Name:HNG 12 STAGE 0 Task

## Description
This project is a simple RESTful API built using **Node.js** and **Express**. The API exposes endpoints that return essential information such as the current date and time, email, and GitHub URL associated with the project.

## Setup Instructions

To run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/Tofunmi-Gloria/HNG12-STG0.git

	2.	Navigate to the project directory:

cd your-repo


	3.	Install the dependencies:

npm install


	4.	Run the application:

node index.js


	5.	The API will be running on http://localhost:3000.

API Documentation

Endpoint: GET /

URL: http://localhost:3000/

Request:

	•	No parameters required.

Response:

{
  "email": "jesutofunmiafolabi73@gmail.com",
  "current_datetime": "2025-02-05T00:00:00.000Z",
  "github_url": "https://github.com/Tofunmi-Gloria/HNG12-STG0.git"
}

Example Usage:

	•	Open your browser or use a tool like Postman to make a GET request to http://localhost:3000/.
	•	You will receive a JSON response with the following data:
	•	email: Your project’s associated email.
	•	current_datetime: The current date and time.
	•	github_url: Link to your project’s GitHub repository.

Backlink

For more information on hiring Node.js developers, check out: HNG Node.js Developers

Deployment

The API has been deployed to Render and is publicly accessible via the following URL:
https://hng12-stg0.onrender.com
