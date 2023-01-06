import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Context } from "../../store/Context.js";
export default function Contact() {
  const { setTheme, theme } = useContext(Context);
  const form = useRef();
  const themeMain = createTheme({
    palette: {
      primary: {
        light: "#726bea",
        main: "#4F46E5",
        dark: "#3731a0",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: "#726bea",
        main: "#4F46E5",
        dark: "#3731a0",
        contrastText: "#fff",
      },
    },
  });

  const [sent, setSent] = useState(false);
  const [displaySent, setDisplaySent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setDisplaySent(true);
    emailjs
      .sendForm(
        "service_1l1kcki",
        "template_oi6lxpc",
        form.current,
        "WlWPmqkRekKDtErd2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent("Email Sent Successfully 👍");
          setDisplaySent(true);
        },
        (error) => {
          console.log(error.text);
          setSent("Email Could Not Be Sent 🤨");
          setDisplaySent(false);
        }
      );

    document.getElementById("form").reset();
  };

  useEffect(() => {
    setTimeout(() => setSent(""), 10000);
  }, [displaySent]);

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <h2 className="mb-12  text-4xl font-extralight dark:text-indigo-50">
        Contact Me
      </h2>
      {theme === "dark" ? (
        <ThemeProvider theme={darkTheme}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col"
            id="form"
          >
            <div className="flex flex-coll justify-center items-center mb-8 dark:text-indigo-50">
              <TextField
                id="outlined-basic"
                name="user_name"
                label="Full Name"
                variant="outlined"
                className="dark:text-indigo-50"
              />
            </div>
            <div className="flex flex-coll justify-center items-center mb-8">
              <TextField
                id="outlined-basic"
                name="user_email"
                label="Email Address"
                variant="outlined"
              />
            </div>
            <div className="flex flex-coll justify-center items-center mb-8">
              <TextField
                id="outlined-textarea"
                label="Your Message"
                placeholder="Placeholder"
                multiline
                name="message"
                size="large"
              />
            </div>
            <Button
              className="text-indigo-600"
              type="submit"
              value="Send"
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </form>
          {displaySent ? (
            <small className="mt-6">{sent}</small>
          ) : (
            <small className="mt-10">{sent}</small>
          )}
          {}
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={themeMain}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col"
            id="form"
          >
            <div className="flex flex-coll justify-center items-center mb-8 dark:text-indigo-50">
              <TextField
                id="outlined-basic"
                name="user_name"
                label="Full Name"
                variant="outlined"
                className="dark:text-indigo-50"
              />
            </div>
            <div className="flex flex-coll justify-center items-center mb-8">
              <TextField
                id="outlined-basic"
                name="user_email"
                label="Email Address"
                variant="outlined"
              />
            </div>
            <div className="flex flex-coll justify-center items-center mb-8">
              <TextField
                id="outlined-textarea"
                label="Your Message"
                placeholder="Placeholder"
                multiline
                name="message"
                size="large"
              />
            </div>
            <Button
              className="text-indigo-600"
              type="submit"
              value="Send"
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </form>
          {displaySent ? (
            <small className="mt-6">{sent}</small>
          ) : (
            <small className="mt-10">{sent}</small>
          )}
          {}
        </ThemeProvider>
      )}
      {/* <ThemeProvider theme={themeMain}>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col"
          id="form"
        >
          <div className="flex flex-coll justify-center items-center mb-8 dark:text-indigo-50">
            <TextField
              id="outlined-basic"
              name="user_name"
              label="Full Name"
              variant="outlined"
              className="dark:text-indigo-50"
            />
          </div>
          <div className="flex flex-coll justify-center items-center mb-8">
            <TextField
              id="outlined-basic"
              name="user_email"
              label="Email Address"
              variant="outlined"
            />
          </div>
          <div className="flex flex-coll justify-center items-center mb-8">
            <TextField
              id="outlined-textarea"
              label="Your Message"
              placeholder="Placeholder"
              multiline
              name="message"
              size="large"
            />
          </div>
          <Button
            className="text-indigo-600"
            type="submit"
            value="Send"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </form>
        {displaySent ? (
          <small className="mt-6">{sent}</small>
        ) : (
          <small className="mt-10">{sent}</small>
        )}
        {}
      </ThemeProvider> */}
      <div className="mt-16 flex w-3/12 justify-between">
        <a
          href="https://github.com/urieskenasy"
          target="_blank"
          rel="noreferrer"
          className="text-5xl text-orange-600"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/uri-eskenasy-ab2680231/"
          target="_blank"
          rel="noreferrer"
          className="text-5xl text-blue-600"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  );
}
