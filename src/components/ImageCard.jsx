function FlexRowWithImage({ title, info, image }) {
    return (
      <div className="flex flex-col lg:flex-row items-center">
        <div className=" lg:w-full lg">
          <img src={image} alt="Your Image" className="w-full h-auto lg:max-w-[600px]" />
        </div>
        <div className="p-4 lg:w-full">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-400">{info}</p>
        </div>
      </div>
    );
  }
  
  export default FlexRowWithImage;