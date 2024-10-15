import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function Modal({ handleClick }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFileName(e.target.files[0]);
  };

  // Handle autofill validation issue
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("animationstart", (e) => {
        if (e.animationName === "onAutoFillStart") {
          // Set value for autofilled fields to avoid validation errors
          setValue(input.name, input.value);
        }
      });
    });
  }, [setValue]);

  const onFormSubmit = async (data) => {
    setIsSubmitting(true); // Disable the button and show 'Submitting...'

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("Contact", data.Contact);
    formData.append("attachment", selectedFileName);
    formData.append("link", data.filelink);
    formData.append("Requirements", data.Requirements);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/front/estimate/new`,
        formData
      );

      if (data?.success) {
        toast.success(
          data?.message ||
            "We've received your request and will get back to you soon"
        );
        reset(); // Clear form fields after successful submission
        setSelectedFileName(null); // Reset file input
      } else {
        toast.error(data?.message || "Unexpected error occurred!");
      }
    } catch (error) {
      console.error("Error sending estimate submission:", error);
      toast.error("Unexpected error occurred!");
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 h-[1200px] z-[9999] pt-[200px]">
        <div className="absolute lg:w-[50%]  w-[90%]  h-full  ">
          <div className="z-50 border p-4 rounded-lg shadow-md relative">
            <button
              onClick={handleClick}
              className="absolute top-0 right-3 text-black font-bold px-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <div className="bg-white rounded-md p-1 mt-3">
              <h2 className="text-lg font-bold mb-4 mt-3 text-customBlue-light text-center">
                Please Fill Your Details
              </h2>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                  <div className="col-span-1">
                    <div className="border-b border-gray-300">
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: true })}
                        className="block w-full bg-transparent outline-none"
                        placeholder="Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          Name is required.
                        </p>
                      )}
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="contact"
                        type="text"
                        {...register("Contact", { required: true })}
                        className="block w-full mt-[42px] bg-transparent outline-none"
                        placeholder="Contact number"
                      />
                      {errors.Contact && (
                        <p className="text-red-500 text-sm">
                          Contact number is required.
                        </p>
                      )}
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="message"
                        type="text"
                        {...register("Requirements")}
                        className="block w-full mt-[48px] bg-transparent outline-none"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="border-b border-gray-300">
                      <input
                        required
                        type="email"
                        {...register("email", { required: true })}
                        className="block w-full bg-transparent outline-none"
                        placeholder="Email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">Email is required.</p>
                      )}
                    </div>
                    <div className="border-b border-gray-300 bg-customBlue-light">
                      <input
                        id="file-upload"
                        type="file"
                        className="block w-full border-none border-gray-300 outline bg-transparent mt-[43px] "
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        {...register("filelink")}
                        className="block w-full bg-transparent mt-12 outline-none"
                        placeholder="File link (optional)"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className="w-[130px] mb-4 h-[50px] text-[18px] cursor-pointer rounded-md font-bold bg-customBlue-light hover:border-black border text-white mt-6" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
