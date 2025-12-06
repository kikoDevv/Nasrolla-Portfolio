"use client";
import React, { useState, useEffect } from "react";

interface DotProps {
  text: string | string[];
  speed?: number;
  dotColor?: string;
  textColor?: string;
  className?: string;
  pauseDuration?: number;
  cycle?: boolean;
}

export default function Dot({
  text,
  speed = 100,
  dotColor = "bg-blue-500",
  textColor = "text-gray-800",
  className = "",
  pauseDuration = 2000,
  cycle = true,
}: DotProps) {
  const texts = Array.isArray(text) ? text : [text];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isRevealing, setIsRevealing] = useState(true);

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    if (isRevealing && revealedCount < currentText.length) {
      /*--------- Revealing phase ----------*/

      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (isRevealing && revealedCount === currentText.length) {
      /*--------- Pause phase ----------*/

      const pauseTimer = setTimeout(() => {
        setIsRevealing(false);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    } else if (!isRevealing && revealedCount > 0) {
      /*--------- Unrevealing phase ----------*/

      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev - 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isRevealing && revealedCount === 0 && cycle && texts.length > 1) {
      /*--------- Move to next text ----------*/

      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setIsRevealing(true);
    }
  }, [revealedCount, isRevealing, currentText.length, speed, pauseDuration, cycle, texts.length]);

  /*--------- Reset animation when text changes ----------*/

  useEffect(() => {
    setRevealedCount(0);
    setIsRevealing(true);

    /*--------- Start animation immediately ----------*/

    if (currentText.length > 0) {
      const timer = setTimeout(() => {
        setRevealedCount(1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentText, speed]);

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`${textColor} font-mono`}>{currentText.slice(0, revealedCount)}</span>
      <span className={`w-5 h-5 ${dotColor} rounded-full ml-1 animate-pulse`} />
    </div>
  );
}
