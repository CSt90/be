# Hogwarts Houses Backend (Node.js REST API)

## Overview

This Node.js API serves Hogwarts houses data with optional filtering by house name.

## Features

- REST API endpoint `/houses`
- Supports query parameter `?name=` for case-insensitive partial matching on house name
- Returns JSON array of houses matching the filter
- Static JSON data mimicking the external API structure

## Running Locally

```bash
npm install
node server
```
API listens on port 5000 by default.

## API Usage
- Get all houses:

GET http://localhost:5000/houses

- Get filtered houses by name (e.g., "ffi"):

GET http://localhost:5000/houses?name=ffi

Notes

The backend is optional and mainly used for demonstrating server-side filtering.
The frontend can point to this backend or the external API by setting the NEXT_PUBLIC_API_URL environment variable.
The external API does not support filtering, so client-side filtering is needed in that case.

````
