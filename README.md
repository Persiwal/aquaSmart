# aquaSMART

Application for managing IoT modules in aquaponics farming.

This app was created for recruitment purposes for Frontend Developer position in [Luna Scientific](https://lunascientific.com/pl) company. Backend part was provided by recruiter - this README will cover frontend part.

## Built With

- [React](https://reactjs.org/) v18.3.1 - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) v6.24.1 - Declarative routing for React applications
- [React Hook Form](https://react-hook-form.com/) v7.52.1 - Performant, flexible and extensible forms with easy-to-use validation
- [Mui](https://mui.com/) v5.16.0 - React components that implement Google's Material Design
- [TanStack React Query](https://react-query.tanstack.com/) v5.50.1 - Fetch, cache and update server state in React applications
- [Day.js](https://day.js.org/) v1.11.11 - Fast, immutable date library alternative to Moment.js
- [Chart.js](https://www.chartjs.org/) v4.4.3 - Simple yet flexible JavaScript charting library
- [Zustand](https://github.com/pmndrs/zustand) v4.5.4 - Small, fast and scalable state management for React
- [Socket.IO Client](https://socket.io/docs/v4/client-api/) v4.7.5 - Real-time bidirectional event-based communication

## Setup

Here's a quick setup how you can start dev server using Docker or Node.js.

You will need to run Backend and Frontend parts.

#### With Docker

1. Download [Docker](https://www.docker.com/products/docker-desktop/)

2. Clone the repository

   ```
       git clone <repository-url>
       cd luna-recruitment
   ```

3. Build docker images (after first launch you don't need to use --build flag anymore):

   ```
       docker-compose up --build
   ```

4. Docker containers for backend and frontend should now be running:

- Backend: Accessible at http://localhost:3001
- Frontend: Accessible at http://localhost:3000

To stop docker containers use:
`docker-compose down`

#### With Node.js

1. Clone the repository

   ```
       git clone <repository-url>
       cd luna-recruitment
   ```

2. Run backend server

   ```
       cd backend
       npm install
       npm start
   ```

   Backend server should now be running on http://localhost:3001

3. Run frontend part
   ```
       cd frontend
       npm install
       npm run dev
   ```
   Backend server should now be running on http://localhost:3000

## Features

- Modules page
  - List of all modules (by clicking on module card user will be navigated to module details page)
  - List filtering (by name and availability)
  - Possibility to Add New Modules
- Module details page
  - Display module basic info (name, description, availability, target temperature, actual temperature)
  - Live temperature updates
  - Display other paramters (pH, Ammonia, Nitrate, etc...) - this data is mocked in frontend
  - Temperature history
    - Select start date, end date and mode (daily or hourly)
    - Display requested data in chart
  - Edit module

## Testing

Test are created with [Jest](https://jestjs.io) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

To run tests:

1. Go to frontend directory:

```
    cd frontend
```

2. Start testing:

```
    npm run test
```
