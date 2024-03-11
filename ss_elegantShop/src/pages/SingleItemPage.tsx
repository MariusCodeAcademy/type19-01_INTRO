//
import ProductImgSection from '../components/ProductImageSection/ProductImgSection';
import Header from '../components/header/Header';
import ProdInfo from '../components/productInfo/ProdInfo';

const SingleItemPage = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 gap-16 md:grid-cols-2'>
        <ProductImgSection />
        <ProdInfo />
      </div>
    </div>
  );
};

export default SingleItemPage;
