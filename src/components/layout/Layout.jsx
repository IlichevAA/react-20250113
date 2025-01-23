export const Layout = ({ children }) => {
  return (
    <div>
      <header>header</header>
      <div>{children}</div>
      <hr />
      <footer>footer</footer>
    </div>
  );
};
