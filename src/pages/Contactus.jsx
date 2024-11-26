import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaEraser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";
import Spinner from "../spinner/Spinner";

function ContactUs({ BASE_URL }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0); // State to track word count

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const onSubmit = async (data) => {
    const { full_name, email, description } = data;

    if (wordCount > 50) {
      toast.warn("Please reduce the word count to 50 or fewer before submitting.");
      return;
    }

    try {
      setIsLoading(true);

      // Prepare data for API
      const dataToSend = {
        full_name,
        email,
        description,
      };

      console.log("Sending data:", dataToSend);

      toast.success("Form submitted successfully!");
      reset(); // Reset the form after successful submission
      setWordCount(0); // Reset word count
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar id="main-nav" />
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          {isLoading ? (
            <div className="col-md-5 text-center">
              <Spinner />
            </div>
          ) : (
            <div className="col-md-5 border border-4 rounded-3 pt-4 pb-3 ps-5 pe-5 shadow p-3 bg-body rounded no-print mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-center mb-3">Contact Us</h4>

                {/* Full Name */}
                <div className="mb-2">
                  <label htmlFor="full_name" className="form-label">
                    Full Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm mb-2 ${
                      errors.full_name ? "is-invalid" : ""
                    }`}
                    id="full_name"
                    placeholder="e.g., Alex John Doe"
                    {...register("full_name", {
                      required: "Full name is required.",
                      pattern: {
                        value: /^[a-zA-Z.\s]+$/,
                        message:
                          "Full name must contain only letters, spaces, or periods.",
                      },
                      maxLength: {
                        value: 50,
                        message: "Full name must be 50 characters or fewer.",
                      },
                    })}
                  />
                  {errors.full_name && (
                    <div className="invalid-feedback">{errors.full_name.message}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-sm mb-2 ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="e.g., johndoe@gmail.com"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                  )}
                </div>

                {/* Message */}
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    className={`form-control form-control-sm mb-2 ${
                      errors.description || wordCount > 50 ? "is-invalid" : ""
                    }`}
                    id="description"
                    placeholder="e.g., Your Message Over Here"
                    {...register("description", {
                      required: "Comment or message is required.",
                      validate: (value) => {
                        const words = countWords(value);
                        setWordCount(words); // Update word count dynamically
                        return true; // Validation handled separately
                      },
                    })}
                    onChange={(e) => {
                      const words = countWords(e.target.value);
                      setWordCount(words);
                    }}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description.message}</div>
                  )}
                  {wordCount > 50 && (
                    <div className="invalid-feedback">
                      Your comment must not exceed 50 words.
                    </div>
                  )}
                  <div className="d-flex justify-content-end mt-1">
                    <small
                      className={`${
                        wordCount > 50 ? "text-danger" : "text-muted"
                      }`}
                    >
                      Word count: {wordCount}/50
                    </small>
                  </div>
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#FF683B",
                      color: "white",
                    }}
                    disabled={isLoading}
                  >
                    Submit <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
