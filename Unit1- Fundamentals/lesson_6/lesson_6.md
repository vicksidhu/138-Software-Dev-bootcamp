---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 1: Foundations of Software Development

### Lesson 6: Bootstrap

### Gurneesh Singh

---

# Learning Objectives

By the end of this session, you will be able to:
* Understand the purpose of CSS frameworks
* Install Bootstrap in your projects
* Use Bootstrap documentation effectively
* Create responsive layouts with Bootstrap breakpoints and containers
* Implement grid systems for page layouts
* Apply Bootstrap classes to create professional-looking websites

---

# Recap: HTML & CSS Working Together

<div style="font-size: 18px;">

## HTML Provides Structure
```html
<header>
  <h1>Restaurant Menu</h1>
</header>
<main>
  <section class="menu-category">
    <h2>Appetizers</h2>
    <!-- Menu items -->
  </section>
</main>
```

---

## CSS Adds Style and Layout
```css
header {
  text-align: center;
  padding: 2rem 0;
}

.menu-category {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
}
```

</div>

---

# Introduction to Frameworks

<div style="font-size: 18px; display: grid; grid-template-columns: 1fr 1fr;">

<div>

## What is a Framework?
- Pre-written code libraries that solve common problems
- Provides structure, components, and utilities
- Helps developers work faster and more consistently

## Benefits of Using Frameworks
- Faster development time
- Consistent coding patterns
- Cross-browser compatibility
- Built-in responsive design

</div>

<div>

## Common Framework Types
- CSS Frameworks (Bootstrap, Tailwind CSS)
- JavaScript Frameworks (React, Angular, Vue.js)
- Full-Stack Frameworks (Ruby on Rails, Django)

## Choosing a Framework
Consider:
- Project requirements
- Learning curve
- Community support
- Performance needs

</div>

</div>


---

# Introduction to Bootstrap

<div style="font-size: 20px;">

## What is Bootstrap?
- The most popular CSS framework
- Created by Twitter developers
- Provides responsive, mobile-first design components
- Includes CSS and JavaScript components
- Currently on version 5.3.x

---

## Why Use Bootstrap?
- Speeds up development
- Built-in responsive grid system
- Cross-browser compatibility
- Extensive UI components
- Active community and documentation

</div>

---

# Recommended Extensions for VS Code

![width:500px](./reference/extension.png)

- Bootstrap Intellisense
  - Gives you auto-complete for Bootstrap classes
  - Helps you remember the correct class names
  - Helps you avoid errors
  - Helps you write better code faster


---

# Getting Started with Bootstrap & Using Documentation


## Adding Bootstrap to Your Project
```html
<head>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Optional JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>
```
---


## Basic Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Your content here -->
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

</div>

<div>

