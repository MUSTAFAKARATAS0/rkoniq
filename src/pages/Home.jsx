    import Header from './LayoutHeader';
    import Hero from './HomeHero';
    import Features from './SolutionsSection';
    import Portfolio from './ProductsSection';
    import Testimonials from './AboutSection';
    // import Pricing from './PricingSection';
    import Contact from './ContactSection';
    import Footer from './LayoutFooter';

    export default function Home() {
      return (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <Features />
            <Portfolio limit={3} />
            <Testimonials />
            {/* <Pricing /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      );
    }