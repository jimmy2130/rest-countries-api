import React from 'react';

export function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? stickyValue
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}