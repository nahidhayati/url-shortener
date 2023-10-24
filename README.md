# URL-SHORTENER

## Run locally

### Prerequisites

To run the app locally, you need to have `docker` installed. Additionally, for this application, we have a dockerized `PostgreSQL` and `pgAdmin`.

### Environment Configuration

Before running the server, you should define a `.env` file. You can use the provided `.env.example` as a template and customize it to your needs.

```bash
cp .env.example .env
```

### Database Migration

The application uses database migrations to set up the necessary tables in the database. To apply the migrations, follow these steps:

#### 1. Up Migration

Run the following command to apply the up migration:

```bash
npm run migrate-up
```

This will create the required tables in your database.

#### 2. Down Migration

If needed, you can also roll back the database changes using the down migration:

```bash
npm run migrate-down
```

### Start the Server

Once you've configured the environment and applied the migrations, you can start the server by running the following command:

```bash
npm start
```

The application will be accessible at `http://localhost:PORT`, where `PORT` is the port you've defined in your `.env` file.

### Accessing pgAdmin

You can access pgAdmin to manage your PostgreSQL database by navigating to `http://localhost:5050` in your web browser. The credentials for accessing pgAdmin are configured in your Docker Compose file or as specified in your `.env` file.
