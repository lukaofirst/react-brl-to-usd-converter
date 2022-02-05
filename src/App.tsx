import React, { useState } from 'react';
import CurrencyRow from './CurrencyRow';

const dolarValue = 5.33;

function App() {
    const [value, setValue] = useState<number>(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0) {
            const calcResult = (+e.target.value / dolarValue).toFixed(2);

            setValue(+calcResult);
        }
    };

    return (
        <div className='card'>
            <h2 className='title'>Convert BRL to USD</h2>
            <CurrencyRow
                onChange={onChangeHandler}
                value={value}
                moneyType='BRL'
            />
            <p className='output'>{value > 0 && `USD ${value}`}</p>
        </div>
    );
}

export default App;
