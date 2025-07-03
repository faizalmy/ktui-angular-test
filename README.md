# KTUI Angular Test Project

This project demonstrates a basic integration of the KTUI library with an Angular application.

## Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- Angular CLI

## How to Run

### 1. Clone the KTUI Repository

If you haven't already, clone the main KTUI library:

```bash
git clone https://github.com/keenthemes/ktui.git
```

### 2. Link the KTUI Library

You need to create a local `npm link` for the KTUI library to make it available to this Angular project.

```bash
# 1. Navigate to the KTUI library's source directory
cd path/to/ktui/ktui

# 2. Install its dependencies
npm install

# 3. Create the global link
npm link
```

### 3. Set Up This Angular Project

Now, link the KTUI library to this project and install its dependencies.

```bash
# 1. Navigate to this project's directory (ktui-angular-test)
cd path/to/ktui-angular-test

# 2. Install dependencies
npm install

# 3. Link KTUI to this project
npm link @keenthemes/ktui
```

### 4. Start the Development Server

Run the Angular development server:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
