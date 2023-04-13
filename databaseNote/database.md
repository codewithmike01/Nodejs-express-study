# Type of database

- Relational : A database made up of rows and columns to represent data
- MySQL , Oracle

- NoSQL(Not Only SQL) it stores data in JSON document format, does not use traditional table-base structure.
- CouchDB , Mongo db, Redis

## Mongo DB

### Road map

- Installation
- Configuration
- Connecting to app (Nodejs)
- Data MOdeling
  - Database association (one to one, one to many, many to many)

### Features of MongoDB Json (Javscript Object Notation) Data format

- {
  "\_id": "6474g498733",
  "firstName":"John Homely"
  "city": ["Linger", "Frosty"],
  }
- Easy to read
- Easy to work with in javascript.

### Why use Mongo DB

- Schemaless
- Document oriented ( working with Object Oriented Programming)
- High performace, using index base search algorithm that enables first serch of data (Suitable for large scale applications).

### Terminology in MongoDB

- Database is a container for storing collection.

- Collection is a group/related of documents

- Document is a data in a mongo DB collection

- Fields are individual pices of sata in a document.

### How we use MongoDB

#### Two ways

- MongoDB shell : Using mongoDB wuthout a programmign language using the terminal. but it has limited functionality and only used as a play ground for workng with MongoDB

- MongoDB drivers: Using MongoDB with a programming language. drivers help us to interact with a specific programming language.
