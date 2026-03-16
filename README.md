# servermemo
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple server-based memo application, allowing users to securely store and retrieve their notes.

## Features
- Secure storage of memos using encryption
- Ability to save and retrieve memos on the server
- Generation and management of public and secret keys

## Requirements
This project requires Deno to be installed on the server.

## Usage
1. Clone the repository:
```
git clone https://github.com/code4fukui/servermemo.git
```
2. Change to the project directory:
```
cd servermemo
```
3. Start the server:
```
deno run --allow-net --allow-read --allow-write servermemo.js
```
4. Access the application in your web browser at `http://localhost:8000`.

## Data / API
The application uses the following API endpoints:
- `POST /api/`: Saves a memo to the server
- `GET /api/`: Retrieves a memo from the server

The memos are stored in the `data/` directory, with file names based on the user's public key.

## License
This project is licensed under the [MIT License](LICENSE).
