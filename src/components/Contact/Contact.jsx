import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion"; // ✅ Add this with other imports

import "../../App.css";
import clsx from "clsx";
import styles from "./Contact.module.css";
import { FiSend } from "react-icons/fi";
const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qtn3cle', 'template_pxdebdd', form.current, {
        publicKey: 'tIyrDzrA9Fxr3mseo',
      })
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        e.target.reset();

        // Auto-hide after 5 seconds
        setTimeout(() => setStatusMessage(null), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatusMessage("❌ Failed to send message. Please try again.");

        // Auto-hide after 5 seconds
        setTimeout(() => setStatusMessage(null), 5000);
      });
  };

  return (
    <section className={clsx(styles.skills, "section")} id="contact">
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>🛜 Let’s Connect...</h2>
        {/* <span className={clsx(styles.section_subtitle)}>Connect mee</span> */}
      </div>

      <div className={clsx(styles.contact_container, "container", "grid")}>
        <div className={clsx(styles.contact_content)}>
          <h3 className={clsx(styles.contact_title)}>Let’s talk! 🚀</h3>

          <div className={clsx(styles.contact_info)}>
            {/* WhatsApp */}
            <div className={clsx(styles.contact_card)}>
              <i className={clsx("bx", "bxl-whatsapp", styles.contact_card_icon)}></i>
              <h3 className={clsx(styles.contact_card_title)}>Whatsapp</h3>
              <span className={clsx(styles.contact_card_data)}>+91 9350392377</span>

              <a
                href="https://api.whatsapp.com/send?phone=9350392377"
                target="_blank"
                rel="noreferrer"
                className={clsx(styles.contact_button)}
              >
                <span className={clsx(styles.contact_button_text)}>
                  Write me
                </span>
                <i className={clsx("bx", "bx-right-arrow-alt", styles.contact_button_icon)}></i>
              </a>
            </div>

            {/* Email */}
            <div className={clsx(styles.contact_card)}>
              <i className={clsx("bx", "bx-mail-send", styles.contact_card_icon)}></i>
              <h3 className={clsx(styles.contact_card_title)}>Email</h3>
              <span className={clsx(styles.contact_card_data)}>cloudmukul@gmail.com</span>

              <a
                href="cloudmukul@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={clsx(styles.contact_button)}
              >
                <span className={clsx(styles.contact_button_text)}>
                  Write me
                </span>
                <i className={clsx("bx", "bx-right-arrow-alt", styles.contact_button_icon)}></i>
              </a>
            </div>

            {/* LinkedIn */}
            <div className={clsx(styles.contact_card)}>
              <i className={clsx("bx", "bxl-linkedin", styles.contact_card_icon)}></i>
              <h3 className={clsx(styles.contact_card_title)}>LinkedIn</h3>
              <span className={clsx(styles.contact_card_data)}>Mukul</span>

              <a
                href="https://www.linkedin.com/in/cloudmukul/"
                target="_blank"
                rel="noreferrer"
                className={clsx(styles.contact_button)}
              >
                <span className={clsx(styles.contact_button_text)}>
                  Write me
                </span>
                <i className={clsx("bx", "bx-right-arrow-alt", styles.contact_button_icon)}></i>
              </a>
            </div>
          </div>
        </div>

        <div className={clsx(styles.contact_content)}>
          <h3 className={clsx(styles.contact_title)}>💬 Have questions or ideas?</h3>

          <div className={clsx(styles.contact_fullform)}>
            <form ref={form} onSubmit={sendEmail} className={clsx(styles.contact_form)}>
              <div className={clsx(styles.contact_form_div)}>
                <label className={clsx(styles.contact_form_tag)}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                  className={clsx(styles.contact_form_input)}
                />
              </div>

              <div className={clsx(styles.contact_form_div)}>
                <label className={clsx(styles.contact_form_tag)}>Mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  className={clsx(styles.contact_form_input)}
                />
              </div>

              <div className={clsx(styles.contact_form_div, styles.contact_form_area)}>
                <label className={clsx(styles.contact_form_tag)}>Project</label>
                <textarea
                  name="project"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write your message"
                  className={clsx(styles.contact_form_input)}
                ></textarea>
              </div>

              <div>
                <button className={clsx(styles.button, "button")}>
                  <span>Send Message</span>
                  <FiSend className={styles.icon} />
                </button>
              </div>

            </form>

            {/* 🟢 Feedback Message */}


          </div>
        </div>
      </div>

      <div className={clsx(styles.show_message)}>
        <AnimatePresence >
          {statusMessage && (
            <motion.div
              key="feedback-toast"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className={clsx(
                styles.toastMessage,
                statusMessage.includes("✅") ? styles.toastSuccess : styles.toastError
              )}
            >
              {statusMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;