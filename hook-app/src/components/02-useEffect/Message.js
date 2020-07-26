import React, { useEffect, useState } from "react";

const Message = () => {
  const [coors, setcoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;

  useEffect(() => {
    const mouseMove = (ev) => {
      const coords = { x: ev.x, y: ev.y };
      setcoors(coords);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      setcoors({ x: 0, y: 0 });
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!!</h3>
      <p>
        X: {x} Y: {y}
      </p>
    </div>
  );
};

export default Message;
