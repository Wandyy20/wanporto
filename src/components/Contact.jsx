import { useMemo, useState, useEffect } from "react";
import { profile } from "../data";

const FORM_ENDPOINT = "https://formspree.io/f/xovkqoab";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);

  const socials = useMemo(() => {
    const map = {};
    (profile.socials || []).forEach((s) => (map[s.label?.toLowerCase()] = s.href));
    return {
      instagram: map["instagram"] || "https://www.instagram.com/wandy_20lim/",
      linkedin : map["linkedin"] || "https://www.linkedin.com/in/wandy-reynand-lim-0b491b384/",
    };
  }, []);

  const disabled = !name || !email || !/^\S+@\S+\.\S+$/.test(email) || !msg || loading;

  const onSubmit = async (e) => {
    e.preventDefault();
    setSent(null); 
    try {
      setLoading(true);
      const fd = new FormData(e.currentTarget);
      fd.set("_subject", "New message from portfolio");
      fd.set("_replyto", email);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        setSent('success');
        setName(""); setEmail(""); setMsg("");
      } else {
        setSent('error');
      }
    } catch (error) {
        console.error("Form submission failed:", error);
        setSent('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(null), 3000); 
    return () => clearTimeout(t);
  }, [sent]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,.6)] p-6 md:p-10">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent pb-1">Contact Me!</h2>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <div className="mt-3 md:mt-5 rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 to-emerald-500/30">
            <div className="rounded-2xl bg-slate-900/40 border border-white/10 p-5 md:p-6">
              <p className="text-white/80 leading-relaxed">
                I’d love to hear what you’re building—whether it’s a quick idea or a full project.
                Send a message using the form, or reach me through the links below.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <SocialBtn href={socials.instagram} label="Instagram"><IGIcon /></SocialBtn>
                <SocialBtn href={socials.linkedin} label="LinkedIn"><LinkedInIcon /></SocialBtn>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} action={FORM_ENDPOINT} method="POST" className="w-full space-y-4">
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="hidden" name="_replyto" value={email} />
          <Field label="Full Name">
            <input name="name" value={name} onChange={(e)=>setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent outline-none text-white placeholder-white/40" required />
          </Field>
          <Field label="Email Address">
            <input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none text-white placeholder-white/40" required />
          </Field>
          <Field label="Message" textarea>
            <textarea name="message" rows={5} value={msg} onChange={(e)=>setMsg(e.target.value)}
                      placeholder="Tell me a bit about your idea..."
                      className="w-full bg-transparent outline-none text-white placeholder-white/40 resize-y" required />
          </Field>
          <button type="submit" disabled={disabled}
            className="w-full inline-flex items-center justify-center gap-3 rounded-xl
                      bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950
                      font-semibold px-5 py-3.5 shadow-lg shadow-emerald-600/10
                      disabled:opacity-40 disabled:cursor-not-allowed
                      hover:shadow-xl hover:shadow-emerald-600/20 transition">
            {loading ? <LoadingSpinner /> : <SendIcon />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {sent && (
        <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-[60]">
          <div 
            className={`rounded-xl border px-4 py-2 text-white shadow-lg flex items-center gap-2 ${
              sent === 'success' 
                ? 'bg-emerald-600/90 border-emerald-400/50' 
                : 'bg-red-600/90 border-red-400/50'
            }`}
          >
            {sent === 'success' ? <SuccessIcon /> : <ErrorIcon />}
            {sent === 'success' ? "Message sent successfully! Thank you." : "Failed to send message. Please try again later."}
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute -top-14 -right-20 h-44 w-44 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-16 -left-24 h-48 w-48 bg-emerald-500/20 blur-3xl rounded-full" />
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block rounded-xl border border-white/10 bg-slate-900/30 px-4 py-3 focus-within:border-cyan-400/40 transition">
      <span className="block text-xs text-white/60 mb-1">{label}</span>
      {children}
    </label>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-white/10
                 bg-white/5 hover:bg-white/10 transition px-4 py-3 w-max shadow-sm
                 hover:border-cyan-400/30"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg
                       bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 ring-1 ring-white/10 text-white/80">
        {children}
      </span>
      <span className="font-medium text-white">{label}</span>
    </a>
  );
}

function IGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 4.8A5.2 5.2 0 1 0 17.2 12 5.2 5.2 0 0 0 12 6.8m6-0.9a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 5.9Z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5M4.75 8.5h4.38V20H4.75zM13 8.5h4.19v1.57h.06a4.6 4.6 0 0 1 4.14-2.27c4.42 0 5.23 2.9 5.23 6.67V20h-4.38v-5.2c0-1.24 0-2.83-1.73-2.83s-2 1.35-2 2.75V20H13z"/>
    </svg>
  );
}

function LoadingSpinner() {
    return (
        <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );
}

function SendIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.64 19.46l-1.34-5.35a.86.86 0 0 1 .4-.89l15.1-6.17a.86.86 0 0 1 1.09.43.86.86 0 0 1-.43 1.09L4.93 18.91a.86.86 0 0 1-.29.17.86.86 0 0 1-.13.38zM6.8 14.1l-1.3-3.69 11.2-4.57-4.57 11.2-3.69-1.3z"/>
        </svg>
    );
}

function SuccessIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
    );
}

function ErrorIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    );
}