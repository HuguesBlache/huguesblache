"use client";

import { useEffect, useState } from "react";

/**
 * Hook to observe when an element intersects with the viewport
 * @param elementId - The ID of the element to observe
 * @param rootMargin - Margin around the root (viewport)
 * @returns isIntersecting - Whether the element is currently intersecting with the viewport
 */
export function useIntersectionObserver(
  elementId: string,
  rootMargin: string = "0px"
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementId, rootMargin]);

  return isIntersecting;
} 