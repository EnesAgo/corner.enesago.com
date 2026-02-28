import { clsx, type ClassValue } from 'clsx';

// Utility function for combining class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format date helper
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();
}

// Format time helper
export function formatTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

// Random rotation for imperfect design
export function randomRotation(min: number = -3, max: number = 3): number {
  return Math.random() * (max - min) + min;
}

// Truncate text
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

// Generate random color from palette
export function randomColor(colors: string[] = ['#FF2D78', '#FFE500', '#00C8FF', '#00FF88', '#9B59FF']): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Delay helper for animations
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if we're on the client side
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

// Generate unique ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// Scroll to element
export function scrollToElement(elementId: string, offset: number = 0): void {
  if (!isClient()) return;
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

