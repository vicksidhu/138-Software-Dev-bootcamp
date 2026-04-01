---
marp: true
theme: default
paginate: true
---

# CSS Cheat Sheet (Beginner)

A quick reference for common tasks in CSS. Use this when you want a fast answer for "how do I do X".

---

## Quick Start (Syntax)

```css
selector {
  property: value;
  property: value;
}
```

- **selector**: which HTML element(s) to style
- **property**: what you change (e.g., `color`)
- **value**: how you change it (e.g., `blue`)

---

## Add CSS to HTML

| Method   | Where it lives           | Best for       | Example                                     |
| -------- | ------------------------ | -------------- | ------------------------------------------- |
| External | Separate `.css` file     | Most sites     | `<link rel="stylesheet" href="styles.css">` |
| Internal | `<style>` in `<head>`    | One page       | `<style>h1{color:blue;}</style>`            |
| Inline   | `style="..."` on element | Quick override | `<h1 style="color:blue;">Hi</h1>`           |

---

## Selectors (How to Target Elements)

| Selector   | Matches             | Example      |
| ---------- | ------------------- | ------------ |
| Element    | All of this tag     | `p {}`       |
| Class      | `class="..."`       | `.card {}`   |
| ID         | `id="..."` (unique) | `#header {}` |
| Descendant | nested structure    | `.nav a {}`  |
| Universal  | every element       | `* {}`       |

### Quick selector snippets

```css
/* element */
h1 {
  color: navy;
}

/* class */
.card {
  background-color: white;
  border: 1px solid lightgray;
}

/* id */
#main {
  max-width: 800px;
  width: 90%;
}

/* descendant */
nav a {
  text-decoration: none;
}
```

---

## Common Properties (What You Can Change)

### Text

- `color`: text color
- `font-family`: font name(s)
- `font-size`: size (px, rem, etc.)
- `font-weight`: normal/bold
- `text-align`: left/center/right
- `line-height`: spacing between lines

### Background

- `background-color`: fill color
- `background-image`: image

### Spacing

- `margin`: outside space
- `padding`: inside space

### Box

- `border`: `1px solid black`
- `width`, `height`

---

## Units (How to Measure)

| Unit  | Relative to           | When to use                   |
| ----- | --------------------- | ----------------------------- |
| px    | screen pixels         | precise control               |
| em    | parent font size      | scaling text/spacing          |
| rem   | root (`<html>`) font  | consistent sizing across page |
| %     | parent element size   | responsive layouts            |
| vh/vw | viewport height/width | full-screen sections          |

Example:

```css
.container {
  width: 90%;
  max-width: 1000px;
}

h1 {
  font-size: 2rem;
  line-height: 1.2;
}
```

---

## Specificity (Which Rule Wins)

When more than one rule targets the same element:

1. IDs (`#id`) win over classes (`.class`)
2. Classes win over tag names (`div`, `p`)
3. Later rules override earlier ones

Example:

```css
p {
  color: blue;
}
.intro p {
  color: green;
}
#main p {
  color: red;
}
```

---

## Quick Reference Patterns

### Reset basic spacing

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
```

### Page layout (simple container)

```css
.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}
```

### Basic card style

```css
.card {
  background: white;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
```

---

## Pro Tips (Keep it Simple)

- Use **external CSS** for multi-page projects.
- Name classes based on purpose (`.nav`, `.btn`, `.card`).
- Keep related rules together and add comments.
- Use browser DevTools (F12) to inspect and test styles.
