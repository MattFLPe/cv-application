import { useEffect } from "react";

const useEditButton = (setButtonState, setButtonEditState, className) => {
  useEffect(() => {
    const editButton = document.querySelector(`.${className}`);
    if (editButton) {
      const handleClick = (e) => {
        e.preventDefault();
        setButtonState(false);
        setButtonEditState(true);
      };

      editButton.addEventListener("click", handleClick);

      return () => {
        editButton.removeEventListener("click", handleClick);
      };
    }
  }, [setButtonState, setButtonEditState, className]);
};

export default useEditButton;