---
## Bootstrap Documentation
- [https://getbootstrap.com/docs/](https://getbootstrap.com/docs/)
- Organized by component and utility categories
- Examples with code snippets
- Copy-paste ready code

## Key Documentation Sections
- Layout (containers, grid system)
- Content (typography, tables)
- Forms (inputs, select, checks)
- Components (buttons, cards, navbar)
- Utilities (spacing, colors, flex)


---

# 10-Minute Break


---

# Breakpoints and Containers

<div style="font-size: 20px;">

## Bootstrap Breakpoints
Bootstrap uses these breakpoints for responsive design:
- **xs**: Extra small (< 576px) - Default, no prefix
- **sm**: Small (≥ 576px) - `.sm-*` 
- **md**: Medium (≥ 768px) - `.md-*`
- **lg**: Large (≥ 992px) - `.lg-*`
- **xl**: Extra large (≥ 1200px) - `.xl-*`
- **xxl**: Extra extra large (≥ 1400px) - `.xxl-*`

---

## Using Breakpoints
```html
<!-- Text that changes alignment at different screen sizes -->
<p class="text-center text-md-start text-lg-end">
  This text will be centered on small screens, 
  left-aligned on medium screens, 
  and right-aligned on large screens.
</p>
```

</div>

---

# Bootstrap Containers

<div style="font-size: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

## Container Types
```html
<!-- Fixed-width container -->
<div class="container">
  <!-- Content here -->
</div>

<!-- Full-width container -->
<div class="container-fluid">
  <!-- Content here -->
</div>

<!-- Responsive containers -->
<div class="container-sm">100% width until sm breakpoint</div>
<div class="container-md">100% width until md breakpoint</div>
<div class="container-lg">100% width until lg breakpoint</div>
```
---

## Container Behavior
- `.container` has a max-width at each breakpoint
- `.container-fluid` is always 100% width

## Container Nesting
- Containers can be nested
- Avoid unnecessary nesting that creates extra padding
- Grid system should be used inside containers

</div>
</div>

---

# Exercise: Responsive Containers

<div style="font-size: 20px;">

## Task: Work with Bootstrap's responsive container system

1. Open the `exercises/1_responsive_containers/start/index.html` file
2. Examine the different container types and how they behave
3. Complete the tasks listed in the exercise:
   - Create a custom container section
   - Add content that changes based on screen size
   - Work with responsive visibility and alignment
   - Experiment with Bootstrap's utility classes


---

# Grids and Columns

<div style="font-size: 20px;">

## Bootstrap's Grid System
- Based on a 12-column layout
- Responsive and mobile-first
- Uses flexbox
- Requires a container and rows
- Columns automatically adjust within rows

---

## Basic Grid Structure
```html
<div class="container">
  <div class="row">
    <div class="col">Equal width column</div>
    <div class="col">Equal width column</div>
    <div class="col">Equal width column</div>
  </div>
</div>
```

</div>

---

# Working with Grid Systems

<div style="font-size: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

## Column Sizing Options
```html
<!-- Specific column widths (out of 12) -->
<div class="row">
  <div class="col-4">4/12 width</div>
  <div class="col-8">8/12 width</div>
</div>

<!-- Responsive Column Sizing -->
<div class="row">
  <!-- Full width on xs, half width on sm, 
       1/3 width on md and up -->
  <div class="col-12 col-sm-6 col-md-4">
    This column changes width based on screen size
  </div>
</div>
```
---

## Real-World Example: Menu Layout
```html
<!-- Menu categories in columns -->
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4">
      <h2>Appetizers</h2>
      <!-- Menu items -->
    </div>
    <div class="col-12 col-md-4">
      <h2>Main Courses</h2>
      <!-- Menu items -->
    </div>
    <div class="col-12 col-md-4">
      <h2>Desserts</h2>
      <!-- Menu items -->
    </div>
  </div>
</div>

<!-- Single menu item with image -->
<div class="row align-items-center mb-3">
  <div class="col-12 col-md-3">
    <img src="dish.jpg" alt="Dish Name" class="img-fluid rounded">
  </div>
  <div class="col-12 col-md-7">
    <h4>Dish Name</h4>
    <p>Description of the dish with ingredients</p>
  </div>
  <div class="col-12 col-md-2 text-md-end">
    <span class="fs-5 fw-bold">$12.99</span>
  </div>
</div>
```

</div>
</div>

---

# Exercise: Menu Grid Layout

<div style="font-size: 20px;">

## Task: Implement Bootstrap's grid system for a restaurant menu

1. Open the `exercises/2_menu_grid/start/index.html` file
2. Use Bootstrap's grid system to organize the menu categories:
   - On mobile: Stack vertically (full width)
   - On tablet: Two categories per row
   - On desktop: Four categories in one row

3. Format individual menu items using grid:
   - Name and description on the left
   - Price on the right
   - Proper alignment and spacing


</div>

---

# Next Steps

## Keep Learning
- Explore more Bootstrap components
- Practice creating different layouts
- Try customizing Bootstrap with your own CSS
- Look at Bootstrap themes for inspiration

## Resources
- [Official Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Themes](https://themes.getbootstrap.com/)
