import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageOnSubmit, setMessageOnSubmit] = useState("");
  useEffect(() => {
    (name || email || message) && setMessageOnSubmit("");
  }, [name, email, message]);
  const onSubmit = async (e) => {
    // console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      // setName("");
      // setEmail("");
      // setMessage("");
      setMessageOnSubmit("Thank You For Contacting!");
      // console.log(isValid)
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-[#FDCC49]">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          {/* <img src="../assets/contact-image.jpeg" alt="contact" /> */}
          <img
            src="../assets/ReadyPlayerMe-Avatar.jpeg"
            alt="contact"
            className="w-[380px]  rounded-lg border border-white"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/14ed025d7047f2fb8c1a57b30ef1c631 "
            method="POST"
          >
            <input
              className="w-full border border-white rounded-lg font-semibold  p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-[#DC4492] mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full border border-white rounded-lg font-semibold  p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-[#DC4492] mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full border border-white rounded-lg font-semibold  p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="text-[#DC4492] mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-3 bg-transparent  text-white mt-5 hover:bg-amber-600  transition duration-500 cursor-pointer rounded-lg border border-white"
              type="submit"
            >
              Send a message
            </button>
            <p className="text-2xl text-[#49fdf1]">{messageOnSubmit}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
