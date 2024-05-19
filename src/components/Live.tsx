import React from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useOthers } from "../../liveblocks.config";

function Live() {
  const others = useOthers();
  return (
    <div>
      <LiveCursors others={others}/>
    </div>
  );
}

export default Live;
