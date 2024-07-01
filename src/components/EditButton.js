import { useEffect } from "react";

const useEditButton = (setButtonState, setButtonEditState) => {
  useEffect(() => {
    const editButton = document.querySelector(".editButton");
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
  }, [setButtonState, setButtonEditState]);
};

export default useEditButton;