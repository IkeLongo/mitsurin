"use client";

// Extend window to allow lastInputEvent
declare global {
  interface Window {
    lastInputEvent?: TouchEvent | MouseEvent;
  }
}
// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    // For ripple effect
    const [visible, setVisible] = React.useState(false);
    const [ripple, setRipple] = React.useState(false);
    const [focusPos, setFocusPos] = React.useState({ x: 0, y: 0 });
    const [radius, setRadius] = React.useState(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Animate radius for ripple
    React.useEffect(() => {
      if (ripple) {
        setRadius(0);
        // Animate to a large value
        const timeout = setTimeout(() => setRadius(400), 10); // Start animation
        // Hide after animation
        const hide = setTimeout(() => {
          setRipple(false);
          setRadius(0);
        }, 500);
        return () => {
          clearTimeout(timeout);
          clearTimeout(hide);
        };
      }
    }, [ripple]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
      // Only trigger ripple on mobile/tablet (sm/md)
      if (window.innerWidth < 1024) {
        const rect = event.target.getBoundingClientRect();
        // Try to use last touch/click position, fallback to center
        let x = rect.width / 2;
        let y = rect.height / 2;
        const lastEvent = window.lastInputEvent;
        if (lastEvent) {
          if ('touches' in lastEvent && lastEvent.touches && lastEvent.touches[0]) {
            // TouchEvent
            const touch = lastEvent.touches[0];
            x = touch.clientX - rect.left;
            y = touch.clientY - rect.top;
          } else if ('clientX' in lastEvent && typeof lastEvent.clientX === 'number') {
            // MouseEvent
            x = lastEvent.clientX - rect.left;
            y = lastEvent.clientY - rect.top;
          }
        }
        setFocusPos({ x, y });
        setRipple(true);
      }
      setVisible(true);
    }

    function handleBlur() {
      setVisible(false);
      setRipple(false);
    }

    // Track last input event globally (for touch/click position)
    React.useEffect(() => {
      function store(e: TouchEvent | MouseEvent) { window.lastInputEvent = e; }
      window.addEventListener('touchstart', store, { capture: true });
      window.addEventListener('mousedown', store, { capture: true });
      return () => {
        window.removeEventListener('touchstart', store, { capture: true });
        window.removeEventListener('mousedown', store, { capture: true });
      };
    }, []);

    // For desktop hover, use mouseX/mouseY; for mobile/tablet focus, use focusPos
    const bg = (window.innerWidth < 1024 && ripple)
      ? useMotionTemplate`
          radial-gradient(
            ${radius}px circle at ${focusPos.x}px ${focusPos.y}px,
            #ca8a04,
            transparent 80%
          )
        `
      : useMotionTemplate`
          radial-gradient(
            ${visible ? 100 + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            #ca8a04,
            transparent 80%
          )
        `;

    return (
      <motion.div
        style={{ background: bg }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className,
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };
