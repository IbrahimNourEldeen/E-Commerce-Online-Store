import { useState } from "react";
import { GoAlertFill } from "react-icons/go";

interface VerifyingMessageProps {
  setFormNumber: (value: number) => void;
  phone: string;
  country: string;
  setLogedIn: (value: boolean) => void;
}

const VerifyingMessage: React.FC<VerifyingMessageProps> = ({
  phone,
  country,
  setFormNumber,
  setLogedIn,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [otp, setOtp] = useState<string>("");
  const [sentCode, setSentCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const sendVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const message = `Your verification code is: ${code}`;
    const formattedPhone = phone.startsWith("+") ? phone : `+2${phone}`;
    const url = `https://wa.me/${formattedPhone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    setSentCode(code);
    setStep(2);
  };

  const handleFirstSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendVerificationCode();
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== sentCode) {
      setError("Incorrect OTP. Please try again.");
      return;
    }
    setLogedIn(true);
  };

  return (
    <>
      {step === 1 ? (
        <div className="mt-5 p-5 w-[25%]">
          <form onSubmit={handleFirstSubmit}>
            <div className="max-w-96 mx-auto">
              <div className="flex border-2 border-l-8 py-3 px-4 rounded-xl border-yellow-500 mb-5 w-full">
                <GoAlertFill className="text-yellow-500 text-5xl me-2" />
                <p>
                  We are unable to send you an SMS message at this time. Verify
                  using WhatsApp instead.
                </p>
              </div>
              <input
                type="submit"
                value="Verify using WhatsApp"
                className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl cursor-pointer"
              />
              <p className="text-sm">
                WhatsApp is a messaging and communication app that you can
                download on your device. By continuing, you are opting in to
                Awfar sending your OTP to your phone number via WhatsApp.
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-5 p-5 border border-gray-300 rounded-md w-[25%]">
          <h3 className="text-lg font-semibold mb-2 tracking-wide">
            Verify with WhatsApp
          </h3>
          <form onSubmit={handleOtpSubmit}>
            <div className="max-w-sm mx-auto">
              <div className="mb-2">
                <span>
                  {country}
                  {phone}
                </span>
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 cursor-pointer ms-2"
                  onClick={() => setFormNumber(1)}
                >
                  Change
                </button>
              </div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  setError("");
                }}
                placeholder="Enter the 6-digit code"
                className="flex outline-none w-full items-center text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md px-3 py-1 shadow-sm"
              />
              {error && (
                <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>
              )}
            </div>
            <input
              type="submit"
              value="Verify"
              className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl cursor-pointer"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default VerifyingMessage;
