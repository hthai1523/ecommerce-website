function Notice({ children }) {
  return (
    <span className="absolute r-0 top-5 rounded-full bg-primary-color text-white text-sm text-center font-medium w-5 h-5 cursor-pointer">
      {children}
    </span>
  );
}

export default Notice;
