function Heading({ text }) {
    return (
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center  mb-9">
        Our <span className="text-orange-500">{text}</span>
      </h1>
    );
  }
  
  export default Heading;
