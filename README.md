# 🌀 Point Game

**Point Game** is a fast-paced local 2-player browser game where two players battle for survival by controlling colored dots. The objective? **Avoid crashing into your own trail, your opponent’s trail, or the edges of the screen**. Simple in concept, but thrilling in execution!

![point](https://github.com/user-attachments/assets/6f2eaf2c-2e87-4b61-a51f-e3d63f7e650b)

*A chaotic test of reflexes and spatial awareness!*

---

## 🎮 Gameplay Overview

* Two colored points move continuously across the screen.
* Each player leaves a visible trail as they move.
* If a player touches:

  * Their own trail (after a delay),
  * The opponent's trail,
  * Or the screen boundaries,
    **they lose**.
* The last player standing wins the round.

---

## 🕹️ Controls

### Player 1 (Left Side) – Uses **AZQSD** layout (QWERTY-compatible):

* `Q` → Left
* `D` → Right
* `Z` → Up
* `S` → Down

### Player 2 (Right Side) – Uses Arrow Keys:

* `←` → Left
* `→` → Right
* `↑` → Up
* `↓` → Down

---

## 🚀 How to Start

1. Open the HTML file in your browser.
2. Click the **Start** button.
3. A countdown begins (`3...2...1...GO!`) with sound effects.
4. Both players’ points start moving automatically.
5. Use your controls to change direction and **stay alive**.

---

## ❌ Game Over Conditions

You **lose** if:

* You collide with:

  * The border of the screen
  * Your own trail (after a short delay)
  * Your opponent’s trail

---

## 🌈 Features

* Randomized colors for each player every game.
* Dynamic animated background for added intensity.
* Sound cues to mark the countdown and game start.
* Smooth movement with acceleration-like behavior.
* Trail tracking system that creates persistent obstacles.

---

## 🧩 Technical Notes

* Written in **vanilla JavaScript** and uses `setInterval` for movement.
* Trails are made with `div` elements dynamically placed at the player’s position.
* Collision detection is based on pixel proximity.
* The background changes over time using gradients and animation.
* You can set the timeout between each trail by changing the value in the functions `trace1()` and `trace2()`:
```javascript
setTimeout(function(){
  tracer = true;
}, 800); //Mettre 800 ou 100
```

---

## 📦 Setup

Just open the game in a modern web browser — no installation needed.
