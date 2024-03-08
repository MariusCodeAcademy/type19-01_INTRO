import OneBlogCard from '../components/blogPage/OneBlogCard';
import Header from '../components/header/Header';

function BlogPage() {
  return (
    <div>
      <Header />
      <OneBlogCard img='/img/antras.jpg' title='Blog 1' date='2021-10-10' />
      <OneBlogCard img='/img/antras.jpg' title='Blog 1' date='2021-10-10' />
      <OneBlogCard img='/img/antras.jpg' title='Blog 1' date='2021-10-10' />
    </div>
  );
}

export default BlogPage;
