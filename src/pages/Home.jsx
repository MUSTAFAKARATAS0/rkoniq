import PageLayout from '../components/layout/PageLayout.jsx';
import Hero from '../components/home/Hero.jsx';
import DeferredSection from '../components/ui/DeferredSection.jsx';

const loadSolutions = () => import('../components/solutions/SolutionsSection.jsx');
const loadProducts = () => import('../components/products/ProductsSection.jsx');
const loadAbout = () => import('../components/about/AboutSection.jsx');
const loadContact = () => import('../components/contact/ContactSection.jsx');

export default function Home() {
  return (
    <PageLayout mainClassName="">
      <Hero />
      <DeferredSection loader={loadSolutions} minHeight={720} />
      <DeferredSection loader={loadProducts} limit={3} minHeight={640} />
      <DeferredSection loader={loadAbout} minHeight={520} />
      <DeferredSection loader={loadContact} minHeight={640} />
    </PageLayout>
  );
}
