import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [stateXYZ, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    fetch(url)
      .then((x) => x.text())
      .then((y) => setState({ data: y, loading: false }));
  }, [url]);
  return stateXYZ;
};
