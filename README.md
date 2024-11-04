# SBA-318-Express-Server-Application


This is an Express server application structured with several directories for better organization and performance.

# Directory Overview

# Data: Contains the following files:
comment.js
post.js
users.js

# Middleware: Includes the following middleware files:
customerHeader.js: Customizes response headers for your application.
logger.js: Logs request details for better debugging and monitoring.

# Routes: Contains four route files:
comment.js
posts.js
users.js
message.js: Created to verify if the Pug view is functioning correctly. You can access this route at http://localhost:3000/messages. This route also showcases the application of static CSS styles.

# View: Contains:
index.pug: This file includes the block content (HTML) for the Pug view.
layout.pug: Contains links to the stylesheets, including CSS and Bootstrap.
Utilities: Contains error handling middleware for managing application errors effectively.

# Main File
app.js: The main entry point for the application, where routes are defined and linked to the Express app.

These directories are structured to improve code organization, Adhere to the guiding principles of REST. and readability while enhancing overall performance.
