---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 1: Foundations of Software Development

### Lesson 3

### Gurneesh Singh

---

# Agenda

- Recap on HTML5
- Introduction to CSS
- CSS Syntax and Selectors
- CSS Styling Methods (Inline, Internal, External)
- Styling a Website with CSS
- Using CSS to Create Layouts

---

# Learning Objectives

By the end of this session, you will be able to:
* Describe how CSS is used to style websites
* Modify an HTML document using CSS
* Create a basic style of a page using the primary elements
* Use the div element and the class attribute to change the layout of a website

---

# Recap: HTML5 

## HTML5 Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <!-- CSS links go here -->
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

---

# Recap: HTML Layout Elements

## Semantic Layout Elements in HTML5

```html
<header>  <!-- Header/banner of the page -->
<nav>     <!-- Navigation links -->
<section> <!-- Standalone section of content -->
<article> <!-- Independent, self-contained content -->
<aside>   <!-- Content related to surrounding content -->
<footer>  <!-- Footer of the page -->
```

*These elements provide meaning to your HTML structure*

---

# Section 1: Introduction to CSS

## What is CSS?
- CSS = Cascading Style Sheets
- Used to describe the presentation of HTML documents
- Controls colors, fonts, layouts, and more
- Separates content (HTML) from presentation (CSS)
- Key part of responsive web design

*CSS is the visual layer of websites*

---

# Why Use CSS?

- Consistent styling across multiple pages
- Improved site maintainability
- Better user experience through visual design
- Responsive design for different devices
- Reduced loading times

*Without CSS, websites would be plain text with basic formatting*

---

# CSS and HTML: Working Together

## HTML provides structure; CSS provides style

<div style="font-size: 20px;">

- HTML is like the frame of a house (structure)
- CSS is like the wallpaper (presentation)
- JS is like the electrical system (interactivity)

```html
<h1>This is a heading</h1>
<p>This is a paragraph of text.</p>
```

```css
h1 {
    color: blue;
    font-size: 32px;
}
p {
    color: gray;
    font-size: 16px;
}
```

</div>

---

# CSS Style Sheet Anatomy

## Basic Structure

```css
selector {
    property: value;
    property: value;
}
```

- **Selector**: Targets HTML elements to style
- **Declaration Block**: Contains style declarations
- **Declaration**: Property-value pair
- **Property**: Aspect you want to change
- **Value**: Setting for the property

---

# CSS Selectors

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
<div>

## Common Selectors

- **Element Selector**: `h1`, `p`, `div`
- **Class Selector**: `.classname`
- **ID Selector**: `#idname`
- **Universal Selector**: `*`
- **Attribute Selector**: `[attribute=value]`

</div>
<div>

## Examples

```css
/* Element selector */
h1 {
    color: blue;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    font-size: 24px;
}
```

</div>
</div>

---

# CSS Syntax: Properties and Values

## Examples

```css
p {
    color: #333;                 /* Color property */
    font-size: 16px;             /* Size property */
    margin: 10px;                /* Spacing property */
    font-family: Arial;          /* Font property */
    background-color: #f4f4f4;   /* Background property */
}
```

*Remember:*
- Use a colon (`:`) between property and value
- End each declaration with a semicolon (`;`)
- Wrap declarations in curly braces (`{}`)

---

# Types of CSS

## Three Ways to Include CSS in HTML

1. **External CSS** (separate .css file)
2. **Internal CSS** (in `<style>` tag)
3. **Inline CSS** (in HTML elements)

*External CSS is generally recommended for most cases*

---

# External CSS

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Benefits:**
- Separation of concerns
- Code reusability across multiple pages
- Better caching for faster page loads
- Easier maintenance

*This is the recommended approach for most websites*

---

# Internal CSS

<div style="font-size: 20px;">

```html
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
        }
    </style>
</head>
```

**Use cases:**
- Single-page websites
- Quick prototyping
- Email templates

