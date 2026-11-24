# Tasks API — Postman Documentation

This directory contains the exported Postman collection used to test and document the Group 5 Tasks CRUD API.

## Public Postman Documentation
[View Published Tasks API Documentation](https://documenter.getpostman.com/view/60292922/2sBYPv4Cns#fc0344f7-bea0-4bfd-bda8-6ed2af6a1d41)

## Collection Export
* **File:** `postman/tasks-api.json` (Postman Collection v2.1)
* **Base URL:** `http://localhost:3000`

## Endpoints & Status Codes Verified
* `GET /` — `200 OK` (Health check)
* `GET /tasks` — `200 OK` (Fetch all tasks)
* `GET /tasks/completed` — `200 OK` (Fetch completed tasks)
* `GET /tasks/:id` — `200 OK` / `404 Not Found` (Fetch single task by ID)
* `POST /tasks` — `201 Created` / `400 Bad Request` (Create a new task)
* `PUT /tasks/:id` — `200 OK` / `400 Bad Request` / `404 Not Found` (Full or partial task update)
* `DELETE /tasks/:id` — `200 OK` / `404 Not Found` (Delete a task by ID)