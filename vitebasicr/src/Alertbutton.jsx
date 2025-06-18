import React from "react";
import MySimpleForm from "./form"; // Importing a custom form component
    function AlertButton() {
  const handleClick = () => {
    

    alert("Button was clicked!");
  };
  return (
  <><button onClick={handleClick}>Click Me</button>
  <MySimpleForm />
  </>
  );
}
export default AlertButton;
        