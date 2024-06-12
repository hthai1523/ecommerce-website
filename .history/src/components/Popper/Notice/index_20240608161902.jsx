function Notice({ children }) {
  return (
    <span className="absolute r-0 top- rounded-full bg-primary-color text-white text-sm text-center font-medium w-6 h-6 border border-white cursor-pointer">
      {children}
    </span>
  );
}

export default Notice;
