const ImageDisplay = ({ red, green, blue, opacity }) => {
  const imageStyle = {
    width: "400px",
    height: "300px",
    margin: "0 auto",
    borderRadius: "10px",
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`
  };

  return (
    <div style={imageStyle}>
    </div>
  );
};

export default ImageDisplay;
