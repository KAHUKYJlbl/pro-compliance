import { GoodType } from '../lib/types';

type GoodProps = {
  good: GoodType;
};

export const Good = ( { good }: GoodProps ): JSX.Element => (
  <div>{good.name}</div>
);
