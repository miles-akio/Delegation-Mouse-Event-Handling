# Project: Delegation + Mouse Event Handling

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [Dependencies](#dependencies)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a web-based application that showcases a collection of famous paintings and allows users to interact with them through thumbnail-based navigation. The app highlights specific features of each painting, providing details through hover effects. It demonstrates **event delegation** and **mouse event handling** using JavaScript, making it easy to explore each painting’s unique elements.

## Features

- **Thumbnail Navigation**: View thumbnails of paintings and click to see a larger version.
- **Feature Highlights**: Hover over specified areas of each painting to see detailed descriptions.
- **Dynamic Content Rendering**: Painting data, including images and details, are dynamically loaded from a JSON file.
- **Event Delegation**: Utilizes event delegation for handling clicks on painting thumbnails efficiently.
- **Mouse Event Handling**: Displays feature descriptions on hover, giving users an interactive experience.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd your-repo-name
   ```
3. **Open `index.html` in your preferred web browser** to run the app.

## How to Use

1. Once the app is open, you will see a grid layout with thumbnails of paintings on the left.
2. Click on any thumbnail to view the painting in the main display area.
3. Hover over specific highlighted areas on the painting to read descriptions about key features or characters.

## Dependencies

- **Normalize.css** for CSS reset:
  [Normalize](https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css)
- **Google Fonts** for typography:
  [Roboto Condensed](https://fonts.googleapis.com/css?family=Roboto+Condensed)
- **JavaScript**: Handles dynamic rendering of content, event delegation, and mouse events.

## File Structure

```
/project-root
│
├── index.html             # Main HTML file
├── paintings.json         # JSON file with painting data
├── ch09-proj2.js          # Main JavaScript file for event handling and rendering
├── /images                # Directory containing painting images
│   └── (e.g., 099160.jpg, etc.)
├── /images/small          # Directory containing full-size images
│   └── (e.g., 099160.jpg, etc.)
├── styles.css             # Main CSS file for styling the app
```

## Contributing

Feel free to contribute to the project by submitting a pull request or opening an issue. Please follow standard code practices and include detailed descriptions for any changes made.
