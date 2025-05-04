export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('appState');
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Ошибка загрузки из localStorage:", err);
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (err) {
      console.error("Ошибка сохранения в localStorage:", err);
    }
  };
  