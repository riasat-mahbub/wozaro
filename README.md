# Wozaro - Web-Based Word Games Collection

A modern collection of web-based word puzzle games built with Next.js and React, featuring responsive design and intuitive gameplay experiences.

## 🎮 Live Demo

**[Play Wozaro Games Now →](https://wozaro.netlify.app/home)**

This repository contains the complete source code for the live demo hosted on Netlify. Feel free to explore, learn from, or replicate the implementation.

## 📝 Description

Wozaro is a comprehensive web-based word games platform featuring multiple puzzle games with clean, modern interfaces. Each game offers unique challenges while maintaining consistent design principles and responsive layouts for optimal play across all devices.

## ✨ Features

### Universal Features
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Modern UI/UX** - Clean, intuitive interfaces with smooth animations
- **Invisible Input System** - Seamless keyboard input capture across all games
- **Visual Feedback** - Real-time updates and color-coded responses

### Word Game (Wordle-Style)
Located in `/word` directory:
- **6 Attempts** - Players have 6 tries to guess a 5-letter word
- **On-Screen Keyboard** - Interactive virtual keyboard with dynamic color coding
- **Wordle-Style Evaluation** - Three feedback states:
  - 🟩 Correct (letter in correct position)
  - 🟨 Present (letter in word but wrong position)  
  - ⬜ Absent (letter not in word)
- **Daily Word Generation** - New puzzle word each day
- **Win/Lose Popups** - Clear game completion feedback

### Spelling Bee Game
Located in `/bee` directory:
- **7-Letter Challenge** - Form words using 7 given letters with one mandatory center letter
- **Hexagonal Grid** - Interactive honeycomb-style letter selection
- **Progressive Scoring** - Points awarded based on word length
- **Word Discovery** - Find as many valid words as possible
- **Progress Tracking** - Visual progress bar showing completion status
- **Answer Display** - Track discovered words throughout the game
- **Minimum Length** - Words must be at least 4 letters long

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wozaro.git
   cd wozaro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to access the game collection

## 🎯 Usage

### Playing Locally

1. **Home Page** - Visit `/home` to see all available games
2. **Word Game** - Navigate to `/word` to play the Wordle-style game
3. **Spelling Bee** - Navigate to `/bee` to play the spelling bee challenge

### Game Controls
- **Keyboard Input** - Type letters directly using your physical keyboard
- **On-Screen Controls** - Click virtual keyboards and buttons for touch devices
- **Submit Actions** - Press Enter or click Submit buttons to make moves

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.4
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Code Quality**: Biome
- **Icons**: Lucide React
- **Notifications**: React Toastify

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run code linting
- `npm run format` - Format code with Biome

## 🌐 Demo

**Live Demo**: [https://wozaro.netlify.app/home](https://wozaro.netlify.app/home)

This repository serves as the complete source code for the live demo. The implementation showcases modern React patterns, responsive design principles, and clean code architecture that you can study and adapt for your own projects.

## 🎮 Game Details

For detailed information about each game's implementation:
- **Word Game**: Explore the `/src/app/word/` directory for Wordle-style game components
- **Spelling Bee**: Explore the `/src/app/bee/` directory for spelling bee game components

---

*Built with ❤️ using Next.js and React*