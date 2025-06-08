# Hogwarts Houses Backend (Node.js REST API)

## Overview

This Node.js API serves Hogwarts houses data with optional filtering by house name.

## Features

- REST API endpoint `/houses`
- Supports query parameter `?name=` for case-insensitive partial matching on house name
- Returns JSON array of houses matching the filter
- Static JSON data mimicking the external API structure
- Data origin: https://wizard-world-api.herokuapp.com/houses

## Running Locally

```bash
npm install
node server
```

API listens on port 5000 by default.

## API Usage

- Get all houses:
  GET http://localhost:5000/houses

- Get filtered houses by name:
  GET http://localhost:5000/houses?name={FILTER_INPUT_STRING}

## Running on the web

- Get all houses:
  GET https://wizard-world-be.onrender.com/houses

- Get filtered houses by name:
  GET https://wizard-world-be.onrender.com/houses?name={FILTER_INPUT_STRING}

Notes

The backend is used for demonstrating server-side filtering.
The frontend can point to this backend or the external API by setting the NEXT_PUBLIC_API_URL environment variable.
