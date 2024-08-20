


# Music WebApp

## Overview

The Music WebApp is a modern web-based music player built using Flask and styled with a green and violet gradient. It features a beautiful user interface, draggable progress bar, loop functionality, and a moving GIF to enhance the playback experience.

## Features

- **Music Upload**: Upload and play your own music files.
- **Playback Controls**: Play, pause, skip forward, and skip backward through tracks.
- **Loop Option**: Toggle looping of the current track.
- **Progress Bar**: Drag and set the song to any timestamp.
- **Beautiful UI**: Green and violet gradient background with a sleek design.
- **Sound GIF**: Display a moving GIF during playback.

## Technologies Used

- **Flask**: For serving the web application.
- **HTML/CSS**: For building and styling the frontend.
- **JavaScript**: For interactive functionality.
- **Giphy**: For the moving GIF displayed during playback.

## Installation

### Prerequisites

- Python 3.x
- Flask

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/music-webapp.git
   cd music-webapp
   ```

2. **Install Dependencies**

   Create a virtual environment and install Flask:

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use: venv\Scripts\activate
   pip install flask
   ```

3. **Run the Application**

   Start the Flask development server:

   ```bash
   python app.py
   ```

   Open your browser and go to `http://127.0.0.1:5000/` to access the Music WebApp.

## Usage

1. **Upload Music Files**

   Click on the file input button to upload your music files. You can select multiple files.

2. **Play Music**

   Click the play button to start playback. Use the pause button to stop the music. Use the previous and next buttons to navigate through the playlist.

3. **Manage Playlist**

   The playlist will be displayed below the file input. Click on a track name to play that specific track.

4. **Control Playback**

   Use the progress bar to seek to any part of the song. Toggle the loop button to enable or disable looping of the current track.

5. **View GIF**

   A moving GIF will be displayed during playback to enhance the listening experience.

## Code Structure

- **app.py**: Flask backend to serve the web application.
- **templates/index.html**: HTML file for the user interface.
- **static/css/styles.css**: CSS file for styling the UI.
- **static/js/scripts.js**: JavaScript file for interactive functionality.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**

   Click the "Fork" button on the top-right corner of the repository page.

2. **Create a Branch**

   Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make Your Changes**

   Implement your changes and test them thoroughly.

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

5. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature
   ```

6. **Create a Pull Request**

   Go to the original repository and create a pull request from your fork.




- **Giphy**: For providing the moving GIF used in the application.
- **Flask**: For the lightweight and powerful web framework.

---

Feel free to customize the documentation further based on your preferences and any additional details you might want to include.
