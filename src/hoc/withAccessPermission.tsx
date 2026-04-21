import { useRouter } from "next/router";
import { useEffect } from "react";

const withAccessPermission = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return function Wrapped(props: P) {
    const router = useRouter();

    useEffect(() => {
      const hasAccess = true;

      if (!hasAccess) {
        router.replace("/403");
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withAccessPermission;