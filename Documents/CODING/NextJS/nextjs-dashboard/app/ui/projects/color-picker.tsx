import { useState } from 'react';

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('#ffffff');

  //   const handleColorChange = (event: HTMLFormElement) => {
  //     setCurrentColor(event.target.value);
  //     // You can perform further actions here, like updating the color on the backend
  //     // using a fetch request.
  //   };

  return (
    <div>
      <div
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: currentColor,
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
