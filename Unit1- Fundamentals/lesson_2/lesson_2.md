---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 1: Foundations of Software Development

### Lesson 2

### Gurneesh Singh

---

# Agenda

- Markup Recap
- HTML5 and Web Standards
- HTML Document Structure
- The id Attribute
- Introduction to Emmet
- HTML Layout Elements and Techniques
- In-class Exercise: Restaurant Menu
- Next Lesson Preview

---

# Learning Objectives

By the end of this session, you will be able to:
* Create a simple HTML document
* Understand the structure of the HTML `<head>` tag
* Use the id attribute effectively
* Use Emmet to write HTML faster
* Apply HTML layout techniques

---

# Section 1: Markup Recap

## Why HTML is important for software development
- Foundation of web development
- Teaches code syntax and attention to detail
- Provides visual feedback
- Develops problem-solving and logical thinking skills

*Even though HTML might seem basic, it's a crucial starting point for software development*

---

# The Importance of Practice

- Software development requires consistent practice
- Learning by doing is the most effective approach
- Apply concepts immediately after learning them
- Focus on clean, well-structured code from the beginning

*The more you practice HTML, the better your foundation will be for more complex technologies*

---

# Section 2: HTML5

## What is HTML5?
- The latest version of the HTML standard
- Introduced new elements, attributes, and behaviors
- Improved support for multimedia without plugins
- Enhanced semantic elements for better structure
- Better mobile support

*HTML5 is the current standard for web development*

---

# Web Standards

