# SimStockWebApp

A full-stack **stock market simulation webapp** built with modern TypeScript and React. Users can register, log in, and simulate stock trades with virtual currency in a dynamic environment.

The project was developed as a capstone for an Information Technology degree and demonstrates full-stack development skills with Next.js, Prisma ORM, and TypeScript.


## Tech Stack

**Frontend & Backend:** Next.js (React + TypeScript)  
**Database & Schema:** Prisma Postgres & Prisma ORM  
**Language:** TypeScript  
**Deployment:** Not currently Deployed (Was originally deployed through Vercel)

## Features

**User sign-up and login**
**Portfolio simulation with virtual currency**
**Buy and sell simulated stock trades**
**Dynamic data presentation with React components**
**Database integration using Prisma**
**Modern TypeScript for type safety and maintainability**


## Architecture

This app uses **Next.js** as a full-stack framework combining the following technologies:

**React** for component-based UI  
**API routes** for backend logic  
**Prisma** for database schema, models, and queries

Client interfaces interact with backend API routes to process simulated trades, update portfolio history, and retrieve user data.


## Database Schema (Example)

_Prism schema includes models for:_

**Users:** Authentication and profile details
  *Roles* are used to differentiate regular users from administrators
**Trades:** Buy/sell records with timestamps  
**Portfolios:** Tracking virtual holdings and value
**Transactions:** Logging transaction history for each user
**Stocks:** Individual Stock offering details
**Market Scheduling:** To hold and track market schedules


## Setup Instructions

1. Clone this repository
2. Install dependencies `npm install`
3. Configure your environment variables (e.g., database URL) `DATABASE_URL=`"your_db_connection_string"
4. Run database migrations `npx prisma migrate dev`
5. Start the development server `npm run dev`
6. Open http://localhost:3000 to view the app


## Contributions

This project was developed as part of a final academic project and is currently maintained as a personal portfolio project.
Project Creators:
Sam Kline
Michael Lacey
Josie Lajoie

## License




