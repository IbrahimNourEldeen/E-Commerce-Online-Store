import type React from "react";
import { GoAlertFill } from "react-icons/go";

interface NewProps {
  setFormNumber: (value: number) => void;
  phone: string;
}

const VerifyingMessage: React.FC<NewProps> = ({ phone, setFormNumber }) => {
  const sendVerificationCode = (phone: string) => {
    const code = Math.floor(100000 + Math.random() * 900000);

    const message = `Your verification code is: ${code}`;

    const formattedPhone = phone.startsWith("+") ? phone : `+2${phone}`;

    const url = `https://wa.me/${formattedPhone.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const handleSubmit = (phone: string) => {
    sendVerificationCode(phone);
    setFormNumber(5);
  };
  return (
    <div className="mt-5 p-5  w-[25%]">
      <form
        action=""
        className=""
        onSubmit={() => {
          handleSubmit(phone);
        }}
      >
        <div className="max-w-96 mx-auto">
          <div className="flex  border-2 border-l-8 py-3 px-4 rounded-xl border-yellow-500 mb-5 w-full">
            <GoAlertFill className="text-yellow-500 text-5xl me-2 " />
            <p className="">
              We are unable to send you an SMS message at this time. Verify
              using WhatsApp instead.
            </p>
          </div>
        </div>
        <input
          type="submit"
          value="Verify using WhatsApp"
          className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl cursor-pointer"
        />
        <p className="">
          WhatsApp is a messaging and communication app that you can download on
          your device. By continuing, you are opting in to Amazon sending your
          OTP to your phone number on WhatsApp as opposed to SMS.
        </p>
      </form>
    </div>
  );
};

export default VerifyingMessage;
