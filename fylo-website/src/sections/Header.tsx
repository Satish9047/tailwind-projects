const Header = () => {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      {/* dynamic logo */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
    </header>
  );
};

export default Header;
