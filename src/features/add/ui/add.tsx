import { useState } from 'react';
import uniqid from 'uniqid';

import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { addItem } from '../../../widgets/catalog';

import classes from './add.module.sass';

export const Add = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [currentValue, setCurrentValue] = useState( '' );

  const onFormSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    dispatch( addItem( { name: currentValue, id: uniqid() } ) );
    setCurrentValue( '' );
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <button className={classes.button} type="submit">
        +
      </button>

      <input
        type="text"
        placeholder="Type new item name"
        className={classes.input}
        value={currentValue}
        onChange={( e: React.ChangeEvent<HTMLInputElement> ) => setCurrentValue( e.target.value )}
      />
    </form>
  );
};
