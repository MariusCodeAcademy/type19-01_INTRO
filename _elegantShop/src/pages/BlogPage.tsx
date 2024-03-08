
import BlogRelatedST from '../components/blogPage/BlogRelatedST';
import { BlogHero } from '../components/blogPage/BlogHero/BlogHero';
import Header from '../components/header/Header';

function BlogPage() {
  return (
    <div>
      <Header />
      <BlogHero />
      <BlogRelatedST />
    </div>
  );
}

export default BlogPage;
