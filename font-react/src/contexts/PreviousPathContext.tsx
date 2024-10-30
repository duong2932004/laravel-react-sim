import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";

interface StateType {
  previousPath: string | null;
  currentPath: string;
}

type ActionType = { type: "UPDATE_PATH"; payload: string };

const PreviousPathContext = createContext<{ previousPath: string | null }>({
  previousPath: null,
});

function pathReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "UPDATE_PATH":
      return {
        previousPath: state.currentPath,
        currentPath: action.payload,
      };
    default:
      return state;
  }
}

export function PreviousPathProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  const [state, dispatch] = useReducer(pathReducer, {
    previousPath: null,
    currentPath: location.pathname,
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_PATH", payload: location.pathname });
  }, [location.pathname]);

  return (
    <PreviousPathContext.Provider value={{ previousPath: state.previousPath }}>
      {children}
    </PreviousPathContext.Provider>
  );
}

export function usePreviousPath() {
  return useContext(PreviousPathContext);
}
