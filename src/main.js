// DOM Fundamentals + Selecting Elements starter
// Complete each TODO in order. Commit after each major step.

// ----------------------------------------------------
// TODO 1: Select the main header by ID and log it.
// Example target: <header id="main-header">
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 2: Select all links inside .navbar and log count.
// Use querySelectorAll(".navbar a")
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 3: Mark internal links.
// Internal links start with "/".
// Append " [internal]" to each internal link text.
// Hint: querySelectorAll('a[href^="/"]') OR getAttribute("href").startsWith("/")
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 4: Select all required inputs and add yellow outline.
// style.outline = "2px solid gold"
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 5: Select all .card elements and add data-viewed="true".
// Use setAttribute("data-viewed", "true")
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 6: Select product data-product-id="2" and change price to "$24.99".
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 7: Add click behavior to #action-btn.
// On click:
// - change #page-title text
// - create a new <p>
// - set new <p> textContent
// - set new <p> className with Tailwind classes
// - append it to #output
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 8: Practice null guard with a missing selector.
// Try selecting ".does-not-exist"
// Use either:
// if (el) { ... }
// OR
// el?.addEventListener(...)
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 9: Refactor brittle selector to stable selector.
//
// Brittle example:
// const title = document.querySelector("main .card .card-title");
//
// Refactor using data attribute:
// const title = document.querySelector('[data-title-id="1"]');
//
// Keep both versions in comments, and use only the stable version in code.
// ----------------------------------------------------

// ----------------------------------------------------
// TODO 10: NodeList practice
// - Use querySelectorAll(".card-title") and forEach to log text.
// - Then convert with Array.from(...) and use map to build an array of texts.
// ----------------------------------------------------

// Optional quick check in console:
console.log("Starter loaded. Begin TODO 1.");
