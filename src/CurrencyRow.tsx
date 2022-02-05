import { FC } from 'react';

type ICurrencyRow = {
    moneyType: 'BRL';
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CurrencyRow: FC<ICurrencyRow> = (props) => {
    const { moneyType, onChange } = props;

    return (
        <div>
            <label htmlFor='number' className='label-number'>
                {moneyType}
            </label>
            <input
                type='number'
                id='number'
                className='w-60'
                onChange={onChange}
            />
        </div>
    );
};

export default CurrencyRow;
