import Header from './Header';

export default function Layout({ children }) {

  return (
    <div className="relative overflow-hidden">
      <Header />
      {children}
    </div>
  );
}