- Standards are maintained by the World Wide Web Consortium (W3C)
- They ensure consistency across different browsers
- Documentation is readily available:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [W3C](https://www.w3.org/)
  - [W3Schools](https://www.w3schools.com/)

*Understanding and following web standards is essential for cross-platform compatibility*

---

# The Web Technology Stack

## Core technologies:
- **HTTP**: Communication protocol for the web
- **HTML**: Structure and content
- **CSS**: Styling and layout
- **JavaScript**: Interactivity and behavior

## Advanced technologies (Coming later in this course):
- Node.js, Express, Vite, React, MongoDB, Mongoose

*HTML is the foundation that everything else builds upon*

---

# Section 3: <!DOCTYPE html>

## The Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

*Every HTML document should follow this basic structure*

---

# Understanding the DOCTYPE

```html
<!DOCTYPE html>
```

- Informs the browser that this is an HTML5 document
- Not an HTML tag, but an "information" to the browser
- Must be the very first thing in your HTML document
- Case-insensitive in HTML5

*Without the DOCTYPE, browsers may switch to "quirks mode" rendering*

---

# The \<head\> Element

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
```

- Contains metadata about the document
- Not visible to users (except the title)
- Includes links to external resources

---

# Important \<head\> Elements

- `<title>`: Sets the page title shown in browser tabs
- `<meta charset="UTF-8">`: Specifies character encoding
- `<meta name="viewport">`: Controls viewport for responsive design
- `<link>`: Links to external resources (like CSS)
- `<script>`: Includes JavaScript files or code

*These elements are crucial for proper rendering and functionality*

---

# The \<body\> Element

- Contains all visible content
- Includes text, images, links, tables, forms, etc.
- Structured with various HTML elements
- Can be styled with CSS

*Everything your users see on your webpage is inside the \<body\> element*

---

# Exercise: Create a Simple HTML Document

Create a basic HTML document with:
1. Proper DOCTYPE declaration
2. HTML, head, and body elements
3. Title of your choice
4. A heading and paragraph in the body

*Apply what you've learned about HTML structure*

---

# 10-Minute Break

*We'll continue with the id attribute after the break*

---

# Section 4: The id Attribute

## What is the id attribute?
- Provides a unique identifier for an HTML element
- Must be unique within the document
- Used for:
  - Linking within a page
  - Styling with CSS
  - Manipulation with JavaScript

```html
<div id="main-content">This is the main content.</div>
```

---

# Linking with ID Attributes

```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<section id="home">Home content here</section>
<section id="about">About content here</section>
<section id="contact">Contact content here</section>
```

*This creates a navigation menu that jumps to different sections of the page*

---

# Exercise: Adding IDs

1. Open the Basic Homepage.html document
2. Identify elements that would benefit from IDs
3. Add appropriate IDs to headings and sections
4. Create a link that jumps to a specific section

*Focus on using meaningful, descriptive ID names*

---

# Section 5: Introduction to Emmet

## What is Emmet?
- A productivity tool for web developers
- Built into VS Code and many other editors
- Allows you to write HTML and CSS faster using abbreviations
- Generates code snippets with simple expressions

*Emmet significantly speeds up HTML coding and is widely used in the industry*

---

# Why Use Emmet?

- **Faster Development**: Write HTML/CSS with fewer keystrokes
- **Reduced Errors**: Automatically generates proper closing tags
- **Consistency**: Creates predictable, well-structured code
- **Industry Standard**: Used by professional developers
- **Easy to Learn**: Intuitive abbreviation syntax

*Learning Emmet now will save you hours of coding time throughout the bootcamp*

---

# Basic Emmet Syntax

## HTML Element Creation
- Type element name and press Tab: `div` → `<div></div>`
- Child elements with `>`: `div>p` → `<div><p></p></div>`
- Sibling elements with `+`: `div+p` → `<div></div><p></p>`
- Multiple elements with `*`: `li*3` → `<li></li><li></li><li></li>`
- Element with class: `div.container` → `<div class="container"></div>`
- Element with ID: `div#header` → `<div id="header"></div>`

---

# Emmet Examples


## Emmet Abbreviation

<div style="font-size: 18px;">

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

```
nav>ul>li*3>a
```

</div>

```html
<nav>
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
</nav>
```

<div>

</div>

</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

```
div.container>header+main+footer
```

</div>

<div>

```html
<div class="container">
  <header></header>
  <main></main>
  <footer></footer>
</div>
```

</div>

</div>


<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

```
h1{My Title}+p{This is a paragraph}
```

</div>

<div>

```html
<h1>My Title</h1>
<p>This is a paragraph</p>
```

</div>

</div>

</div>


---

# Using Emmet in VS Code

## Emmet is built into VS Code:
1. Type your Emmet abbreviation
2. Press Tab or Enter to expand
3. VS Code will generate the corresponding HTML

## Helpful for our exercises:
- Adding classes and ids to elements:
  - `div.container`
  - `section#about`

*VS Code's Emmet integration makes it easy to use without any setup*

---

# Section 6: In-class Exercise

## Create a Restaurant Menu HTML Document

<div style="font-size: 22px;">

Requirements:
- Include proper HTML structure
- Create a menu with at least 4 food items and 3 drinks
- Include pictures for menu items
- Use appropriate headings and paragraphs
- Implement the id attribute where appropriate
- Use Emmet to speed up your HTML creation

*Try emmet to speed up your HTML creation!*

*Work on this without relying on AI - practice your fundamentals!*

</div>

---

# Section 7: HTML Layout Elements

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

# Container Elements

```html
<div class="container">
    <!-- Content here -->
</div>
```

- `<div>`: Generic block-level container
- `<span>`: Generic inline container
- Often used with class attributes for styling
- No semantic meaning on their own

*Containers help organize and style your content*

---

# Layout Techniques

## Common approaches to HTML layout:
1. Using semantic HTML5 elements
2. Using CSS flexbox
3. Using CSS grid
4. Using CSS frameworks (like Bootstrap)

*We'll cover CSS styling in the next lesson*

---

# Exercise: Add Layout Elements

Use the restaurant menu you created:
1. Add semantic structure with `<header>`, `<nav>`, `<section>`, etc.
2. Wrap related content in container `<div>` elements
3. Organize the menu items logically

*Focus on creating a clear, structured document*

---

# HTML Cheat Sheet

## Essential HTML Tags
- Document structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Headings: `<h1>` through `<h6>`
- Text: `<p>`, `<span>`, `<strong>`, `<em>`
- Lists: `<ul>`, `<ol>`, `<li>`
- Links: `<a href="...">`
- Images: `<img src="..." alt="...">`
- Layout: `<div>`, `<section>`, `<header>`, `<footer>`, `<nav>`

*Refer to the HTML cheat sheet in your reference materials*

---

# HTML Tables

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px;">
<div>

```html
<table>
    <tr>  <!-- tr = table row -->
        <th>Header 1</th>   <!-- th = table header -->
        <th>Header 2</th>   <!-- Bold, centered text -->
    </tr>
    <tr>  <!-- Second row -->
        <td>Data 1.1</td>   <!-- td = table data cell -->
        <td>Data 1.2</td>   <!-- Regular table cell -->
    </tr>
    <tr>  <!-- Third row -->
        <td>Data 2.1</td>   <!-- td elements contain -->
        <td>Data 2.2</td>   <!-- your actual content -->
    </tr>
</table>
```

</div>
<div>

#### Rendered Output:

| Header 1 | Header 2 |
|----------|----------|
| Data 1.1 | Data 1.2 |
| Data 2.1 | Data 2.2 |

</div>
</div>

*Tables should be used for tabular data, not for layout*

---

# Common HTML Attributes

- `id`: Unique identifier for an element
- `class`: Group identifier for styling
- `src`: Source URL for images, scripts, etc.
- `href`: Hyperlink reference for links
- `alt`: Alternative text for images
- `style`: Inline CSS styles
- `title`: Additional information (tooltip)

*Attributes provide additional information about HTML elements*

---


## HTML Practice Exercise
- Build a basic page about your favorite musician
- Include:
  - Biography and picture
  - List of songs
  - Embedded YouTube video
- Try to use HTML tags you haven't used before
- Don't worry about styling yet - focus on structure


