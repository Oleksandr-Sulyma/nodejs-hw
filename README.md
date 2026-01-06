# Node.js Homework - Express Server

Simple Express.js server with basic routes, middleware, and logging using **pino-http**.  
All functionality is implemented on the branch **01-express**.

## Features

- Configurable **PORT** using `.env` file  
- **CORS** enabled  
- **JSON** body parsing with `express.json()`  
- Logging of HTTP requests with **pino-http**  
- Middleware for **404 Not Found**  
- Middleware for **500 Server Errors**  
- Routes:  
  - `GET /notes` — list all notes  
  - `GET /notes/:noteId` — get note by ID  
  - `GET /test-error` — simulate server error  
