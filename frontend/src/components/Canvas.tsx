import { useEffect, useRef } from "react";

export function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");

      // Start drawing when mouse is pressed down
      const handleMouseDown = (event: MouseEvent) => {
        if (context) {
          isDrawing.current = true; // Start drawing
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          // Draw initial point where the mouse is pressed
          context.fillStyle = "black";
          context.fillRect(x, y, 5, 5);
        }
      };

      // Draw as the mouse moves while the button is pressed
      const handleMouseMove = (event: MouseEvent) => {
        if (isDrawing.current && context) {
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          // Draw a small rectangle at the current mouse position
          context.fillRect(x, y, 5, 5);
        }
      };

      // Stop drawing when mouse button is released
      const handleMouseUp = () => {
        isDrawing.current = false; // Stop drawing
      };

      // Add event listeners
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseUp); // To stop drawing if mouse leaves the canvas

      return () => {
        // Cleanup event listeners when the component unmounts
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseUp);
      };
    }
  }, []);
  return (
    <div>
      <div className="border bg-white h-[520px] w-[840px] rounded-xl overflow-hidden drop-shadow-2xl">
        {" "}
        <canvas
          ref={canvasRef}
          width={840}
          height={520}
          // style={{ border: "1px solid black" }}
        />
      </div>
    </div>
  );
}
