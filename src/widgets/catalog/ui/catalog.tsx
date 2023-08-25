import { Good } from '../../../entities/good/ui/good';
import { useCatalog } from '../lib/hooks/use-catalog';

export const Catalog = (): JSX.Element => {
  const catalog = useCatalog();

  return (
    <div>
      {
        catalog.map( ( element ) =>
          <Good good={element} />
        )
      }
    </div>
  );
};
