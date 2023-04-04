/* 
 *  Create & init site content
 */

-- ITEMS --

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "",
  unit TEXT DEFAULT "",
  price INTEGER DEFAULT 0,
  qty INTEGER DEFAULT 0,
  desc TEXT DEFAULT ""
);

INSERT INTO items
  (name, unit, price, qty, desc) 
VALUES 
  ("Biscotti", "bag of 10", 500, 5, "Great dunked in coffee."),
  ("Milk", "quart", 500, 3, "Good source of calcium."),
  ("Eggs", "dozen", 400, 7, "Great for breakfast and baking."),
  ("Whole chicken", "lb", 750, 2, "Perfect for roasting."),
  ("Honey", "pint", 1350, 4, "Sweetens your tea.");

-- ANNOUNCEMENTS --

CREATE TABLE IF NOT EXISTS announce (
  id INTEGER PRIMARY KEY,
 title TEXT DEFAULT "",
  date TEXT DEFAULT "",
  body TEXT DEFAULT ""
);

INSERT INTO announce 
  (title, date, body)
VALUES (
  "Open for business", "Jan. 15", "Renovations of our new storefront are complete, and we're open for business."
);

-- EVENTS --

CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY,
 title TEXT DEFAULT "",
  date TEXT DEFAULT "",
  body TEXT DEFAULT ""
);

INSERT INTO events (
 title, date, body
) VALUES (
  "Cider Fest", 
  "October 20, 2pm-6pm", 
  "Celebrate the season with fresh-pressed cider from our orchards."
), (
  "Bread baking workshop", 
  "December 13, 9am-noon", 
  "Learn how to create and cultivate a sourdough starter."
);

-- MOTD --

CREATE TABLE IF NOT EXISTS motd (
  id INTEGER PRIMARY KEY,
 title TEXT DEFAULT "",
  body TEXT DEFAULT ""
);

INSERT INTO motd (
 title, body
) VALUES (
  "Message of the day", "Eat better food. Support your local farm stand."
);