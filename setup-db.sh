#!/bin/bash

# Database setup script for local PostgreSQL
# Make sure Postgres.app is running before executing this script

PSQL="/Applications/Postgres.app/Contents/Versions/latest/bin/psql"
DB_NAME="site_builder"
DB_USER="${USER:-bhargobdeka}"

echo "Setting up local database..."

# Check if PostgreSQL is running
if ! $PSQL -h localhost -U $DB_USER -d postgres -c "SELECT 1;" > /dev/null 2>&1; then
    echo "❌ Error: PostgreSQL is not running or not accessible."
    echo "Please start Postgres.app from Applications and try again."
    exit 1
fi

# Create database if it doesn't exist
echo "Creating database '$DB_NAME'..."
$PSQL -h localhost -U $DB_USER -d postgres -c "CREATE DATABASE $DB_NAME;" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Database '$DB_NAME' created successfully!"
elif [ $? -eq 1 ]; then
    echo "ℹ️  Database '$DB_NAME' may already exist (this is okay)"
else
    echo "❌ Error creating database"
    exit 1
fi

# Generate DATABASE_URL
DATABASE_URL="postgresql://$DB_USER@localhost:5432/$DB_NAME"

echo ""
echo "✅ Database setup complete!"
echo ""
echo "Add this to your .env file:"
echo "DATABASE_URL=$DATABASE_URL"
echo ""
