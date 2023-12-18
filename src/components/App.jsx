// import { Increment } from './Exercises/Exercises';
// import { Component } from 'react';

// export const App = () => {
//   return (
//     <>
//       <Increment />
//     </>
//   );
// };

// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };
// export const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     document.title = `Ти клацнув ${value} раз`;
//   });
//   return (
//     <div>
//       <p>Ти клацнув {value} раз</p>
//       <button onClick={() => setValue(value + 1)}>Натисни тут</button>
//     </div>
//   );
// };
// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Mouting phase: same when componentDidMount runs');
//   }, []);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

// export const App = () => {
// const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Значення =>>', value);
//     console.log('Updating phase: same when componentDidUpdate runs');
//   }, [value]);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

// export const App = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);

// ❌ Погано. ESLint покаже попередження
// useEffect(() => {
//   console.log(firstValue + secondValue);
// }, [firstValue]);

// ✅ Добре. Вказані всі залежності, що використовуються всередині ефекту
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue, secondValue]);

//   return (
//     <>
//       <button onClick={() => setFirstValue(firstValue + 1)}>
//         First: {firstValue}
//       </button>
//       <button onClick={() => setSecondValue(secondValue + 1)}>
//         Second: {secondValue}
//       </button>
//     </>
//   );
// };

// import { Player } from './Player/Player';

// export const App = () => {
//   return <Player source="<http://media.w3.org/2010/05/sintel/trailer.mp4>" />;
// };
// export const App = () => {
//   const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
//   const [query, setQuery] = useState('');

//   const filteredPlanets = planets.filter(planet => planet.includes(query));

//   return (
//     <div>
//       {filteredPlanets.map(planet => (
//         <div key={planet}>{planet}</div>
//       ))}
//     </div>
//   );
// };

import { useState, useEffect, useRef } from 'react';

export const App = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // Буде null на першому рендері
  // і посиланням на DOM-елемент всі наступні
  console.log(btnRef.current);

  useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log(btnRef.current);
  });

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log(btnRef.current);
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};
