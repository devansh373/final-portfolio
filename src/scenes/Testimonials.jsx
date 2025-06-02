import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="lg:w-1/3 text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-[#DC4492]">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="lg:flex lg:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-[#2CBCE9] max-w-[400px] h-[350px] flex flex-col justify-end p-7 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-[''] before:bg-[url('./assets/person-1.png')] before:bg-no-repeat before:bg-contain before:w-full before:h-[70%]"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Working with Devansh was smooth and professional. He delivered the project on time, with clean code and great attention to detail.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-[#DC4492] max-w-[400px] h-[350px] flex flex-col justify-end p-7 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-[''] before:bg-[url('./assets/person-2.png')] before:bg-no-repeat before:bg-contain before:w-full before:h-[70%]"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
             I was impressed by how quickly he understood our needs. The final product looked amazing and worked flawlessly across all devices
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-[#FDCC49] max-w-[400px] h-[350px] flex flex-col justify-end p-7 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-[''] before:bg-[url('./assets/person-3.png')] before:bg-no-repeat before:bg-contain before:w-full before:h-[70%]"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Reliable, skilled, and easy to communicate with. I’d definitely recommend him to anyone looking for a solid frontend developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
