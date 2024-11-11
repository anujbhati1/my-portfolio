"use client";
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { PiCopySimpleLight, PiWhatsappLogoThin } from "react-icons/pi";

interface CopyStatus {
  message: string;
  type: "success" | "error" | "idle";
}

function ContactMe() {
  const email = "anujbhati7488@gmail.com";
  const [copyStatus, setCopyStatus] = useState<CopyStatus>({
    message: "",
    type: "idle",
  });

  const successMessage = "Copied to clipboard!";
  const errorMessage = "Unable to copy at the moment!";

  const handleCopyEmail = async (): Promise<void> => {
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        setCopyStatus({ message: successMessage, type: "success" });
        setTimeout(() => setCopyStatus({ message: "", type: "idle" }), 2000);
        return;
      } catch (err) {
        console.error("Failed to copy with Clipboard API:", err);
      }
    }

    // Fallback: Create temporary textarea element
    try {
      // Create temporary element
      const textArea = document.createElement("textarea");
      textArea.value = email;

      // Make it invisible
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);

      // Handle iOS specifics
      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        textArea.contentEditable = "true";
        textArea.readOnly = false;

        const range = document.createRange();
        range.selectNodeContents(textArea);

        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
          textArea.setSelectionRange(0, email.length);
        }
      } else {
        textArea.select();
      }

      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopyStatus({ message: successMessage, type: "success" });
      setTimeout(() => setCopyStatus({ message: "", type: "idle" }), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopyStatus({ message: errorMessage, type: "error" });
      setTimeout(() => setCopyStatus({ message: "", type: "idle" }), 2000);
    }
  };

  const contactMeOnWhatsapp = () => {
    const whatsappUrl = `https://wa.me/919617432163`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-7 items-center justify-center">
      <button
        onClick={contactMeOnWhatsapp}
        className="text-[#7b4ae2] flex items-center justify-center gap-3 border-[0.5px] border-[#7b4ae2] px-4 py-2 rounded-xl"
      >
        <PiWhatsappLogoThin size={30} color="#7b4ae2" />
        <p className="text-xl font-semibold">Let&apos;s talk!</p>
      </button>
      <div className="text-[#7b4ae2] flex flex-col items-center space-y-2">
        <BsSend size={20} color="#7b4ae2" />
        <div>E-mail:</div>
        <div className="text-white/50">anujbhati7488@gmail.com</div>
        <button onClick={handleCopyEmail}>
          <PiCopySimpleLight size={20} color="#7b4ae2" />
        </button>
        <div>
          {copyStatus.message ? (
            <p className="text-xs font-normal">{copyStatus.message}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
