import { NameSpace, State } from '../../../app/provider/store';
import { GoodType } from '../../../entities/good';

export const getCatalog = ( state: State ): GoodType[] => state[NameSpace.Catalog].catalog;
