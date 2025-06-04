# AI Health Blog

This project contains a small demo of a personal blog focused on the application of Artificial Intelligence in health and hygiene.

## Frontend

The static frontend files are located in the `frontend/` directory. These can be hosted on GitHub Pages.

## Backend

The backend is a Flask application located in the `backend/` directory. It provides basic blog functionality with an administrative dashboard.

### Setup

```bash
pip install -r backend/requirements.txt
python backend/app.py
```

The server will automatically initialize the SQLite database on first request. 
If you prefer running with the `flask` command, set `FLASK_APP=backend.app` and 
run `flask run`.

The app will create a SQLite database (`blog.db`) on first run. A default admin user `admin` with password `admin` is created for demonstration purposes.
Log in at `http://localhost:5000/admin/login` to access the dashboard.

### Deployment

To deploy the backend on a service such as Heroku or AWS, set the `SECRET_KEY` environment variable and configure the environment to install the requirements from `backend/requirements.txt`.

## Features

- Admin dashboard with post creation and deletion.
- Rich text editor powered by Quill for creating posts.
- JSON API for fetching posts used by the static frontend.

This codebase is intentionally simple so it can be extended with additional features such as comment moderation, media uploads and advanced analytics.
