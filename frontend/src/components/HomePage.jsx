import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ReadingImg from "../assets/Reading.png";
import GrammarImg from "../assets/Grammar.png";
import VocabularyImg from "../assets/Vocabulary.png";
import IconUser from "../assets/icon1.png";
import IconIdea from "../assets/icon2.png";
import IconChart from "../assets/icon3.png";
import IconLogo from "../assets/icon4.png";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "login-success" | "signup-success"
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const modal = location.state?.modal;
    if (modal) {
      setModalType(modal.type || "");
      setUserName(modal.name || "");
      setShowModal(true);
      // clear state so refresh/back won't re-open the modal
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleContinue = () => {
    setShowModal(false);
    navigate("/coming-soon"); // change this later to your real destination
  };

  return (
    <div className={`relative min-h-screen bg-white text-gray-900 ${showModal ? "overflow-hidden" : ""}`}>
      <header>
        <div className="flex items-center justify-between py-3 pl-4 pr-4 max-w-full">
          <div className="flex items-center gap-1 px-15">
            <img src={IconLogo} alt="EnglishApp logo" className="h-6 w-6 pt-1" />
            <span className="font-semibold text-gray-900">EnglishApp</span>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#paths" className="hover:text-green-600">Learning Paths</a>
            <a href="#why" className="hover:text-green-600">Why Us</a>
          </nav>

          <div className="flex items-center gap-2.5 px-15">
            <Link to="/login" className="text-green-600 px-3 py-1.5 text-sm hover:bg-gray-50">Login</Link>
            <Link to="/signup" className="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-black hover:bg-green-600">Sign up</Link>
          </div>
        </div>
      </header>

      <main className={`w-full ${showModal ? "blur-sm" : ""}`}>
        {/* Hero */}
        <section className="w-full px-12">
          <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-green-400">
              Welcome to English Learning App
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-black py-4">
              Your ultimate destination to master the English language through
              interactive lessons, engaging content, and a supportive community.
            </p>
            <Link
              to="/signup"
              className="mx-auto mt-4 inline-flex items-center justify-center rounded-lg bg-green-500 px-5 py-2 text-sm font-medium text-white hover:bg-green-600"
            >
              Start Learning Now
            </Link>
          </div>
        </section>

        {/* Explore Our Learning Paths */}
        <section id="paths" className="w-full px-12">
          <h2 className="mt-8 text-center font-semibold text-2xl md:text-3xl">
            Explore Our Learning Paths
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Reading */}
            <article className="rounded-xl bg-white shadow-sm">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={ReadingImg}
                  alt="English Reading Essentials"
                  className="h-full w-full object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">English Reading Essentials</h3>
                <p className="mt-1 text-[13px] leading-snug text-gray-600">
                  Improve your comprehension and fluency with curated texts, from classic
                  literature to modern articles. Enhance your reading speed and vocabulary
                  simultaneously.
                </p>
              </div>
            </article>

            {/* Grammar */}
            <article className="rounded-xl bg-white shadow-sm">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={GrammarImg}
                  alt="Mastering English Grammar"
                  className="h-full w-full object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Mastering English Grammar</h3>
                <p className="mt-1 text-[13px] leading-snug text-gray-600">
                  Solidify your understanding of English sentence structure, parts of speech,
                  and punctuation. Interactive exercises and clear explanations make grammar easy.
                </p>
              </div>
            </article>

            {/* Vocabulary */}
            <article className="rounded-xl bg-white shadow-sm">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={VocabularyImg}
                  alt="Vocabulary Builder Pro"
                  className="h-full w-full object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Vocabulary Builder Pro</h3>
                <p className="mt-1 text-[13px] leading-snug text-gray-600">
                  Expand your lexicon with engaging exercises, themed word lists, and mnemonic
                  techniques. Learn new words and use them confidently in context.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Why Choose */}
        <section id="why" className="w-full px-12">
          <h2 className="mt-10 text-center text-2xl md:text-3xl font-semibold tracking-tight">
            Why Choose English-app?
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              icon: IconUser,
              title: "Personalized Learning",
              desc: "Tailored learning paths based on your current proficiency, progress, and individual learning goals to maximize your potential.",
            },{
              icon: IconIdea,
              title: "Interactive Lessons",
              desc: "Engage with dynamic lessons, quizzes, and games designed to make learning fun and effective, keeping you motivated every step of the way.",
            },{
              icon: IconChart,
              title: "Progress Tracking",
              desc: "Monitor your improvement with detailed analytics, performance reports, and milestone achievements, giving you clear insights into your growth.",
            }].map((item, i) => (
              <article key={i} className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 max-w-xs mx-auto text-[12px] leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-4 mt-12 pb-8">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} EnglishApp. All Rights Reserved.
          </div>
        </footer>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              {modalType === "login-success"
                ? `Welcome back${userName ? `, ${userName}` : ""}!`
                : `Account created${userName ? `, ${userName}` : ""}!`}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              You’ve successfully {modalType === "login-success" ? "logged in" : "signed up"}.
            </p>
            <button
              onClick={handleContinue}
              className="mt-6 w-full rounded-lg bg-green-500 py-2 text-white font-medium hover:bg-green-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
