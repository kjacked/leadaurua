/**
 * A simple utility function to conditionally join class names together
 * This replaces the need for the clsx library
 * 
 * @param {...any} classes - Class names or objects where keys are class names and values are booleans
 * @returns {string} - Joined class names
 */
export function classNames(...classes) {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return cls;
    })
    .join(' ');
}

// For backward compatibility with components using clsx
export const clsx = classNames; 