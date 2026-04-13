# DOM Fundamentals + Selecting Elements Lab

## What this lab is for

This lab helps you practice the exact skills from the lessons:

- `dom-fundamentals`
- `selecting-elements`

You will complete TODOs in `src/main.js` to prove you can:

- find elements in the DOM,
- update text/classes/attributes,
- respond to clicks with `addEventListener`,
- write safer selectors with `data-*`,
- avoid crashes with null guards,
- understand NodeList vs Array.

## Project files

- `index.html` → already contains the page structure you need
- `src/main.js` → contains all TODOs you must complete

Do your work in `src/main.js`.

## Setup

1. Install dependencies:
   - `bun install`
2. Start the dev server:
   - `bun run dev`
3. Open the URL shown in your terminal (usually `http://localhost:5173`).

## How to complete the lab

Open `src/main.js`. Complete TODOs in order.

### TODO 1

Select `#main-header` and log it.

### TODO 2

Select all links inside `.navbar` and log the count.

### TODO 3

Find internal links (href starts with `/`) and append ` [internal]` to link text.

### TODO 4

Select required inputs and add a yellow outline.

### TODO 5

Select all `.card` elements and add `data-viewed="true"`.

### TODO 6

Find product card `data-product-id="2"` and change its price to `$24.99`.

### TODO 7

Add a click listener to `#action-btn` that:

- changes `#page-title` text,
- creates a new `<p>`,
- adds text/classes to that `<p>`,
- appends it to `#output`.

### TODO 8

Practice a null guard with a missing selector so your code does not crash.

### TODO 9

Show a brittle selector in comments, then use a stable `data-*` selector in code.

### TODO 10

Use `querySelectorAll(".card-title")` with `forEach`, then convert to array with `Array.from(...)` and `map`.

## Commit expectations

Commit as you make progress (not one giant commit at the end).

## What to submit

1. Pushed GitHub repo with completed TODOs.
2. Required video explain-back (per assignment instructions).
3. Written supplement (`dom-reflection.md` or handwritten/photo).

## Quick self-check

Before submitting, make sure:

- the app runs,
- no major console errors,
- all TODOs are completed,
- your selectors and null guard are visible in `src/main.js`.
- your commit history shows progress, not just one big commit at the end.
- your video (as browser link 🔗) and written supplement are ready to go.
