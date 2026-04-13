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
- appends it to `#output`,
- and **updates visibly on every click (counter-style behavior)**.

### TODO 8

Practice a null guard with a missing selector so your code does not crash.

### TODO 9

Show a brittle selector in comments, then use a stable `data-*` selector in code.

### TODO 10

Use `querySelectorAll(".card-title")` with `forEach`, then convert to array with `Array.from(...)` and `map`.

## Commit expectations

Commit early and often.  
Do **not** wait to commit large chunks.

- Make a commit whenever you complete a TODO or small working step.
- Your history should show progress across the lab, not one big final commit.

## What to submit

1. Pushed GitHub repo with completed TODOs.
2. One screenshot showing live DOM manipulation in DevTools on a site of your choice.
3. Required 4–6 minute video explain-back of your code and debugging process.

## Video requirements (required)

Your video must clearly show and explain:

- one fragile selector and your stable replacement,
- one null guard,
- one debugging moment (what broke and how you fixed it),
- one code block you wrote and what problem it solved,
- your counter-style click behavior from TODO 7.

## Quick self-check

Before submitting, make sure:

- the app runs,
- no major console errors,
- all TODOs are completed,
- your selectors and null guard are visible in `src/main.js`,
- your commit history shows frequent progress (not one big commit),
- your screenshot and required video are ready to submit.
