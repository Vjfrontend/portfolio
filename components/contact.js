"use client";

import Link from "next/link";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase";
// import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation check
    if (!name || !email || !message || !phone) {
      toast.error("fill out all fields");
      alert("Please fill in all fields before submitting.");
      return;
    }
    try {
      const ReviewColl = collection(database, "Reviews");
      await addDoc(ReviewColl, {
        name,
        email,
        message,
        phone,
      });
      // Optionally, clear the form fields or provide user feedback here
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");

      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error.message);
      alert("Error submitting review. Please try again.");
    }
  };
  // const Reviews = addDoc(ReviewColl)

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center  text-black p-4"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mt-2">Hey! Let's Talk</h1>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form
              className=" text-black p-8 rounded-lg "
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  FULL NAME
                </label>
                <input
                  className="w-full px-3 py-2 bg-transparent border rounded"
                  type="text"
                  id="fullName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  EMAIL
                </label>
                <input
                  className="w-full px-3 py-2 bg-transparent border rounded"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  PHONE
                </label>
                <input
                  className="w-full px-3 py-2 border bg-transparent rounded"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  className="w-full px-3 py-2 border bg-transparent rounded h-32"
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-end">
                <button className="bg-black text-white text-center px-4 py-1 rounded hover:bg-gray-100">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:mt-14 mt-0 lg:w-1/2 px-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center">
                  <div className=" mt-10 absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#"
                      viewBox="0 0 256 256"
                    >
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-14 ">
                  <h3 className="text-lg ">CALL </h3>
                  <p>07061728371</p>
                </div>
              </div>
              <div className="mt-16 absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                </svg>
              </div>
              <div className="ml-14  ">
                <h3 className="text-lg ">SEND US AN EMAIL</h3>
                <a href="mailto:victorezeabikwa@gmail.com" className="mt-2  ">
                  victorezeabikwa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
