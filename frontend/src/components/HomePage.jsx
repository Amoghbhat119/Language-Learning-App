import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white text-xs font-bold">
              E
            </span>
            <span className="font-semibold">EnglishApp</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login" className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">Login</Link>
            <Link to="/signup" className="rounded-lg bg-green-500 px-3 py-1.5 text-sm text-white hover:bg-green-600">Sign up</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
            <h1 className="text-2xl font-semibold text-green-700 md:text-3xl">
              Welcome to English Learning App
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-green-700/80">
              Your ultimate destination to master the English language through interactive lessons,
              engaging content, and a supportive community.
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
        <section id="paths" className="mx-auto max-w-6xl px-4">
          <h2 className="mt-8 text-center text-lg font-semibold">Explore Our Learning Paths</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <article className="rounded-xl bg-white shadow-sm">
              <div
                role="img"
                aria-label="English Reading Essentials illustration placeholder"
                className="h-36 w-full bg-gray-200"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">English Reading Essentials</h3>
                <p className="mt-1 text-[11px] leading-snug text-gray-600">
                  Improve your comprehension through interactive stories and focused exercises.
                  Enhance your reading speed and vocabulary simultaneously.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="rounded-xl bg-white shadow-sm">
              <div
                role="img"
                aria-label="Mastering English Grammar illustration placeholder"
                className="h-36 w-full bg-gray-200"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Mastering English Grammar</h3>
                <p className="mt-1 text-[11px] leading-snug text-gray-600">
                  Solidify your understanding of sentence structures, tenses, and clauses with
                  clear explanations and practical exercises.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="rounded-xl bg-white shadow-sm">
              <div
                role="img"
                aria-label="Vocabulary Builder Pro illustration placeholder"
                className="h-36 w-full bg-gray-200"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Vocabulary Builder Pro</h3>
                <p className="mt-1 text-[11px] leading-snug text-gray-600">
                  Expand your vocabulary with themed word lists, context examples, and spaced
                  repetition practice to build confidence.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Why Choose */}
        <section id="why" className="mx-auto max-w-6xl px-4">
          <h2 className="mt-8 text-center text-lg font-semibold">Why Choose English-app?</h2>

          <div className="mt-4 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5"/></svg>
              </div>
              <h3 className="text-sm font-semibold">Personalized Learning</h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-600">
                Tailored learning paths crafted to suit your goals, progress, and individual potential.
              </p>
            </div>

            <div className="rounded-xl p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6H5a1 1 0 0 1 0-2h6V3a1 1 0 0 1 1-1"/></svg>
              </div>
              <h3 className="text-sm font-semibold">Interactive Lessons</h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-600">
                Engage with hands-on activities, quizzes, and tasks that make learning effective and fun.
              </p>
            </div>

            <div className="rounded-xl p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m9-5a1 1 0 0 0-1 1v3.382l-2.105 2.106a1 1 0 1 0 1.414 1.414l2.4-2.4A2 2 0 0 0 13 11V8a1 1 0 0 0-1-1"/></svg>
              </div>
              <h3 className="text-sm font-semibold">Progress Tracking</h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-600">
                Visualize your growth with clear milestones, analytics, and personalized insights.
              </p>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-8 max-w-6xl px-4 pb-8">
          <div className="rounded-xl  text-center text-xs text-gray-500">
            © {new Date().getFullYear()} EnglishApp. All Rights Reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
