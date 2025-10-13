# Wozaro - Wordle Clone

A modern Wordle-style word guessing game built with Next.js and React, featuring an intuitive on-screen keyboard and responsive design.

## 🎮 Live Demo

**[Play Wozaro Now →](https://wozaro.netlify.app/home)**

This repository contains the complete source code for the live demo hosted on Netlify. Feel free to explore, learn from, or replicate the implementation.

## 📝 Description

Wozaro is a web-based word puzzle game inspired by Wordle. Players have 5 attempts to guess a 5-letter word, with visual feedback provided after each guess. The game features a clean, modern interface with both keyboard and mouse input support.

## ✨ Features

- **Responsive Design** - Optimized for both desktop and mobile devices
- **On-Screen Keyboard** - Interactive virtual keyboard with dynamic color coding based on letter states
- **Invisible Input Box** - Seamless keyboard input capture for enhanced user experience
- **Wordle-Style Evaluation** - Accurate guess evaluation with three states:
  - 🟩 Correct (letter in correct position)
  - 🟨 Present (letter in word but wrong position)  
  - ⬜ Absent (letter not in word)
- **Daily Word Generation** - New puzzle word each day
- **Visual Feedback** - Real-time updates to keyboard and grid based on guesses

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
   Navigate to [http://localhost:3000](http://localhost:3000) to start playing

## 🎯 Usage

1. **Start the Game** - Visit the home page to begin a new puzzle
2. **Make Guesses** - Type letters using your keyboard or click the on-screen keyboard
3. **Submit Words** - Press Enter or click Enter on the virtual keyboard when you have 5 letters
4. **Interpret Feedback** - Use the color-coded feedback to guide your next guess:
   - Green: Correct letter in correct position
   - Yellow: Letter exists but in wrong position
   - Gray: Letter not in the target word
5. **Win or Learn** - Solve the puzzle in 5 tries or less, or see the answer revealed

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.4
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Code Quality**: Biome

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run code linting
- `npm run format` - Format code with Biome

## 🌐 Demo

**Live Demo**: [https://wozaro.netlify.app/home](https://wozaro.netlify.app/home)

This repository serves as the complete source code for the live demo. The implementation showcases modern React patterns, responsive design principles, and clean code architecture that you can study and adapt for your own projects.

---

*Built with ❤️ using Next.js and React*