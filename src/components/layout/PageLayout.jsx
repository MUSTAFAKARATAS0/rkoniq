import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function PageLayout({
  children,
  mainClassName = 'pt-16',
  footer = <Footer />,
}) {
  return (
    <>
      <Header />
      <main className={mainClassName}>{children}</main>
      {footer}
    </>
  );
}
