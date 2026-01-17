import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, MailIcon, LoaderIcon, ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";

function LoginOtpPage() {
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [step, setStep] = useState("email"); // "email" or "otp"
  const { sendOtp, verifyOtp, isSendingOtp, isVerifyingOtp } = useAuthStore();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const success = await sendOtp({ email: formData.email });
    if (success) {
      setStep("otp");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const success = await verifyOtp(formData);
    if (success) {
      // Redirect handled by auth store
    }
  };

  const handleResendOtp = async () => {
    await sendOtp({ email: formData.email });
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FORM CLOUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                {/* BACK BUTTON */}
                <div className="mb-4">
                  <Link to="/login" className="inline-flex items-center text-slate-400 hover:text-slate-200 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to Login
                  </Link>
                </div>

                {/* HEADING TEXT */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">Login with OTP</h2>
                  <p className="text-slate-400">
                    {step === "email" ? "Enter your email to receive OTP" : "Enter the OTP sent to your email"}
                  </p>
                </div>

                {/* FORM */}
                {step === "email" ? (
                  <form onSubmit={handleSendOtp} className="space-y-6">
                    {/* EMAIL INPUT */}
                    <div>
                      <label className="auth-input-label">Email</label>
                      <div className="relative">
                        <MailIcon className="auth-input-icon" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input"
                          placeholder="johndoe@gmail.com"
                          required
                        />
                      </div>
                    </div>

                    {/* SEND OTP BUTTON */}
                    <button className="auth-btn" type="submit" disabled={isSendingOtp}>
                      {isSendingOtp ? (
                        <LoaderIcon className="w-full h-5 animate-spin text-center" />
                      ) : (
                        "Send OTP"
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    {/* EMAIL DISPLAY */}
                    <div>
                      <label className="auth-input-label">Email</label>
                      <div className="relative">
                        <MailIcon className="auth-input-icon" />
                        <input
                          type="email"
                          value={formData.email}
                          className="input"
                          disabled
                        />
                      </div>
                    </div>

                    {/* OTP INPUT */}
                    <div>
                      <label className="auth-input-label">OTP</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.otp}
                          onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                          className="input pl-4"
                          placeholder="Enter 6-digit OTP"
                          maxLength="6"
                          required
                        />
                      </div>
                    </div>

                    {/* VERIFY BUTTON */}
                    <button className="auth-btn" type="submit" disabled={isVerifyingOtp}>
                      {isVerifyingOtp ? (
                        <LoaderIcon className="w-full h-5 animate-spin text-center" />
                      ) : (
                        "Verify & Login"
                      )}
                    </button>

                    {/* RESEND OTP */}
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isSendingOtp}
                        className="text-cyan-400 hover:text-cyan-300 text-sm disabled:opacity-50"
                      >
                        {isSendingOtp ? "Sending..." : "Resend OTP"}
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-6 text-center">
                  <Link to="/login" className="auth-link">
                    Login without OTP
                  </Link>
                </div>
              </div>
            </div>

            {/* FORM ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/login.png"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">Secure & Fast Login</h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Secure</span>
                    <span className="auth-badge">OTP Verified</span>
                    <span className="auth-badge">No Password</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginOtpPage;