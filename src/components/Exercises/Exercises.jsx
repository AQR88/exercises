import { useEffect, useRef, useState } from 'react';

export const Increment = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      {value}
      <button type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
    </div>
  );
};

// const firstRender = useRef(false);
// useEffect(() => {
//   if (firstRender.current) {
//     firstRender.current = false;
//     return;
//   }
// });
