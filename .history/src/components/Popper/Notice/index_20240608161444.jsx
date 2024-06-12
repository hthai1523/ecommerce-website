function Notice({ children }) {
  return (
    <span className="absolute r-0 top-5 rounded-full bg-primary-color text-emerald-700 text-center font-medium p-1 cursor-pointer">
      {children}
    </span>
  );
}

export default Notice;
