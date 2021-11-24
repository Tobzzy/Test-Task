import { useEffect, useState } from "react";

const usePersistedState = <T extends any>(
  storageKey: string,
  initialState: T
) => {
  const [state, setState] = useState(initialState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const persistedStateString = window.localStorage.getItem(storageKey);
    if (persistedStateString) {
      try {
        const persistedState: T = JSON.parse(persistedStateString);
        setState(persistedState);
      } catch (err) {}
    }
    setLoaded(true);
  }, [setState, storageKey, setLoaded]);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    }
  }, [state, loaded, storageKey]);

  const reset = () => setState(initialState);

  return [state, setState, reset] as [
    typeof state,
    typeof setState,
    typeof reset
  ];
};

export default usePersistedState;
