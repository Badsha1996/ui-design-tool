import React, { useCallback } from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useMyPresence, useOthers } from "../../liveblocks.config";

function Live() {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  // Mose move
  const handlepointerMove = useCallback((e: React.PointerEvent) => {
    e.preventDefault();

    // current position of cursor
    // window - realtive cursor position
    const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  // logout and hide
  const handlepointerLeave = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    updateMyPresence({ cursor: null, message: null });
  }, []);

  // login and continue
  const handlepointerDown = useCallback((e: React.PointerEvent) => {
    // current position of cursor
    // window - realtive cursor position
    const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  return (
    <div
      onPointerMove={handlepointerMove}
      onPointerLeave={handlepointerLeave}
      onPointerDown={handlepointerDown}
      className="h-svh text-center flex justify-center items-center border-2 border-emerald-400"
    >
      <h1 className="text-2xl text-white">UI Live Design Tool</h1>
      <LiveCursors others={others} />
    </div>
  );
}

export default Live;
