function Notice({ children }) {
  return (
    <span className="absolute r-0 top-5 rounded-full bg-primary-color text-white text-sm text-center font-medium p-2 cursor-pointer">
      {children}
    </span>
  );
}

export default Notice;
