# Summary Bot

## Project Overview

This project is a web-based application that generates summaries for user-provided text. It uses a Flask backend to handle requests and a JavaScript frontend to interact with the user.

## How It Works

1. **Frontend (JavaScript)**:
    - The user inputs a paragraph in the text box.
    - When the user submits the input, the `sendMessage` function is triggered.
    - This function sends the user input to the Flask backend using an AJAX request.
    - The backend processes the input and returns a summary.
    - The summary is then displayed in the chat interface.

2. **Backend (Flask)**:
    - The Flask app defines an endpoint `/generate_summary` that accepts POST requests.
    - When a request is received, the backend uses the `summary` module to generate a summary of the input text.
    - The generated summary is returned as a JSON response.

## Installation

Follow these steps to set up and run the project:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/maraheem12/Summary-Bot.git
    cd Summary-Bot
    ```


2. **Install the required modules**:
    ```sh
    pip install flask
    pip install scikit-learn
    pip install nltk

    ```

3. **Run the Flask app**:
    ```sh
    python app.py
    ```

4. **Open the application**:
    - Open your web browser and navigate to `http://127.0.0.1:5000/`.

## File Structure

- `app.py`: The main Flask application file that handles routing and summary generation.
- `static/script.js`: The JavaScript file that handles user interactions and AJAX requests.
- `templates/index.html`: The HTML file that defines the structure of the web page.

## Endpoints

- `GET /`: Renders the main page of the application.
- `POST /generate_summary`: Accepts a paragraph of text and returns a generated summary.

## Example Usage

1. Open the application in your web browser.
2. Enter a paragraph of text in the input box.
3. Click the submit button to generate a summary.
4. The summary will be displayed in the chat interface.
#
