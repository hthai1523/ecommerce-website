import Image from "../Image";

function BlogContainer({ children }) {
  return (
        <div className="w-[700px] h-[700px] m-[10px] overflow-hidden cursor-pointer boder border-stone-900 text-center rounded-2xl relative">
          <Image
            className="w-full h-full object-cover "
            src="https://observer.com/wp-content/uploads/sites/2/2019/06/gettyimages-117917908.jpg?resize=970,1310"
            alt="story-1"
          />
           <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-6xl text-white font-black " >{children}</p> 
        </div>
  );
}

export default BlogContainer;
