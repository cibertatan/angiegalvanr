import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-[90vw] lg:max-w-[70vw] w-full max-h-[80vh] relative overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="bg-gradient-to-r from-[#355C7D] to-[#2c4a63] text-white relative"
                style={{ padding: "20px 25px" }}
              >
                <h2 className="text-2xl font-bold text-center">
                  Política de protección de datos personales, términos y
                  condiciones:
                </h2>
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute cursor-pointer top-4 right-4 z-10 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div
                className="flex-1 overflow-y-auto "
                style={{ padding: "20px 25px" }}
              >
                <div
                  className="space-y-6 text-gray-700"
                  style={{ marginBottom: "20px" }}
                >
                  <div
                    className="bg-gray-50 rounded-lg border-l-4 border-[#355C7D]"
                    style={{ padding: "10px 15px", marginBottom: "20px" }}
                  >
                    <p className="text-sm leading-relaxed font-medium text-gray-800">
                      Al diligenciar este formulario, autorizo de manera libre, previa,
                      expresa e informada a{" "}
                      <strong>Angie Galván R</strong> para recolectar, almacenar, usar,
                      circular y tratar mis datos personales con la finalidad de:
                    </p>
                  </div>

                  <div
                    className="space-y-4"
                    style={{ marginBottom: "20px" }}
                  >
                    <div
                      className="flex items-start space-x-3"
                      style={{ marginBottom: "10px" }}
                    >
                      <div
                        className="w-2 h-2 bg-[#355C7D] rounded-full mt-2 flex-shrink-0"
                        style={{ marginTop: "7px", marginRight: "5px" }}
                      ></div>
                      <p className="text-sm leading-relaxed">
                        <strong>Enviarme información</strong> sobre productos,
                        servicios, promociones, descuentos, eventos y contenidos de
                        valor relacionados con su marca.
                      </p>
                    </div>

                    <div
                      className="flex items-start space-x-3"
                      style={{ marginBottom: "10px" }}
                    >
                      <div
                        className="w-2 h-2 bg-[#355C7D] rounded-full mt-2 flex-shrink-0"
                        style={{ marginTop: "7px", marginRight: "5px" }}
                      ></div>
                      <p className="text-sm leading-relaxed">
                        <strong>Realizar seguimiento comercial</strong> y brindar
                        atención personalizada.
                      </p>
                    </div>

                    <div
                      className="flex items-start space-x-3"
                      style={{ marginBottom: "10px" }}
                    >
                      <div
                        className="w-2 h-2 bg-[#355C7D] rounded-full mt-2 flex-shrink-0"
                        style={{ marginTop: "7px", marginRight: "5px" }}
                      ></div>
                      <p className="text-sm leading-relaxed">
                        <strong>Contactarme</strong> a través de correo electrónico,
                        mensajes de texto, llamadas telefónicas y otros medios
                        digitales.
                      </p>
                    </div>
                  </div>

                  <div
                    className="bg-blue-50 p-4 rounded-lg"
                    style={{ padding: "10px", marginBottom: "10px" }}
                  >
                    <p className="text-sm leading-relaxed">
                      La información recolectada será tratada de forma{" "}
                      <strong>confidencial y segura</strong>. Como titular de la
                      información, tengo derecho a conocer, actualizar y rectificar mis
                      datos personales, así como a solicitar la eliminación de los
                      mismos o revocar la autorización otorgada, de acuerdo con la{" "}
                      <strong>Ley 1581 de 2012</strong>.
                    </p>
                  </div>

                  <div
                    className="bg-gray-50 p-4 rounded-lg"
                    style={{ padding: "10px", marginBottom: "10px" }}
                  >
                    <p className="text-sm leading-relaxed">
                      Para ejercer mis derechos o consultar la política completa de
                      tratamiento de datos, puedo escribir al correo{" "}
                      <span className="font-semibold text-[#355C7D]">
                        angiegalvanr.cm@gmail.com
                      </span>{" "}
                      o comunicarme al{" "}
                      <span className="font-semibold text-[#355C7D]">
                        +57 3138283662
                      </span>
                      .
                    </p>
                  </div>

                  <div
                    className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300"
                    style={{ padding: "10px", marginBottom: "10px" }}
                  >
                    <p className="text-sm leading-relaxed">
                      <strong>
                        Angie Galván R no compartirá, venderá ni cederá mis datos
                        personales a terceros sin mi autorización expresa
                      </strong>
                      , salvo obligación legal.
                    </p>
                  </div>

                  <div
                    className="bg-[#355C7D] text-white p-4 rounded-lg"
                    style={{ padding: "10px", marginBottom: "10px" }}
                  >
                    <p className="text-sm leading-relaxed font-medium">
                      Al hacer clic en "Acepto", manifiesto que he leído y comprendido
                      esta política y autorizo el tratamiento de mis datos personales
                      para los fines aquí descritos.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
