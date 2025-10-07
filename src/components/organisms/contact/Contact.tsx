import { SocialIcons } from "@components/molecules";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { emailJsConfig } from "@/config/env";
import { useState } from "react";

// Config centralizada de EmailJS
const EMAIL_JS_SERVICE_ID = emailJsConfig.serviceId as string | undefined;
const EMAIL_JS_TEMPLATE_ID = emailJsConfig.templateId as string | undefined;
const EMAIL_JS_PUBLIC_KEY = emailJsConfig.publicKey as string | undefined;

const validationSchema = Yup.object({
  name: Yup.string()
    .required("*El nombre es requerido")
    .min(2, "*El nombre debe tener al menos 2 caracteres"),
  email: Yup.string()
    .email("*Formato de email inválido")
    .required("*El email es requerido"),
  phone: Yup.string()
    .required("*El teléfono es requerido")
    .matches(/^[0-9+\-\s()]+$/, "*Formato de teléfono inválido"),
  message: Yup.string().optional().nullable(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const [message, setMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  // Función para verificar límite de envíos
  const checkSubmissionLimit = () => {
    const today = new Date().toDateString();
    const submissions = JSON.parse(localStorage.getItem('emailSubmissions') || '{}');
    
    if (submissions[today] >= 2) {
      return false;
    }
    return true;
  };

  // Función para registrar envío
  const recordSubmission = () => {
    const today = new Date().toDateString();
    const submissions = JSON.parse(localStorage.getItem('emailSubmissions') || '{}');
    submissions[today] = (submissions[today] || 0) + 1;
    localStorage.setItem('emailSubmissions', JSON.stringify(submissions));
  };


  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: any
  ) => {
    // Validate env configuration
    if (!EMAIL_JS_SERVICE_ID || !EMAIL_JS_TEMPLATE_ID || !EMAIL_JS_PUBLIC_KEY) {
      setSubmitting(false);
      setMessage({
        type: "error",
        text: "Falta configuración de EmailJS. Verifica variables de entorno.",
      });
      setTimeout(() => {
        setMessage({ type: null, text: "" });
      }, 5000);
      return;
    }
    // Verificar límite de envíos antes de procesar
    if (!checkSubmissionLimit()) {
      setSubmitting(false);
      setMessage({
        type: "error",
        text: "Has alcanzado el límite de 2 mensajes por día. Inténtalo mañana.",
      });
      setTimeout(() => {
        setMessage({ type: null, text: "" });
      }, 5000);
      return;
    }

    try {

      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message || "Sin mensaje",
        time: new Date().toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY);

      // Registrar el envío exitoso
      recordSubmission();
      
      setSubmitting(false);
      resetForm();
      setMessage({
        type: "success",
        text: "¡Mensaje enviado correctamente! Te contactaré pronto.",
      });

      setTimeout(() => {
        setMessage({ type: null, text: "" });
      }, 5000);
    } catch (error) {
      console.error("Error enviando el mensaje:", error);
      setSubmitting(false);
      setMessage({
        type: "error",
        text: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });

      setTimeout(() => {
        setMessage({ type: null, text: "" });
      }, 5000);
    }
  };

  return (
    <div id="contacto">
      <section
        className="hidden lg:flex flex-row w-full bg-(--color-acento)"
        style={{ padding: "80px" }}
      >
        <div className="flex flex-col align-center w-full gap-2">
          <div
            style={{ padding: "0 40px" }}
            className="flex justify-center h-[100px] top-0 left-0 right-0 bottom-0"
          >
            <img
              src="/assets/img/contactame.png"
              alt="My Services"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-[50px] flex justify-center h-[50px] top-0 left-0 right-0 bottom-0 ">
              <img
                src="/assets/img/whatsapp-phone-icon.png"
                alt="My Services"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">+57 301 864 7226</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-[50px] flex justify-center h-[50px] top-0 left-0 right-0 bottom-0 ">
              <img
                src="/assets/img/correo-electronico.png"
                alt="My Services"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">angiegalvanr.cm@gmail.com</h2>
          </div>
          <SocialIcons relative />
          <div className="flex justify-center items-center">
            <div className="w-[250px] flex justify-center h-[250px] top-0 left-0 right-0 bottom-0 ">
              <img
                src="/assets/img/logo-angie.png"
                alt="My Services"
                className="w-full h-full object-cover bg-(--color-blanco) rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full" style={{ padding: "40px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="w-full max-w-md space-y-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Escribe tu nombre aquí"
                    style={{ padding: "5px 20px" }}
                    className="w-full px-4 bg-(--color-blanco) py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  {errors.name && touched.name ? (
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  ) : (
                    <div style={{ marginBottom: "20px" }} />
                  )}
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    style={{ padding: "5px 20px" }}
                    className="w-full px-4 bg-(--color-blanco) py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  {errors.email && touched.email ? (
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  ) : (
                    <div style={{ marginBottom: "20px" }} />
                  )}
                </div>

                <div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    style={{ padding: "5px 20px" }}
                    className="w-full px-4 bg-(--color-blanco) py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  {errors.phone && touched.phone ? (
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  ) : (
                    <div style={{ marginBottom: "20px" }} />
                  )}
                </div>

                <div style={{ paddingBottom: "40px" }}>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Escribe aquí tu mensaje"
                    rows={6}
                    style={{
                      padding: "5px 20px",
                      resize: "none",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                    className="w-full h-[150px] px-4 bg-(--color-blanco) py-3 rounded-[20px] border-0 focus:outline-none focus:ring-2 focus:ring-rose-300 [&::-webkit-scrollbar]:hidden"
                  />
                </div>

                {/* Mensaje de estado */}
                {message.type && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-center transition-all duration-300 ${
                      message.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    padding: "0.7rem 1rem",
                    fontSize: "1.25rem",
                    color: "var(--color-blanco)",
                    backgroundColor: "#355C7D",
                  }}
                >
                  {isSubmitting ? "Enviando..." : "RESERVA UNA ASESORÍA"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <section className="flex lg:hidden z-100 flex-col items-center justify-center overflow-hidden w-full bg-(--color-acento)">
        <div className="w-full max-w-md p-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full space-y-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Escribe tu nombre aquí"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Escribe aquí tu mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Mensaje de estado */}
                {message.type && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-center transition-all duration-300 ${
                      message.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    padding: "1rem 2.5rem",
                    fontSize: "1.25rem",
                    color: "var(--color-blanco)",
                    backgroundColor: "var(--texto-hero)",
                  }}
                >
                  {isSubmitting ? "Enviando..." : "RESERVA UNA ASESORÍA"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};