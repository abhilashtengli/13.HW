# Mini Calendar [Link](https://abhilashtengli.github.io/13.HW/)

This is a simple web page that displays a mini calendar with the current month, day name, day number, and year. It is styled using CSS and dynamically populated with JavaScript.

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)

## Features

- Display of the current month in a large, stylized font.
- Display of the current day's name.
- Display of the current day's number.
- Display of the current year.

## How It Works

### HTML

The HTML structure is minimal and consists of a <!DOCTYPE html> declaration, an <html> element with a specified language, a <head> section with metadata and stylesheets, and a <body> section containing the main content.

### CSS (styles.css)
- The CSS code sets a few global styles, such as resetting margins and paddings and using a cursive font.
- The .main class styles the container for the calendar elements, setting its width, text alignment, background color, and box shadow.
- Various elements within .main are styled with specific properties like font size, color, padding, and border-radius.

### JavaScript (script.js)
- JavaScript is used to dynamically populate the calendar elements with the current date's information.
- It gets the current date using the Date object and extracts the month, day name, day number, and year.
- These values are then inserted into the corresponding HTML elements using innerText.
