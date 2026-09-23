import Header from './Header.jsx';

export default function PageLayout({
  children,
  mainClassName = 'pt-16',
}) {
  return (
    <>
      <Header />
      <main className={mainClassName}>{children}</main>
    </>
  );
}
