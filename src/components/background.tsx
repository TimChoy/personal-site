"use client";
import React, { useState, useEffect } from "react";
import styles from "./background.module.css";
const { produce } = require("immer");

const numRows = 100;
const numCols = 150;

const operations = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [-1, -1],
  [-1, 1],
  [1, 0],
  [1, -1],
  [1, 1],
];

const generateGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.85 ? 1 : 0)));
  }
  return rows;
};

const Background = () => {
  const [grid, setGrid] = useState(() => {
    return generateGrid();
  });

  useEffect(() => {
    setTimeout(() => {
      setGrid((g) => {
        return produce(g, (gridCopy: (0 | 1)[][]) => {
          for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
              let neighbours = 0;
              operations.forEach(([x, y]) => {
                const newI = i + x;
                const newJ = j + y;
                if (
                  newI >= 0 &&
                  newI < numRows &&
                  newJ >= 0 &&
                  newJ < numCols
                ) {
                  if (g[newI][newJ] === 1) {
                    neighbours += 1;
                  }
                }
              });

              if (neighbours < 2 || neighbours > 3) {
                gridCopy[i][j] = 0;
              } else if (g[i][j] === 0 && neighbours === 3) {
                gridCopy[i][j] = 1;
              }
            }
          }
        });
      });
    }, 100);
  }, [grid]);

  return (
    <div className={styles.backgroundContainer}>
      <div
        className={styles.backgroundGrid}
        style={{
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((_, j) => (
            <div
              key={`${i}-${j}`}
              className={styles.cell}
              style={{
                backgroundColor: grid[i][j]
                  ? "rgb(110,110,110)"
                  : "rgb(36,36,36)",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Background;
