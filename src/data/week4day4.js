export const week4day4 = {
  number: 17,
  label: "Day 4",
  title: "Week 4, Day 4 — Talking to Databases with SQL",
  subtitle: "SELECT, WHERE, JOIN, INSERT/UPDATE/DELETE. Read your own queries aloud.",
  color: "#3b82f6",
  sections: [
    {
      heading: "Setup — W3Schools SQL Playground",
      description:
        "All exercises use the W3Schools SQL playground at https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all. This playground has these tables pre-loaded: Customers, Orders, Products, OrderDetails, Employees, Categories, Shippers, Suppliers.",
      qa: [
        {
          q: "Playground URL and pre-loaded tables (reference)",
          a: `Playground: https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

Pre-loaded tables:
- Customers
- Orders
- Products
- OrderDetails
- Employees
- Categories
- Shippers
- Suppliers`,
        },
      ],
    },
    {
      heading: "Exercise 1 — Basic SELECT",
      description:
        "Write and run these queries in the SQL playground.",
      qa: [
        {
          q: "Show all customers — SELECT * FROM Customers;",
          a: `Query:
SELECT * FROM Customers;

How many rows came back?: 91`,
        },
        {
          q: "Show only customer names and cities — SELECT CustomerName, City FROM Customers;",
          a: `Query:
SELECT CustomerName, City FROM Customers;

Notes: - SELECT specifies which columns to show. * means all columns, but you can list specific columns separated by commas.`,
        },
        {
          q: "Show all products. Write it yourself.",
          a: "SELECT * FROM Products;",
        },
        {
          q: "Show only the product name and price for all products. Write it yourself.",
          a: "SELECT ProductName, Price FROM Products;",
        },
        {
          q: "Show all employees. Write it yourself.",
          a: "SELECT * FROM Employees;",
        },
      ],
    },
    {
      heading: "Exercise 2 — Filtering with WHERE",
      description:
        "Filter rows with WHERE, combine conditions with AND/OR, sort with ORDER BY, cap results with LIMIT.",
      qa: [
        {
          q: "Show customers from Germany — SELECT * FROM Customers WHERE Country = 'Germany';",
          a: `Query:
SELECT * FROM Customers WHERE Country = 'Germany';

How many German customers are there?: 11`,
        },
        {
          q: "Show products that cost more than $40. Write it yourself.",
          a: `My query: 
SELECT * FROM Products WHERE Price > 40;


How many products cost more than $40?: 12`,
        },
        {
          q: "Show customers from London. Write it yourself.",
          a: "SELECT * FROM Customers WHERE City = 'London';",
        },
        {
          q: "Show products in category 1 that cost less than $20. (Hint: use AND)",
          a: "SELECT * FROM Products WHERE CategoryID = 1 AND Price < 20;",
        },
        {
          q: "Show customers from Germany OR France.",
          a: "SELECT * FROM Customers WHERE Country = 'Germany' OR Country = 'France';",
        },
        {
          q: "Show products sorted by price, cheapest first. (Hint: use ORDER BY)",
          a: "SELECT * FROM Products ORDER BY Price ASC;",
        },
        {
          q: "Show the 5 most expensive products. (Hint: ORDER BY price DESC, then add LIMIT 5 at the end)",
          a: `SELECT TOP 5 *
FROM Products
ORDER BY Price DESC;`,
        },
      ],
    },
    {
      heading: "Exercise 3 — JOIN",
      description:
        "Now you'll combine tables. This is the skill that makes databases powerful.",
      qa: [
        {
          q: "Show each order with the customer's name — orders + customers joined on CustomerID",
          a: `Query:
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

Result notes: We now have a table of OrderID, CustomerName, and OrderDate. The JOIN combined data from Orders and Customers based on the matching CustomerID in both tables.`,
        },
        {
          q: "Show each product with its category name. Write the JOIN yourself.",
          a: `Template:
SELECT Products.ProductName, Categories.CategoryName
FROM Products
JOIN Categories ON _____;

My query:
SELECT Products.ProductName, Categories.CategoryName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID;`,
        },
        {
          q: "Show each order with the customer name, sorted by date (newest first). Modify query #1 to add ORDER BY Orders.OrderDate DESC at the end.",
          a: `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
ORDER BY Orders.OrderDate DESC;`,
        },
        {
          q: "Challenge — Show each product with its category name AND its supplier name. (TWO JOINs)",
          a: `Query:
SELECT Products.ProductName, Categories.CategoryName, Suppliers.SupplierName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID;

Read this carefully before running it. Can you explain what each JOIN line does?

JOIN 1 explanation: This JOIN combines Products with Categories. It looks at the CategoryID in Products and finds the matching CategoryID in Categories to bring in the CategoryName.

JOIN 2 explanation: This JOIN combines the result of the first JOIN (Products + Categories) with Suppliers. It looks at the SupplierID in Products and finds the matching SupplierID in Suppliers to bring in the SupplierName.`,
        },
      ],
    },
    {
      heading: "Exercise 4 — Write Queries for YOUR App",
      description:
        "Grab the schema you designed yesterday. Now write the SQL queries your app would actually need.",
      qa: [
        {
          q: "My 5 queries — what a user of my app would actually need",
          a: `Think about what a user of your app would do and what data the app would need to show them.

Query 1 — The morning digest: all missing assignments across both integrations: 

SELECT 
  i.role,
  i.label,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'missing'
ORDER BY i.role, a.due_at;

What it does: the core query that powers the daily email. JOINs assignments to integrations so each row knows whether it came from my Yavapai account or my daughter's school. Ordering by role first means the digest groups all "student" items together, then all "observer" items — clean section breaks.

User stories it supports:
  - Story 2 (one daily email summarizing both sides)
  - Story 3 (separate "Your stuff" / "Kid's stuff" — the role column drives the grouping)

Query 2 — Upcoming this week: 

SELECT 
  i.label AS section,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'upcoming'
  AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'
ORDER BY a.due_at;

What it does: powers the "Due this week" section of the digest. Same JOIN pattern as query 1, but filters on status = 'upcoming' and a 7-day due-date window. ORDER BY due_at means earliest-due first, regardless of whose work it is — what matters this week is what's due Monday, not who owns it.

User story it supports:
  - Story 2 (one daily email of what's missing and what's due)


Query 3 — The \"New\" badge filter (with the last-successful-digest fix): 

SELECT a.title, a.course_name, a.due_at, i.label
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.first_seen_at > (
    SELECT MAX(sent_at)
    FROM digests
    WHERE user_id = 1 AND delivery_status = 'sent'
  );

What it does: finds assignments my app first saw AFTER the most recent SUCCESSFUL digest. These are the rows that get the red "New" badge in the email. The subquery is what makes this trustworthy — if a digest failed to send yesterday, the comparison falls back to the last actually-sent digest, so I don't accidentally mark items as "old" that the user never saw.

User story it supports:
  - Story 4 (New badges since last digest)

This is also the query that directly cashes in on yesterday's edge-case work — the delivery_status = 'sent' filter is the bug fix from the scaling section.


Query 4 — List my Canvas integrations with current sync health: 

SELECT id, role, label, canvas_url, last_synced_at, last_sync_status, last_sync_error
FROM integrations
WHERE user_id = 1;

What it does: feeds a settings/dashboard view of "what Canvas accounts have I connected, and are they working?" Surfaces last_sync_error so I can tell when a token has broken without having to dig through logs.

User story it supports:
  - Story 1 (set up observer + student tokens — this is the management view of those tokens)

Query 5 — UPSERT on sync: insert new assignments OR refresh existing ones: 

INSERT INTO assignments 
  (integration_id, canvas_assignment_id, course_name, title, due_at, status, html_url, first_seen_at, last_seen_at, created_at)
VALUES 
  (2, 901234, 'ENG 102', 'Literary Analysis Paper', '2026-05-25 23:59:00', 'upcoming', 'https://yc.instructure.com/courses/1/assignments/901234', NOW(), NOW(), NOW())
ON CONFLICT (integration_id, canvas_assignment_id)
DO UPDATE SET 
  status = EXCLUDED.status,
  due_at = EXCLUDED.due_at,
  last_seen_at = NOW();

What it does: the workhorse of the daily Canvas sync. For every assignment pulled from Canvas, try to insert it. If a row already exists with the same (integration_id, canvas_assignment_id) — the UNIQUE constraint I added on Day 3 — update it instead.

Important detail: first_seen_at is set on insert and NEVER touched on update. last_seen_at refreshes every sync. That timing distinction is exactly what query 3's "New" filter depends on — if I updated first_seen_at on every sync, every assignment would always look "new" and the badge would be meaningless.

User stories it supports:
  - Story 2 (data has to land in the database before the digest can read it)
  - Story 4 (preserves the first_seen_at timestamp that the "New" badge needs)
`,
        },
       {
          q: "AI review — syntax errors and missing queries",
          a: `Prompt used:

Here's my database schema:
users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
last_sync_status      -- NEW: 'success' or 'failed'
last_sync_error       -- NEW: error message from last failed sync
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

  Constraint: UNIQUE(integration_id, canvas_assignment_id)
  -- prevents duplicate rows when the same assignment gets re-pulled on subsequent syncs

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at 

Here are SQL queries my app would need:

SELECT 
  i.role,
  i.label,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'missing'
ORDER BY i.role, a.due_at;  

SELECT  
  i.label AS section,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'upcoming'
  AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'
ORDER BY a.due_at;                                                                                                                          

SELECT a.title, a.course_name, a.due_at, i.label 
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.first_seen_at > (
    SELECT MAX(sent_at)
    FROM digests
    WHERE user_id = 1 AND delivery_status = 'sent'
  );                                                                                                                                                             

SELECT id, role, label, canvas_url, last_synced_at, last_sync_status, last_sync_error 
FROM integrations
WHERE user_id = 1;                                                                                                                         

INSERT INTO assignments  
  (integration_id, canvas_assignment_id, course_name, title, due_at, status, html_url, first_seen_at, last_seen_at, created_at)
VALUES 
  (2, 901234, 'ENG 102', 'Literary Analysis Paper', '2026-05-25 23:59:00', 'upcoming', 'https://yc.instructure.com/courses/1/assignments/901234', NOW(), NOW(), NOW())
ON CONFLICT (integration_id, canvas_assignment_id)
DO UPDATE SET 
  status = EXCLUDED.status,
  due_at = EXCLUDED.due_at,
  last_seen_at = NOW();   

Check my SQL syntax. Are there any errors? 

Are there queries I'm missing that a typical user would need?


AI's response: 

My SQL is mostly correct PostgreSQL syntax. The AI found a few logic issues, not major syntax errors.

1. MY QUERIES ARE VALID POSTGRESQL

Postgres-specific syntax I'm using that works correctly:
  NOW()
  INTERVAL '7 days'
  ON CONFLICT (...) DO UPDATE

So assuming my app uses PostgreSQL, the syntax is good.

The main thing I should change is this pattern:
  WHERE i.user_id = 1

That works for testing, but in the real app I should use a parameter:
  WHERE i.user_id = $1

So my backend can safely pass in the logged-in user's ID (and the database driver handles escaping, preventing SQL injection).


2. ONE REAL BUG: MY "NEW ASSIGNMENTS" QUERY

The query as written:

  SELECT a.title, a.course_name, a.due_at, i.label 
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = 1
    AND a.first_seen_at > (
      SELECT MAX(sent_at)
      FROM digests
      WHERE user_id = 1 AND delivery_status = 'sent'
    );

The issue: if the user has NEVER received a digest before, SELECT MAX(sent_at) returns NULL. And the comparison a.first_seen_at > NULL returns no rows. So on first run, the user would get zero "new" badges even though everything is new.

Fixed version with COALESCE fallback:

  SELECT 
    a.title,
    a.course_name,
    a.due_at,
    i.label
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = $1
    AND a.first_seen_at > COALESCE(
      (
        SELECT MAX(sent_at)
        FROM digests
        WHERE user_id = $1 
          AND delivery_status = 'sent'
      ),
      '-infinity'::timestamp
    );

If the columns use timestamptz instead of timestamp, use '-infinity'::timestamptz.

The '-infinity' value is a Postgres sentinel that's always less than any real timestamp, so on a brand-new account where MAX returns NULL, EVERYTHING gets flagged as new — which is exactly what I want.


3. MY UPCOMING QUERY WORKS, BUT SHOULD USE THE USER'S LOOKAHEAD SETTING

Currently hardcoded:
  AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'

But my users table already has a lookahead_days column. Better version:

  SELECT  
    i.label AS section,
    a.course_name,
    a.title,
    a.due_at,
    a.html_url
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  JOIN users u ON u.id = i.user_id
  WHERE i.user_id = $1
    AND a.status = 'upcoming'
    AND a.due_at BETWEEN NOW() AND NOW() + (u.lookahead_days * INTERVAL '1 day')
  ORDER BY a.due_at;

Now if I want a 14-day window someday and my partner wants a 7-day window, the query handles both — read the setting from the user row instead of hardcoding.


4. MY UPSERT QUERY IS GOOD, BUT SHOULD UPDATE MORE FIELDS

Current ON CONFLICT only updates status, due_at, and last_seen_at. If Canvas changes the assignment title, course name, or URL, my local row stays stale. Better:

  ON CONFLICT (integration_id, canvas_assignment_id)
  DO UPDATE SET 
    course_name = EXCLUDED.course_name,
    title = EXCLUDED.title,
    due_at = EXCLUDED.due_at,
    status = EXCLUDED.status,
    html_url = EXCLUDED.html_url,
    last_seen_at = NOW();

CRITICAL: do NOT update first_seen_at in the conflict clause. That original timestamp is what the "New" badge depends on — if I refresh it on every sync, everything always looks new and the badge becomes meaningless.


5. QUERIES I'M MISSING

5a. Insert a digest row after sending the email:

  INSERT INTO digests
    (user_id, sent_at, missing_count, upcoming_count, soon_count, subject, html_body, text_body, delivery_status, created_at)
  VALUES
    ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, NOW());

5b. Mark an integration as successfully synced:

  UPDATE integrations
  SET 
    last_synced_at = NOW(),
    last_sync_status = 'success',
    last_sync_error = NULL
  WHERE id = $1;

5c. Mark an integration as failed:

  UPDATE integrations
  SET 
    last_synced_at = NOW(),
    last_sync_status = 'failed',
    last_sync_error = $2
  WHERE id = $1;

5d. Find stale assignments (disappeared from Canvas):

  SELECT 
    a.id,
    a.title,
    a.course_name,
    a.last_seen_at
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = $1
    AND a.last_seen_at < NOW() - INTERVAL '2 days';

Eventually I may want an is_active boolean instead of deleting, so digest history can still reference old assignments without broken FKs:

  ALTER TABLE assignments ADD COLUMN is_active BOOLEAN DEFAULT true;

  UPDATE assignments
  SET is_active = false
  WHERE integration_id = $1
    AND last_seen_at < NOW() - INTERVAL '2 days';

5e. Dashboard count query (powers the colored stat tiles in the email header):

  SELECT
    COUNT(*) FILTER (WHERE a.status = 'missing') AS missing_count,
    COUNT(*) FILTER (WHERE a.status = 'upcoming') AS upcoming_count,
    COUNT(*) FILTER (
      WHERE a.status = 'upcoming'
        AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '2 days'
    ) AS soon_count
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = $1;

The COUNT(*) FILTER pattern is Postgres-specific and lets me get three counts in one query instead of three round trips.

5f. Get user digest settings:

  SELECT email, delivery_time, lookahead_days, timezone
  FROM users
  WHERE id = $1;

5g. Update digest preferences:

  UPDATE users
  SET delivery_time = $2, lookahead_days = $3, timezone = $4
  WHERE id = $1;


6. SCHEMA IMPROVEMENT WORTH ADDING

Add an updated_at column to my main tables (users, integrations, assignments). Right now I have created_at but no easy way to know when a record was last changed. Useful for debugging and for any future "what changed recently" features.


7. HELPFUL INDEXES

My JOINs and filters will be common, so these indexes would speed things up:

  CREATE INDEX idx_integrations_user_id ON integrations(user_id);
  CREATE INDEX idx_assignments_integration_id ON assignments(integration_id);
  CREATE INDEX idx_assignments_status_due_at ON assignments(status, due_at);
  CREATE INDEX idx_digests_user_id_sent_at ON digests(user_id, sent_at);

The composite (status, due_at) index supports my "upcoming this week" query directly — the filter on status AND the ORDER BY due_at both get the index.


OVERALL JUDGMENT

Schema and queries are solid. The biggest fix is the NULL handling on the "new assignments" subquery — without COALESCE, brand-new users get an empty digest on day one. The biggest improvement is using the lookahead_days column instead of hardcoding 7 days.`,
        },
       {
          q: "Fixes applied and new queries added",
          a: `Taking 7 things from the AI review, deferring 1. Net result: every query I had now uses real parameters, the "New" badge works on day one, and there are seven new queries the app actually needs.

CHANGES TO EXISTING QUERIES

1. Parameterize everything. Replaced all WHERE i.user_id = 1 with WHERE i.user_id = $1.
   Why: hardcoded values only work in testing. Real app code passes the logged-in user's ID as a parameter, which lets the database driver handle escaping and prevents SQL injection.

2. Fixed the "New" badge NULL bug.
   The subquery SELECT MAX(sent_at) FROM digests WHERE delivery_status = 'sent' returns NULL on day one (no digests have been sent yet). And a.first_seen_at > NULL is itself NULL, not true — so zero rows come back. A brand-new user's first-ever digest would have no "New" badges, which defeats the entire point.

   Fixed with COALESCE and a Postgres '-infinity' sentinel:

     SELECT a.title, a.course_name, a.due_at, i.label
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     WHERE i.user_id = $1
       AND a.first_seen_at > COALESCE(
         (SELECT MAX(sent_at) FROM digests WHERE user_id = $1 AND delivery_status = 'sent'),
         '-infinity'::timestamptz
       );

   The '-infinity' value is always less than any real timestamp, so on a brand-new account everything qualifies as "new" — which is exactly the behavior I want.

3. The "upcoming" query now uses the user's lookahead_days setting instead of hardcoding 7 days.

     SELECT i.label AS section, a.course_name, a.title, a.due_at, a.html_url
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     JOIN users u ON u.id = i.user_id
     WHERE i.user_id = $1
       AND a.status = 'upcoming'
       AND a.due_at BETWEEN NOW() AND NOW() + (u.lookahead_days * INTERVAL '1 day')
     ORDER BY a.due_at;

   Embarrassing oversight in v1 — I added lookahead_days to the users table back in Day 3 and then hardcoded 7 in the query anyway. Fixed.

4. UPSERT now updates more fields (but still NEVER touches first_seen_at).

     ON CONFLICT (integration_id, canvas_assignment_id)
     DO UPDATE SET 
       course_name = EXCLUDED.course_name,
       title = EXCLUDED.title,
       due_at = EXCLUDED.due_at,
       status = EXCLUDED.status,
       html_url = EXCLUDED.html_url,
       last_seen_at = NOW();

   If a teacher renames an assignment or moves the due date in Canvas, my local copy now reflects that on the next sync. first_seen_at is deliberately not in the update list — refreshing it would break the "New" badge logic (everything would always look new).


NEW QUERIES (7 total — all things the app needs but I didn't write originally)

5. Insert a digest row after the email sends:

     INSERT INTO digests
       (user_id, sent_at, missing_count, upcoming_count, soon_count, subject, html_body, text_body, delivery_status, created_at)
     VALUES
       ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, NOW());

6. Mark an integration as successfully synced:

     UPDATE integrations
     SET last_synced_at = NOW(), last_sync_status = 'success', last_sync_error = NULL
     WHERE id = $1;

7. Mark an integration as failed (with the error message):

     UPDATE integrations
     SET last_synced_at = NOW(), last_sync_status = 'failed', last_sync_error = $2
     WHERE id = $1;

   Queries 6 and 7 are the pair that actually MAKE last_sync_status and last_sync_error work. Without these, those columns just sit empty forever and yesterday's edge-case work was for nothing.

8. Find stale assignments (haven't shown up in Canvas in 2+ days — probably means the course ended or the teacher removed them):

     SELECT a.id, a.title, a.course_name, a.last_seen_at
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     WHERE i.user_id = $1
       AND a.last_seen_at < NOW() - INTERVAL '2 days';

9. Dashboard counts (the three colored stat tiles at the top of the email):

     SELECT
       COUNT(*) FILTER (WHERE a.status = 'missing') AS missing_count,
       COUNT(*) FILTER (WHERE a.status = 'upcoming') AS upcoming_count,
       COUNT(*) FILTER (
         WHERE a.status = 'upcoming' AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '2 days'
       ) AS soon_count
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     WHERE i.user_id = $1;

   COUNT(*) FILTER is Postgres-specific and lets me get three counts in one query instead of three round trips. Nice efficiency win.

10. Get user's digest preferences (powers a settings page):

     SELECT email, delivery_time, lookahead_days, timezone
     FROM users
     WHERE id = $1;

11. Update digest preferences (when the user changes settings):

     UPDATE users
     SET delivery_time = $2, lookahead_days = $3, timezone = $4
     WHERE id = $1;


SCHEMA ADDITIONS

12. Adding updated_at columns to users, integrations, and assignments.
    Right now I have created_at but no way to know when a row was last touched. Useful for debugging ("did this assignment actually get refreshed in last night's sync?") and any future "what changed recently" features.

    Implementation note: in Postgres I can wire this up with a trigger that auto-updates updated_at on every UPDATE, so the app code doesn't have to remember to set it.

13. Adding four indexes to speed up the queries that run every day:

     CREATE INDEX idx_integrations_user_id ON integrations(user_id);
     CREATE INDEX idx_assignments_integration_id ON assignments(integration_id);
     CREATE INDEX idx_assignments_status_due_at ON assignments(status, due_at);
     CREATE INDEX idx_digests_user_id_sent_at ON digests(user_id, sent_at);

   The composite (status, due_at) index is the one that matters most — my upcoming-this-week query filters on status AND orders by due_at, and a composite index supports both at once.


WHAT I'M DEFERRING

is_active boolean column on assignments instead of deleting stale rows.
The AI suggested soft-deleting old assignments so digest history can still reference them. Reasonable but premature — for MVP, just DELETE stale assignments. If I later add a "show me what was on last Tuesday's digest" feature, I'll revisit. (Or, more likely, the digests.html_body already preserves what got sent, so I don't need the original assignment row anyway.)`,
        },
      ],
    },
    {
      heading: "Exercise 5 — INSERT, UPDATE, DELETE",
      description:
        "Back to the W3Schools playground.",
      qa: [
        {
          q: "Add a new customer — INSERT into Customers",
          a: `Query:
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('New Student Books', 'Sample Contact', '123 Main St', 'Chicago', '60601', 'USA');

Confirm with: SELECT * FROM Customers WHERE CustomerName = 'New Student Books';

Result: Unable to run this exact query on the playground since it doesn't allow INSERTs, but in a real database this would add a new row to the Customers table with the provided values.

Note on why six columns: Some columns can't be left blank (NOT NULL). Filling all six avoids surprises. In your own app, you'll decide which columns are required and which are optional.`,
        },
        {
          q: "Update a product's price — UPDATE product #1 to $25.00",
          a: `Query:
UPDATE Products SET Price = 25.00 WHERE ProductID = 1;

Confirm with: SELECT * FROM Products WHERE ProductID = 1;

Result: Unable to run this exact query on the playground since it doesn't allow UPDATEs, but in a real database this would change the price of the product with ProductID 1 to $25.00. The SELECT query would show the updated price.`,
        },
        {
          q: "Delete the customer just added — DELETE FROM Customers",
          a: `Query:
DELETE FROM Customers WHERE CustomerName = 'New Student Books';

Confirm by running the SELECT again — they should be gone.

Result: Unable to run this exact query on the playground since it doesn't allow DELETEs, but in a real database this would remove the row for 'New Student Books' from the Customers table. Running the SELECT query again would return zero rows.`,
        },
       {
          q: "Write INSERT, UPDATE, DELETE for YOUR app",
          a: `Using your schema from yesterday:

One INSERT that adds a new row to your main table:

-- Adding my Yavapai student token — the second integration that makes Canvas Daily dual-role.
-- Without this row the digest only covers my daughter; with it, it covers both of us.

INSERT INTO integrations 
  (user_id, role, label, canvas_url, canvas_token, canvas_user_id, created_at)
VALUES 
  (1, 'student', 'My Yavapai account', 'https://yc.instructure.com', 'encrypted_token_value_here', 50412, NOW());


One UPDATE that changes something (e.g., updating an event's date):

-- Marking an integration as failed after a sync error (this is the query that USES the last_sync_status
-- and last_sync_error columns I added in the edge-case work earlier this week).
-- Without this UPDATE running, those columns just sit empty forever.

UPDATE integrations
SET 
  last_synced_at = NOW(),
  last_sync_status = 'failed',
  last_sync_error = 'Canvas API returned 401 — token may be expired'
WHERE id = 2;


One DELETE that removes a row:

-- Cleaning up stale assignments that haven't shown up in a Canvas sync for 14+ days.
-- Probably means the course ended or the instructor removed the assignment.
-- Cascades automatically aren't relevant here since assignments have no children — they're leaf rows.

DELETE FROM assignments 
WHERE last_seen_at < NOW() - INTERVAL '14 days';


Note: in real app code I'd parameterize the hardcoded values (id = 1, id = 2, etc.) with $1, $2 placeholders so the database driver handles escaping safely. The hardcoded versions above are for clarity in the exercise — they show what the query is actually doing.`,
        },
      ],
    },
    {
      heading: "Exercise 6 — Schema Refinement",
      description:
        "Find a partner (different from yesterday if possible). Share your schemas AND your queries from Exercise 4. This is the final revision before you start building next week.",
      qa: [
        {
          q: "Partner review — gaps and constraints we found",
          a: `Ask each other:
- "Are there queries here that the schema can't support?" (Example: a query filtering by neighborhood but no neighborhood column exists.)
- "Is there data the app needs that doesn't have a table or column yet?"
- "Are there any columns that should have constraints?" (Can't be empty, must be unique, etc.)

Gaps my partner found in my schema:


Gaps I found in my partner's schema:`,
        },
        {
          q: "My schema updates from this review",
          a: "",
        },
      ],
    },
    {
      heading: "Peer Activity — Verbal Mini-Demo",
      description:
        "Stay in the same breakout room from Exercise 6. Each person gets 2 minutes to read one of their SQL queries aloud and explain what each clause does — WITHOUT looking at the doc once you start talking.",
      qa: [
        {
          q: "The query I'm reading aloud (with at least two clauses)",
          a: `Pick a query that uses at least two clauses (e.g., SELECT + WHERE, or SELECT + JOIN).

My query:`,
        },
        {
          q: "My walkthrough — table, keywords, user story",
          a: `What table is this querying?


What does each keyword do (SELECT, FROM, WHERE, JOIN, ORDER BY)?


What user story does this query support?`,
        },
        {
          q: "Partner's follow-up question and my answer",
          a: `Examples your partner might ask:
- "What would happen if you removed the WHERE clause?"
- "Why is the JOIN necessary — couldn't you just SELECT from one table?"

`,
        },
        {
          q: "Reading SQL aloud surfaced what? What clause or pattern do I still want to nail down?",
          a: "",
        },
      ],
    },
  ],
};
