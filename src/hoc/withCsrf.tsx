const withCsrf = <P extends object>(Component: React.ComponentType<P>) => {
  return function Wrapped(props: P) {
    // mock csrf attach logic
    return <Component {...props} />;
  };
};

export default withCsrf;