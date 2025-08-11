import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import ContactImg from "../images/freepik__upload__18606.png";
import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const submitContact = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        //console.log('Email sent successfully:', response);
        setLoading(false);
        toast.success(
          "Message sent successfully! We will get back to you soon."
        );
        setFormData({
          name: "",
          message: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -120 }}
      transition={transition1}
      className=" relative "
    >
      <div className="container mx-auto h-full">
        <div className=" flex flex-col lg:flex-row h-full items-center justify-start lg:pt-12 pt-24  gap-x-8 text-center lg:text-left">
          {/* <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-0 -z-10"></div> */}

          <div className="lg:flex-1 lg:pt-28 px-4 relative ">
            <h1
              className="h1 flex items-center justify-center lg:justify-start
                  dark:text-gray-300"
            >
              Contact me{" "}
              <img
                src={ContactImg}
                alt="Contact"
                className="w-[90px]  lg:hidden"
              />
            </h1>
            <p className="dark:text-gray-200 mb-12">
              {" "}
              I would love to get suggestions from you!
            </p>

            <form onSubmit={submitContact}>
              <div className="flex flex-col gap-y-10">
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  placeholder="Your Name"
                  className="outline-none dark:border-b-gray-300 border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] md:text-[20px] text-base dark:text-gray-400 text-black"
                />
                <input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  type="tel"
                  placeholder="Your Phone Number"
                  pattern="[0-9]*"
                  className="outline-none dark:border-b-gray-300 border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] md:text-[20px] text-base"
                />
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  type="text"
                  placeholder="Your Message"
                  className="outline-none border-b dark:border-b-gray-300 border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] md:text-[20px] text-base"
                />
              </div>
              <button className="btn mt-6">Send</button>
            </form>

            {/* SOCIALS */}
          </div>

          <div className="lg:flex-1 hidden lg:block">
            <img
              src={ContactImg}
              alt="Contact"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:grayscale"
            />
          </div>
        </div>

        <div className=" mt-16 items-center">
          <ul className="flex gap-x-10 items-center justify-self-center">
            <li className="text-4xl text-blue-600 hover:text-secondary transition">
              <a
                href="https://web.facebook.com/shalom.james.52"
                target="_blank"
                rel="noopener noreferrer
                  "
              >
                <FaFacebook />
              </a>
            </li>
            <li className=" text-4xl text-green-500 hover:text-secondary transition">
              <a
                href="https://api.whatsapp.com/send?phone=8028020238"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="text-4xl transition mt-2">
              <a
                href="https://www.instagram.com/becoming_sekani/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaInstagram
                  style={{
                    fill: "url(#instagramGradient)",
                  }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>

            <li className=" text-4xl text-[#EA4335] hover:text-secondary transition">
              <a
                href="mailto:bookasessionwithsekani@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMailBulk />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </motion.section>
  );
};

export default Contact;
