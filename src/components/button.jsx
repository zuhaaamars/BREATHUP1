export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