*Not recommended for multi-page websites*

</div>

---

# Inline CSS

<div style="font-size: 20px;">

```html
<h1 style="color: blue; font-size: 24px;">Heading</h1>
```

**Use cases:**
- Quick testing or prototyping
- Overriding styles in specific cases
- Email templates

**Drawbacks:**
- Mixes content with presentation
- Difficult to maintain
- Not reusable
- Higher specificity (overrides other styles)

*Generally discouraged for production websites*

</div>

---

# Comparison of CSS Methods


| Feature | External CSS | Internal CSS | Inline CSS |
|---------|-------------|--------------|------------|
| Location | Separate .css file | `<style>` tag in HTML | In HTML elements |
| Best for | Multiple pages | Single page | Single element |
| Maintenance | Easy | Moderate | Difficult |
| Reusability | High | Low | None |
| File size | Smaller HTML | Larger HTML | Largest HTML |
| Caching | Yes | No | No |

---

# 10-Minute Break

*We'll continue with styling a website after the break*

---

# Section 2: Styling a Website

<div style="font-size: 20px;">

## Basic Element Styling

```css
/* Styling the entire page */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

/* Styling headings */
h1 {
    color: #333;
    font-size: 32px;
    text-align: center;
}

/* Styling paragraphs */
p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
}
```

</div>

---

# Common CSS Properties

<div style="font-size: 20px;">

## Text Styling
- `color`: Text color
- `font-family`: Font typeface
- `font-size`: Size of text
- `font-weight`: Bold (or not)
- `text-align`: Alignment (left, right, center)
- `line-height`: Space between lines

---

# CSS Measurements

## Common Units

<div style="font-size: 20px;">

- `px`: Pixels (fixed size)
- `em`: Relative to parent element's font size
- `rem`: Relative to root element's font size
- `%`: Percentage of parent element
- `vh/vw`: Viewport height/width
- `pt`: Points (1/72 of an inch)

```css
h1 {
    font-size: 24px;    /* Fixed size in pixels */
    margin: 2em;        /* 2x the element's font size */
    width: 50%;         /* 50% of parent's width */
    height: 50vh;       /* 50% of viewport height */
}
```

</div>

---

# The Cascade in CSS

## How CSS Determines Which Styles Apply

<div style="font-size: 20px;">

The cascade determines which styles are applied when multiple rules target the same element:

1. **Specificity**: More specific selectors win
2. **Source Order**: Later styles override earlier ones
3. **Importance**: `!important` flag overrides normal styles (recommended to avoid)

```css
p { 
    color: blue;
}                 /* Less specific */

.intro p {
     color: green;
}                 /* More specific */

#first .intro p {
     color: red;
}                 /* Most specific */
```

</div>

---

# CSS Inheritance

## Passing Styles Down to Children

Some CSS properties are inherited from parent to child elements:

```css
body {
    font-family: Arial;  /* All text elements inside body inherit this */
    color: #333;         /* All text elements inside body inherit this */
}

/* No need to repeat for every paragraph, heading, etc. */
```

*Not all properties inherit (e.g., borders, margins, padding)*

---

# Exercise: Basic Website Styling

<div style="font-size: 20px;">

## Task
1. Create a simple HTML page with:
   - A header with a title
   - A navigation menu
   - Multiple sections with headings
   - Paragraphs of text
   - A footer

2. Style it using external CSS:
   - Change fonts, colors, and backgrounds
   - Add margins and padding
   - Style the navigation menu
   - Add borders to certain elements

*Practice using different measurements (px, %, em)*

</div>

---

# Section 3: Using CSS to Create Layouts

## The `<div>` Element and Classes

<div style="font-size: 20px;">

`<div>` elements are generic containers used for grouping and styling:

```html
<div class="container">
    <div class="header">Header content</div>
    <div class="sidebar">Sidebar content</div>
    <div class="main-content">Main content here</div>
    <div class="footer">Footer content</div>
</div>
```

