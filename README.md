# NexaChain Investment & Referral Platform

## Overview

Production-grade MERN backend for an investment and referral platform.

Features:

- JWT Authentication
- Multi-Level Referral System
- Daily ROI Distribution
- Wallet Management
- Transaction Tracking
- Dashboard Analytics
- Cron-Based ROI Processing
- Swagger Documentation

---

## Tech Stack

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

Authentication

- JWT
- Bcrypt

Documentation

- Swagger

Scheduler

- Node Cron

---

## Installation

```bash
git clone <repository-url>

cd server

npm install
```

Create .env file:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/nexachain

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret

JWT_ACCESS_EXPIRES=1d

JWT_REFRESH_EXPIRES=7d

LEVEL_1_PERCENT=10
LEVEL_2_PERCENT=5
LEVEL_3_PERCENT=3
```

---

## Run Development Server

```bash
npm run dev
```

---

## Seed Database

```bash
npm run seed
```

Admin credentials:

Email:
[admin@nexachain.com](mailto:admin@nexachain.com)

Password:
Admin123@

````

---

## Swagger Documentation

```txt
http://localhost:5000/api-docs
````

---

## API Base URL

```txt
http://localhost:5000/api/v1
```

---

## Architecture

Controller
↓
Service
↓
Repository
↓
MongoDB

---

## Features Implemented

- User Registration
- User Login
- JWT Authentication
- Referral Tree
- Investment Management
- ROI Calculation
- Daily Scheduler
- Dashboard Analytics
- Transaction History
- Swagger Documentation

---

## Cron Job

Runs daily at:

```txt
12:00 AM
```

Processes:

- Active Investments
- ROI Distribution
- Wallet Updates
- ROI History

Idempotent implementation prevents duplicate ROI credits.
