//

import OneCardBestSeller from './OneCardBestSeller';
import { itemsArr } from './itemsArr';

export default function BestSellerList() {
  return (
    <div className='mb-5 grid grid-cols-2 md:grid-cols-4 mt-1 gap-2 py-10'>
      {itemsArr.map((iObj) => (
        <OneCardBestSeller key={iObj.id} name={iObj.name} price={iObj.price} img={iObj.image} rating={iObj.rating} category={iObj.category} />
      ))}
    </div>
  );
}
