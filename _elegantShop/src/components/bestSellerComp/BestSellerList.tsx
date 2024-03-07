//

import OneCardBestSeller from './OneCardBestSeller';
import { itemsArr } from './itemsArr';

export default function BestSellerList() {
  return (
    <div className='mb-5 grid grid-cols-2 md:grid-cols-4 mt-1 gap-2 py-10'>
      {itemsArr.map((iObj) => (
        <OneCardBestSeller key={iObj.id} name={iObj.name} price={iObj.price} img={iObj.image} rating={iObj.rating} category={iObj.category} />
      ))}
      {/* 
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/a3b1564d603be3ebdd3d781e7db79590.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/b628dddf967efb911899b4f87fe5b2ef.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/198f8a151916c6fc9755e6971e67962d.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} soldPrice={200.25} img='/imgBest Seller/198f8a151916c6fc9755e6971e67962d.png' />

      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/a3b1564d603be3ebdd3d781e7db79590.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/b628dddf967efb911899b4f87fe5b2ef.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/6.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} soldPrice={200.25} img='/imgBest Seller/198f8a151916c6fc9755e6971e67962d.png' />

      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/a3b1564d603be3ebdd3d781e7db79590.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/b628dddf967efb911899b4f87fe5b2ef.png' />
      <OneCardBestSeller name='Sonny - WH-1000XM...' price={299.99} img='/imgBest Seller/d2eda88ccb4cc71f499a5d94c2a5bd61.png' /> */}
    </div>
  );
}
