import React, { useState } from "react";
import clsx from "clsx";
import "../../App.css"; // <-- Add this line
import styles from "./Services.module.css";
import { Timeline } from "./Timeline";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section
      className={clsx(styles.services, "container", "grid")}
      id="services"
    >
      <div className="ability_component ,section">
        <div className={clsx(styles.section_titlebar)}>
          <h2 className={clsx(styles.section_title)}>Services I offer</h2>
          <span className={clsx(styles.section_subtitle)}>💼 How I Help through Design & Development</span>
        </div>

        <div className={clsx(styles.services_container, "container", "grid")}>

          {/* Web Developer */}
          <div className={clsx(styles.services_content)}>
            <div>
              <i
                className={clsx("uil", "uil-web-grid", styles.services_icon)}
              ></i>
              <h3 className={clsx(styles.services_title)}>
                Web <br /> Developer
              </h3>
            </div>
            <span
              className={clsx(styles.services_button)}
              onClick={() => toggleTab(1)}
            >
              View More
              <i
                className={clsx(
                  "uil",
                  "uil-arrow-right",
                  styles.services_button_icon
                )}
              ></i>
            </span>

            <div
              className={`${styles.services_modal} ${toggleState === 1 ? styles.active_modal : styles.services_modal
                }`}
            >
              <div className={clsx(styles.services_modal_content)}>
                <i
                  className={clsx(
                    "uil",
                    "uil-times",
                    styles.services_modal_close
                  )}
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className={clsx(styles.services_modal_title)}>
                  Web Developer
                </h3>
                <p className={clsx(styles.services_modal_description)}>
                  {/* Services more than 3 years...hvyctrexxcv */}
                </p>

                <ul className={clsx(styles.services_modal_services, "grid")}>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Build responsive and dynamic websites using React.js.
                    </p>
                  </li>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Integrate APIs and manage front-end application states.
                    </p>
                  </li>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Ensure performance optimization and cross-browser
                      compatibility.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* UI/UX Designer */}
          <div className={clsx(styles.services_content)}>
            <div>
              <i
                className={clsx("uil", "uil-brush-alt", styles.services_icon)}
              ></i>
              <h3 className={clsx(styles.services_title)}>
                UI/UX <br /> Designer
              </h3>
            </div>
            <span
              className={clsx(styles.services_button)}
              onClick={() => toggleTab(2)}
            >
              View More
              <i
                className={clsx(
                  "uil",
                  "uil-arrow-right",
                  styles.services_button_icon
                )}
              ></i>
            </span>

            <div
              className={`${styles.services_modal} ${toggleState === 2 ? styles.active_modal : styles.services_modal
                }`}
            >
              <div className={clsx(styles.services_modal_content)}>
                <i
                  className={clsx(
                    "uil",
                    "uil-times",
                    styles.services_modal_close
                  )}
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className={clsx(styles.services_modal_title)}>
                  UI/UX Designer
                </h3>
                <p className={clsx(styles.services_modal_description)}>
                  {/* Services more than 3 years... */}
                </p>

                <ul className={clsx(styles.services_modal_services, "grid")}>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Design intuitive and user-centric interfaces.
                    </p>
                  </li>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Create wireframes, prototypes, and interactive mockups.
                    </p>
                  </li>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Conduct user research and usability testing.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Designer */}
          <div className={clsx(styles.services_content)}>
            <div>
              <i className={clsx("uil", "uil-edit", styles.services_icon)}></i>
              <h3 className={clsx(styles.services_title)}>
                Visual <br /> Designer
              </h3>
            </div>
            <span
              className={clsx(styles.services_button)}
              onClick={() => toggleTab(3)}
            >
              View More
              <i
                className={clsx(
                  "uil",
                  "uil-arrow-right",
                  styles.services_button_icon
                )}
              ></i>
            </span>

            <div
              className={`${styles.services_modal} ${toggleState === 3 ? styles.active_modal : styles.services_modal
                }`}
            >
              <div className={clsx(styles.services_modal_content)}>
                <i
                  className={clsx(
                    "uil",
                    "uil-times",
                    styles.services_modal_close
                  )}
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className={clsx(styles.services_modal_title)}>
                  Visual Designer
                </h3>
                <p className={clsx(styles.services_modal_description)}>
                  {/* Services more than 3 years... */}
                </p>

                <ul className={clsx(styles.services_modal_services, "grid")}>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Design eye-catching visuals and layouts for web and print.
                    </p>
                  </li>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Work with brand guidelines to maintain consistency.
                    </p>
                  </li>
                  <li className={clsx(styles.services_modal_service)}>
                    <i
                      className={clsx(
                        "uil",
                        "uil-check-circle",
                        styles.services_modal_icon
                      )}
                    ></i>
                    <p className={clsx(styles.services_modal_info)}>
                      Create social media graphics, banners, and promotional
                      assets.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* making a timeline with  */}
      <div className={clsx(styles.workexperience_container, "section")}>
        <div className={clsx(styles.section_titlebar)}>
          <h2 className={clsx(styles.section_title)}>Education</h2>
          <span className={clsx(styles.section_subtitle)}>
           💼 My Career Overview
          </span>
        </div>
        <Timeline />
      </div>
    </section>
  );
};
export default Services;
