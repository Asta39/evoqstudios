"use client";

import { useEffect, useRef, useState } from "react";

const W = 256;
const H = 144;
const GROUND_Y = H - 24;
const GRAVITY = 0.6;
const JUMP_VELOCITY = -8.5;
const PLAYER_SIZE = 12;
const PLAYER_X = 28;

export function PixelRunGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | playing | over

  useEffect(() => {
    try {
      const saved = Number(localStorage.getItem("evoq-404-best") || 0);
      if (saved) setBest(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const state = {
      playerY: GROUND_Y - PLAYER_SIZE,
      velocity: 0,
      obstacles: [],
      speed: 2.6,
      distance: 0,
      spawnTimer: 0,
      running: false,
    };
    stateRef.current = state;

    const reset = () => {
      state.playerY = GROUND_Y - PLAYER_SIZE;
      state.velocity = 0;
      state.obstacles = [];
      state.speed = 2.6;
      state.distance = 0;
      state.spawnTimer = 60;
      state.running = true;
    };

    const jump = () => {
      if (state.playerY >= GROUND_Y - PLAYER_SIZE - 0.5) {
        state.velocity = JUMP_VELOCITY;
      }
    };

    const start = () => {
      reset();
      setPhase("playing");
    };

    const gameOver = () => {
      state.running = false;
      setPhase("over");
      const finalScore = Math.floor(state.distance / 5);
      setScore(finalScore);
      setBest((prev) => {
        const next = Math.max(prev, finalScore);
        try {
          localStorage.setItem("evoq-404-best", String(next));
        } catch {}
        return next;
      });
    };

    const handleInput = () => {
      if (!state.running) {
        start();
        return;
      }
      jump();
    };

    let frame = 0;
    const draw = () => {
      ctx.fillStyle = "#0a0a0c";
      ctx.fillRect(0, 0, W, H);

      // ground
      ctx.fillStyle = "#2a2a2e";
      ctx.fillRect(0, GROUND_Y, W, 2);
      const dashOffset = Math.floor(state.distance) % 12;
      ctx.fillStyle = "#3a3a3f";
      for (let x = -dashOffset; x < W; x += 12) {
        ctx.fillRect(x, GROUND_Y + 4, 6, 2);
      }

      // player
      ctx.fillStyle = "#e1e0cc";
      ctx.fillRect(PLAYER_X, Math.round(state.playerY), PLAYER_SIZE, PLAYER_SIZE);

      // obstacles
      ctx.fillStyle = "#0071e3";
      for (const o of state.obstacles) {
        ctx.fillRect(Math.round(o.x), GROUND_Y - o.h, o.w, o.h);
      }

      if (!state.running) return;

      // physics
      state.velocity += GRAVITY;
      state.playerY += state.velocity;
      if (state.playerY > GROUND_Y - PLAYER_SIZE) {
        state.playerY = GROUND_Y - PLAYER_SIZE;
        state.velocity = 0;
      }

      state.distance += state.speed;
      state.speed = Math.min(6, 2.6 + state.distance / 900);

      state.spawnTimer -= 1;
      if (state.spawnTimer <= 0) {
        const h = 10 + Math.floor(Math.random() * 14);
        state.obstacles.push({ x: W + 4, w: 8 + Math.floor(Math.random() * 6), h });
        state.spawnTimer = 55 + Math.random() * 45 - state.speed * 5;
      }

      for (const o of state.obstacles) o.x -= state.speed;
      state.obstacles = state.obstacles.filter((o) => o.x + o.w > 0);

      const playerBox = { x: PLAYER_X, y: state.playerY, w: PLAYER_SIZE, h: PLAYER_SIZE };
      for (const o of state.obstacles) {
        const obsBox = { x: o.x, y: GROUND_Y - o.h, w: o.w, h: o.h };
        if (
          playerBox.x < obsBox.x + obsBox.w &&
          playerBox.x + playerBox.w > obsBox.x &&
          playerBox.y < obsBox.y + obsBox.h &&
          playerBox.y + playerBox.h > obsBox.y
        ) {
          gameOver();
        }
      }

      if (frame % 5 === 0) setScore(Math.floor(state.distance / 5));
    };

    let raf;
    const loop = () => {
      frame += 1;
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleInput();
      }
    };
    const onPointer = (e) => {
      e.preventDefault();
      handleInput();
    };

    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", onPointer);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        role="img"
        aria-label="Pixel runner game — press space or tap to jump over obstacles"
        className="w-full max-w-[512px] touch-none rounded-lg border border-white/10 [image-rendering:pixelated] cursor-pointer"
        style={{ aspectRatio: `${W} / ${H}` }}
      />
      <div className="flex items-center gap-6 font-mono text-xs text-white/60">
        <span>
          SCORE <span className="text-white">{String(score).padStart(4, "0")}</span>
        </span>
        <span>
          BEST <span className="text-white">{String(best).padStart(4, "0")}</span>
        </span>
      </div>
      <p className="text-xs text-white/40">
        {phase === "idle"
          ? "Tap or press space to play"
          : phase === "over"
            ? "Tap or press space to try again"
            : "Space / tap to jump"}
      </p>
    </div>
  );
}
