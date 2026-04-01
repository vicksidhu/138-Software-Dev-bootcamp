---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 1: Foundations of Software Development

### Lesson 5: CSS Layout Techniques

### Gurneesh Singh

---

# Learning Objectives

By the end of this session, you will be able to:
* Create a responsive website layout using CSS
* Implement layouts using Flexbox, Grid, Floats, and Positioning
* Apply responsive design principles to webpage elements

---

# Recap: CSS Box Model

## Every HTML Element is a Box

The box model consists of:
- **Content**: The actual content (text, images)
- **Padding**: Space between content and border
- **Border**: Line around the padding
- **Margin**: Space outside the border

---

## Box Sizing
```css
/* Content-box (default) */
.box { box-sizing: content-box; }
/* Size = content + padding + border */

/* Border-box (preferred) */
.box { box-sizing: border-box; }
/* Size = defined width/height (padding and border included) */
```
---

# Responsive Design with Media Queries


Media queries allow you to apply different styles based on device characteristics, most commonly the viewport width.

Common breakpoints:
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

--- 

```css
/* Default styles for all screen sizes, aka your "mobile first" styles */
.container {
  width: 100%;
}

/* Styles for screens at least 768px wide, aka your "tablet" styles */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Styles for screens at least 992px wide, aka your "desktop" styles */
@media (min-width: 992px) {
  .container {
    max-width: 970px;
    margin: 0 auto;
  }
}
```

---

# CSS Layouts Overview


## Different Approaches to Page Layout

### Normal Flow
- Default layout of elements
- Block elements stack vertically
- Inline elements flow horizontally

### Modern Layout Methods
- **Flexbox**: One-dimensional layout (rows OR columns)
- **Grid**: Two-dimensional layout (rows AND columns)

---

### Traditional Layout Methods
- **Floats**: Originally for wrapping text around images
- **Positioning**: Precise control over element placement


---

# Flexbox

## A One-Dimensional Layout Model

<div style="font-size: 20px;">

Flexbox is designed for layouts in one dimension - either a row or a column.

```css
.container {
    display: flex;
    /* Main properties: flex-direction, justify-content, align-items */
}

.item {
    /* Item properties: flex (grow, shrink, basis) */
}
```

</div>

---

# Exercise 1: Menu with Flexbox

<div style="font-size: 20px;">

## Task: Create menu items using Flexbox

1. Using the Flexbox Café template:
   - Configure the menu items to use Flexbox layout
   - Create a structure where dish information is on the left and price on the right
   - Add appropriate spacing between menu sections and items

2. Steps:
   - Add container with `display: flex`
   - Use `justify-content: space-between` for alignment
   - Add appropriate margins and padding


</div>

---

# Grid

## A Two-Dimensional Layout System

<div style="font-size: 20px;">

Grid creates a two-dimensional layout with rows and columns.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* Three columns */
    grid-template-rows: auto auto auto; /* Three rows */
    gap: 10px; /* Spacing between items */
}
```

</div>

---

# Exercise 2: Menu with Grid

<div style="font-size: 20px;">

## Task: Create a restaurant page layout using Grid

1. Using the Gridlicious Restaurant template:
   - Set up a grid layout for the overall page structure
   - Create areas for header, navigation, main content, specials sidebar, and footer
   - Apply appropriate styling to each area

2. Steps:
   - Define the grid container with grid areas
   - Assign elements to grid areas
   - Configure columns and rows

</div>

---

# 10-Minute Break

---

# Floats

## Text Wrapping and Simple Layouts

<div style="font-size: 20px;">

Floats were originally designed to wrap text around images.

```css
.image {
    float: left; /* or right */
    margin: 0 20px 10px 0; /* Create space around the floated element */
}

/* Clearing floats to prevent container collapse */
.container::after {
    content: "";
    display: table;
    clear: both;
}
```

</div>

---

# Exercise 3: Adding Images to The Menu


## Task: Integrate images with text using floats

1. Using the Floating Bistro template:
   - Make the images in each menu item float to the left, with text wrapping around them
   - Make the About section image float to the right, with text wrapping around it
   - Fix any container collapse issues using clearfix

2. Steps:
   - Add `float: left` to menu images
   - Add `float: right` to the about section image
   - Implement clearfix to prevent container collapse


---

# Positioning

## Precise Control Over Element Placement

<div style="font-size: 20px;">

Positioning allows you to place elements exactly where you want them.

```css
.element {
    position: static | relative | absolute | fixed | sticky;
    top: 0; /* Distance from top reference */
    right: 0; /* Distance from right reference */
    bottom: 0; /* Distance from bottom reference */
    left: 0; /* Distance from left reference */
}
```

</div>

---

# Positioning Types

## Static & Relative
**Static (Default)**
- Elements follow normal document flow

**Relative**
```css
.element {
  position: relative;
  top: 20px;
  left: 20px;
}
```
- Element is positioned relative to its normal position

--- 

## Absolute 

**Absolute**
```css
.container {
  position: relative;
}
.element {
  position: absolute;
  top: 0;
  right: 0;
}
```
- Positioned relative to nearest positioned ancestor

---
## Fixed

**Fixed**
```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
}
```
- Positioned relative to viewport


---

# Exercise 4: Enhancing The Menu with Positioning

<div style="font-size: 20px;">

## Task: Add positioned elements to your menu

1. Using the Position Café template:
   - Make the navigation bar stick to the top of the page when scrolling
   - Position the price tag in each menu item at the top right corner
   - Position the badges at the top left corner of the menu items
   - Create a promotional popup and "back to top" button using fixed positioning

2. Steps:
   - Add relative positioning to menu items 
   - Use absolute positioning for price tags and badges
   - Use fixed positioning for popup and "back to top" button


</div>

---


# Assignment Preview

- Your Personal Website assignment is coming up.
- Please review the instructions in the learning hub and the assignment rubric.
- With the layout techniques we've learned, you should be well equipped to begin working on the assignment.

---

# Next Time: CSS Frameworks & Bootstrap

In our next lesson, we'll explore how to leverage frameworks in web development.

