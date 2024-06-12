function Notice({ children }) {
  return (
    <span className="absolute right-[-1rem] top-6 rounded-full bg-primary-color text-white text-sm text-center font-medium w-7 h-7 border-2 border-white cursor-pointer">
      {children}
    </span>
  );
}

export default Notice;
