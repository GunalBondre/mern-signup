// import React,{useState} from 'react'

// const newSelect = () => {
//     const [list, setList] = useState(
//         [{name: 'London', id: 1},
//          {name: 'usa', id: 2},
//         ]);
//         const [active, setActive] = useState(0);

//        const keyDownHandler = event => {
//         if (event.keyCode === 38 && active > 0) {
//             setActive(active - 1);
//     }   else if (event.keyCode === 40 && event < list.length - 1) {
//             setActive(active + 1);
//     }
//   };

//   return (
//     <div>
//       <input onKeyDown={keyDownHandler} />
//       <ul>
//         {list.map((city, i) => (
//           <li key={city.id} className={active === i ? 'active' : 'no-active'}>
//             {city.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default newSelect

// // const new = props => {
// //     const [list, setList] = useState(
// //        [{name: 'London', id: 1},
// //         {name: 'usa', id: 2},
// //        ]);
// //        const [active, setActive] = useState(0);

// //       const keyDownHandler = event => {
// //        if (event.keyCode === 38 && active > 0) {
// //            setActive(active - 1);
// //    }   else if (event.keyCode === 40 && event < list.length - 1) {
// //            setActive(active + 1);
// //    }
// //  };

// //  return (
// //    <div>
// //      <input onKeyDown={keyDownHandler} />
// //      <ul>
// //        {list.map((city, i) => (
// //          <li key={city.id} className={active === i ? 'active' : 'no-active'}>
// //            {city.name}
// //          </li>
// //        ))}
// //      </ul>
// //    </div>
// //  );
// // };
