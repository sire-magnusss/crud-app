# Use the official Node.js image as the base image
FROM node:16

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to start the app
CMD ["npm", "start"]