```css
.container {
    width: 80%;
    margin: 0 auto;
}
.header, .footer {
    background-color: #333;
    color: white;
}
```

</div>

---

# CSS Classes vs. IDs

## When to Use Each

<div style="font-size: 20px;">

- **Classes** (`.classname`):
  - For elements that share the same style
  - Can be applied to multiple elements
  - Can apply multiple classes to one element

- **IDs** (`#idname`):
  - For unique elements that appear once per page
  - Must be unique within the document
  - Often used for JavaScript hooks or anchor links

*Classes are more flexible and generally preferred for styling*

</div>

---

# Basic CSS Layout Techniques

## Common Approaches

<div style="font-size: 20px;">

1. **Normal Flow**:
   Default layout without special positioning
2. **Floats & Positioning**:

   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

   <div>

   Traditional method (now less common, not recommended)
   ```css
   .sidebar {
     float: left;
     width: 25%;
    }
   .main {
     float: right;
      width: 75%;
    }
   ```
   </div>

   <div>
    Additional methods:

   ```css
   .overlay { 
        position: absolute;
        top: 0;
        left: 0;
    }
   .fixed-header {
        position: fixed;
        top: 0;
    }
   ```
   </div>
   </div>

</div>

---

# Exercise: Restaurant Menu Styling

## Task:

<div style="font-size: 20px;">

1. Take the restaurant menu created in the previous lesson
2. Create an external CSS file
3. Style the menu with:
   - Consistent fonts and colors
   - Proper spacing between items
   - Visual hierarchy for categories
   - Decorative elements for prices
   - Different styles for food vs. drinks
4. **Use classes to style specific elements:**
   - Create a class for all menu items
   - Create separate classes for food items
   - Create separate classes for drink items
   - Apply different styling to each category

</div>
---

# CSS Responsive Design Basics

## Making Websites Work on All Devices

<div style="font-size: 20px;">

```css
/* Base styles for all devices */
body {
    font-size: 12px;
}

/* Styles for wider mobile devices (480px and up) */
@media (min-width: 480px) {
    body {
        font-size: 14px;
    }
}

/* Styles for tablets and desktops (768px and up) */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}
```

</div>

*We'll cover more on responsive design in future lessons*

---

# Mobile First Design

## Start Small, Then Expand

<div style="font-size: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

- Design for mobile devices first, then progressively enhance for larger screens
- Focus on content and core functionality before adding complex layouts
- Use `min-width` media queries to add complexity as screen size increases

**Benefits:**
- Forces you to prioritize essential content
- Generally results in faster-loading sites
- Ensures your site works on the widest range of devices
- Aligns with how most people access the web today (mobile dominant)

</div>

<div>

```css
/* Mobile first approach - base styles for smallest screens */
.container { width: 100%; }

/* Enhance for tablet */
@media (min-width: 768px) {
    .container { 
        width: 90%;
        margin: 0 auto;
    }
}

/* Enhance for desktop */
@media (min-width: 1024px) {
    .container {
         width: 960px;
    }
}
```

</div>


---

# CSS Best Practices

1. Keep your CSS organized and commented
2. Use external stylesheets
3. Minimize specificity conflicts
4. Avoid inline styles
5. Group related styles together
6. Consider responsive design from the start
7. Test on multiple browsers

---

# CSS Resources and Tools

## Learning Resources
- [MDN Web Docs CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools CSS Reference](https://www.w3schools.com/css/)

## Tools
- Browser Developer Tools (F12)
- [Codepen](https://codepen.io/) for experimenting

---

# Assignment for Next Class

## Task:
Take the musician website you created from the previous lesson, and change the way it looks using CSS.

**Guidelines:**
- Use external CSS
- Apply consistent styling across the page
- Style text elements (headings, paragraphs)
- Add appropriate colors and backgrounds
- Include proper spacing and margins
- Make the navigation menu attractive

</div>
