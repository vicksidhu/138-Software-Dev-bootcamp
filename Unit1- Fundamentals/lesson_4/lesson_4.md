<!-- ---
marp: true
theme: default
paginate: true
--- -->

![](../../resources/images/circuitstream_logo.png)

# Software Development Bootcamp

## Unit 1: Foundations of Software Development

### Lesson 4

### Gurneesh Singh

---

# Agenda

- Quick recap: CSS fundamentals
- The CSS box model
- Selectors, specificity, and the cascade
- Inheritance & text styling
- CSS reset/normalize
- Hands-on: Menu styling exercise

---

# Learning Objectives

By the end of this session, you will be able to:

- Explain how the CSS box model affects layout and sizing
- Choose and combine selectors effectively (types, classes, IDs)
- Predict which CSS rules win using specificity and cascade
- Apply text styling best practices for readability
- Use a reset/normalize strategy for consistent cross-browser styling
- Build a styled menu using the concepts learned

---

# Quick Recap: CSS Fundamentals

- HTML gives structure; CSS gives presentation
- A CSS rule is written as:

```css
selector {
  property: value;
}
```

- Common selectors: element (`p`), class (`.card`), ID (`#main`)
- Styles are applied based on **cascade** + **specificity**

---

# Adding CSS to an HTML Page

## Three ways to include CSS

### External (recommended)

```html
<link rel="stylesheet" href="styles.css" />
```

### Internal (in `<style>` tag)

```html
<style>
  body {
    background: #f4f4f4;
  }
</style>
```

### Inline (on an element)

```html
<h1 style="color: blue;">Hello</h1>
```

> Use external stylesheets for most projects; inline styles are only for quick testing.

---

# Section 1: The CSS Box Model

## Every HTML element is a box

![](../../resources/images/box_model.png)

**Box model layers (inside → outside):**

- Content (text/images)
- Padding (inside spacing)
- Border (outline)
- Margin (outside spacing)

---

# Box Sizing: Content-box vs Border-box

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #333;
}
```

- Default (`content-box`): width applies to content only
- `border-box`: width includes padding + border

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

# CSS Units (px, em, rem, %)

- `px` — fixed pixels
- `em` — relative to the element's font size
- `rem` — relative to the root (`html`) font size
- `%` — relative to the parent size
- `vw` / `vh` — viewport width/height

```css
html {
  font-size: 16px;
}
p {
  font-size: 1rem;
} /* 16px */
h1 {
  font-size: 2rem;
} /* 32px */
```

---

# Padding vs Margin

## Padding: space inside the box

```css
.box {
  padding: 10px 15px;
}
```

## Margin: space outside the box

```css
.box {
  margin: 20px;
}
```

---

# Border Basics

```css
.box {
  border: 2px solid #333;
  border-radius: 8px;
}
```

- `border-width`, `border-style`, `border-color`
- `border-radius` rounds corners

---

# Box Model Exercise

1. Create an HTML file with a `<div>` containing text.
2. Add CSS that:
   - Sets width & height
   - Adds padding inside the box
   - Adds a visible border + rounded corners
   - Adds margin around the box
   - Applies a background color
3. Try different units (`px`, `em`, `%`) and observe how sizing changes.

---

# Section 2: Selectors, Specificity & the Cascade

## Selector Types (quick review)

- **Type selector**: `p` targets all `<p>` elements
- **Class selector**: `.highlight` reusable styling
- **ID selector**: `#main` unique element
- **Combinators**: selectors that describe relationships between elements

---

# Combinators: Relationships Between Elements

## Descendant selector (space)

Targets any element nested inside another.

```css
nav a {
  color: blue;
}
```

## Child selector (`>`)

Targets only direct children.

```css
ul > li {
  list-style: square;
}
```

---

## Adjacent sibling (`+`)

Targets the element immediately following another.

```css
h2 + p {
  margin-top: 0;
}
```

## General sibling (`~`)

Targets any later sibling.

```css
label ~ input {
  margin-left: 10px;
}
```

---

# Attribute Selectors & Pseudo-classes

## Attribute selectors

```css
/* Matches <input type="text"> */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Matches elements with a data-* attribute */
[data-state="active"] {
  color: green;
}
```

---

## Pseudo-classes

Pseudo-classes match elements based on state or position.

```css
/* Hover state (mouse over) */
a:hover {
  text-decoration: underline;
}

/* Disabled state */
button:disabled {
  opacity: 0.5;
}
```
---
### Common structural pseudo-classes

