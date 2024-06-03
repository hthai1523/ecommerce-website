function Wrapper({children, className = ''}) {
    return ( 
        <div className="flex flex-col w-full rounded-[8px] min-h-100 bg-white pt-2 shadow-2xl overflow-hidden"
        style={{ maxHeight: "calc(-156px + 100vh)", maxWidth: "760px" }}>
            {children}
        </div>
     );
}

export default Wrapper;