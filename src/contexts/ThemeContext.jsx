import { createContext, useReducer } from 'react';

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

const initialState = { color: '#ff0000', fontSize: 16 };

export function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(
        themeReducer,
        initialState
    );

    return (
        <ThemeContext.Provider value={theme}>
          <ThemeDispatchContext.Provider value={dispatch}>
            {children}
          </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
      );
}

export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';

function themeReducer(state, action) {
    switch (action.type) {
        case CHANGE_COLOR:
          return { ...state, color: action.color };
        case CHANGE_FONT_SIZE:
          return { ...state, fontSize: action.fontSize };
        default:
          throw Error('Unknown action: ' + action.type);
    }
}