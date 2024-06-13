function Description({ data }) {
  return (
    <div className=" text-gray-400 font-medium text-base w-full  flex-shrink-0 flex-grow-0">
      <p>{data}</p>
      <ul className="list-disc pl-8">
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          voluptatibus natus aliquam corrupti, perspiciatis est temporibus quas
          nam labore dicta in, ipsum doloribus aperiam nostrum sapiente? Sit ex
          omnis reiciendis?
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          voluptatibus natus aliquam corrupti, perspiciatis est temporibus quas
          nam labore dicta in
        </li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      </ul>
    </div>
  );
}

export default Description;
