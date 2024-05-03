import { useState } from 'react';

export function Board() {
  // seed
  const [origin, changeOrigin] = useState('abc');

  // profiles
  const [profiles, changeProfiles] = useState({

  });

  // history of board states
  const [history, changeHistory] = useState([]);

  // current state of board
  const [colorBoard, changeColorBoard] = useState({ '1,1': {}, '1,2': {} });
  const [polarityGrid, changePolarityGrid] = useState({ '1,1': {}, '1,2': {} });
  const [originGrid, changeOriginGrid] = useState({ '1,1': {}, '1,2': {} });

  // attributes
  const [rows, changeRows] = useState(100);
  const [cols, changeCols] = useState(100);
  const [attrition, changeAttrition] = useState(0);
  const [growth, changeGrowth] = useState(0);

  const yin = {
    meaning: 'tranquil',
    colors: [
      {
        name: 'red',
        amount: 10,
      },
      {
        name: 'blue',
        amount: 10,
      },
    ],
  };
  const yang = {
    meaning: 'blues',
    colors: [
      {
        name: 'red',
        amount: 10,
      },
      {
        name: 'blue',
        amount: 10,
      },
    ],
  };

  const boardActions = {
    chooseDimensions: (rows: number, cols: number) => {
      changeRows(rows);
      changeCols(cols);
    },
    chooseOrigin: (origin: string) => {
      changeOrigin(origin);
    },
    chooseMoves: (yinMove: any, yangMove: any) => {
      console.log(yinMove);
      console.log(yangMove);
      // flood fill
      // visualise
    },
    
  };

  return {
    boardActions,
    rows,
    cols,
    yin,
    yang,
  };
}
