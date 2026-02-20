-- nextauth tables (start)
CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,
 
  PRIMARY KEY (identifier, token)
);
 
CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE users
(
  id SERIAL,
  "firstName" VARCHAR(255),
  "lastName" VARCHAR(255),
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
 
  PRIMARY KEY (id)
);

-- nextauth tables (end)

CREATE TABLE profiles
(
  id SERIAL,
  "userId" INTEGER NOT NULL UNIQUE,
  bio TEXT,
  avatar_url TEXT,
  phone VARCHAR(20),
  date_of_birth DATE,
  socials JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  PRIMARY KEY (id),
  FOREIGN KEY ("userId") REFERENCES users(id) ON DELETE CASCADE
);