```css
/* First item in a list */
ul li:first-child {
  font-weight: bold;
}

/* Every 2nd item */
ul li:nth-child(2n) {
  background: #f9f9f9;
}

/* Exclude specific elements */
button:not(.primary) {
  opacity: 0.8;
}
```
---
### Common user-state pseudo-classes

```css
input:focus {
  outline: 2px solid blue;
}

a:active {
  transform: translateY(1px);
}
```

---

# When to Use Each Selector

- **Type**: Base styles for elements (typography, spacing)
- **Class**: Reusable patterns (buttons, cards)
- **ID**: Unique elements (page anchors, JS hooks)

> Best practice: Favor **classes** over IDs for styling.

---

# Specificity in a Nutshell

Every selector has a “score” made of four parts (a, b, c, d):

- **a** = inline styles (`style="..."`)
- **b** = IDs
- **c** = classes, attributes, pseudo-classes (`.btn`, `[type="text"]`, `:hover`)
- **d** = element names and pseudo-elements (`div`, `::before`)

Higher values win (compare left → right).
---
```css
/* Specificity values shown as (a,b,c,d) */
p {
  color: blue;
} /* 0,0,0,1 */
.content p {
  color: green;
} /* 0,0,1,1 */
#sidebar .content p {
  color: red;
} /* 0,1,1,1 */
```

---

### How specificity works together with the cascade

- If two rules have the same specificity, the one written later wins.
- Inline styles (1,0,0,0) override stylesheet rules.
- `!important` overrides normal specificity, but use sparingly.

---

# Cascade: Order Matters

- Later rules override earlier rules if specificity is equal.
- Use source order intentionally to control overrides.
- Avoid `!important` except as a last resort.

---

# Section 3: Inheritance

## Some properties are inherited by default

```css
body {
  font-family: Arial, sans-serif;
  color: #333;
}
```

Child elements inherit text-related properties like:

- `color`, `font-family`, `line-height`, `text-align`

Non-inherited properties include:

- `margin`, `padding`, `border`, `width`, `height`, `background`

---

# Section 4: Styling Text

## Common Text Properties

```css
p {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
```

Other useful properties:

- `font-weight`, `font-style`, `text-align`
- `text-decoration`, `text-transform`, `letter-spacing`

---

# Web Fonts & Font Stacks

## Font stack (fallbacks)

```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

## Google Fonts (example)

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

# Text Styling Best Practices

1. **Readability first**
   - High contrast text/background
   - Minimum 16px base font size
   - 45–75 characters per line

2. **Responsive typography**
   - Use `em` / `rem` for scalable text
   - Adjust line-height for different screen sizes

3. **Hierarchy**
   - Use headings, weight, and color to guide the eye
   - Keep styles consistent across the site

---

# Section 5: Reset / Normalize

## Why use a reset/normalize?

Browsers apply different default styles (margins, fonts, etc.). A reset/normalize gives you a consistent starting point.

## How to apply it (no npm needed)

1. Create a file named `reset.css` or `normalize.css`.
2. Copy the reset/normalize rules into it (or grab a CDN version).
3. Link it in your HTML **before** your main stylesheet:

```html
<link rel="stylesheet" href="reset.css" />
<link rel="stylesheet" href="styles.css" />
```

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

# Reset vs Normalize

- **Reset**: removes all default styling (blank slate)
- **Normalize**: keeps useful defaults and fixes inconsistencies

Use one of these strategies before your own styles.

---

# Section 6: Menu Styling Exercise

## Goal: Style the menu so it looks like a restaurant menu

1. Open `Menu exercise_starter.html` in `lesson_4/`
2. Add semantic structure (sections, headings, lists)
3. Create an external CSS file (e.g., `styles.css`)
4. Apply:
   - Reset/normalize or border-box fix
   - Box model spacing (padding, margin, border)
   - Selectors (types, classes, IDs) to style sections
   - Text styling for headings, item names, and prices
   - Clear visual hierarchy (categories, item names, descriptions)

---

# Menu Styling Checklist

- [ ] Add clear HTML structure (sections + headings)
- [ ] Add classes/IDs to key elements
- [ ] Use the box model (padding/margin/border) for spacing
- [ ] Make headings & prices easy to scan

---

# CSS Resources

- MDN Web Docs - CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- CSS-Tricks: https://css-tricks.com/
- Can I Use: https://caniuse.com/
- Google Fonts: https://fonts.google.com/

---

# Practice before Next Class

## Task

Take the musician website you created in previous lessons and enhance it with CSS.

- Apply box model concepts and spacing
- Use a variety of selectors (type, class, ID)
- Improve typography and layout
- Add hover/interactive styles

> Try adding a theme (dark/light) or a hover animation for buttons.
