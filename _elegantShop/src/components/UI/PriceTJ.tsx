type PriceTJProps = {
  price: number;
  salePrice?: number;
  currency: string;
};
export default function PriceTJ({ price, salePrice, currency }: PriceTJProps) {
  if (salePrice) {
    return (
      <div className='flex gap-2 items-center'>
        <div>
          <h1 className='text-3xl font-semibold'>
            {currency} {salePrice.toFixed(2)}
          </h1>
        </div>
        <div>
          <h1 className='line-through text-2xl font-semibold text-gray-500 '>
            {currency} {price.toFixed(2)}
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex gap-2 items-center'>
        <div>
          <h1 className='text-3xl font-semibold'>
            {currency} {price.toFixed(2)}
          </h1>
        </div>
      </div>
    );
  }
}
