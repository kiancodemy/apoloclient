import { toast } from "react-toastify";
import { Slide } from "react-toastify";
export const showToast = (message: string, type: "success" | "error") => {
  if (type === "success") {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",

      transition: Slide,
    });
  } else if (type === "error") {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
      transition: Slide,
    });
  }
};
