# Use a lightweight Python base image
FROM python:3.10-slim-buster

# Set the working directory in the container
WORKDIR /app

# Install uv (user preferred package manager)
RUN pip install uv

# Copy pyproject.toml and uv.lock to leverage uv's caching
# This step handles dependency installation using uv
COPY ./pyproject.toml ./uv.lock* /app/

# Install dependencies using uv
RUN uv sync

# Copy the rest of the application code
COPY . /app

# Expose the port the FastAPI application will run on
EXPOSE 8000

# Command to run the FastAPI application using Uvicorn
# Use 0.0.0.0 to make it accessible from outside the container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
