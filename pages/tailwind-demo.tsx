import Head from "next/head";

export default function TailwindDemo(): JSX.Element {
  return (
    <>
      <Head>
        <title>Tailwind Demo</title>
        <meta name="description" content="Tailwind CSS demo page" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-lg">
            <div className="rounded-2xl bg-white p-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tailwind CSS is configured!
              </h1>
              <p className="mt-3 max-w-2xl text-gray-600">
                This page showcases a few utility classes. Edit it at
                <code className="ml-2 rounded bg-gray-100 px-2 py-1 text-sm">pages/tailwind-demo.tsx</code>.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  Success badge
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Info badge
                </span>
                <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-800">
                  Alert badge
                </span>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {["Card One", "Card Two", "Card Three"].map((title) => (
                  <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus in orci.
                    </p>
                    <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Action
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-600">
            Try adding classes like <code className="rounded bg-gray-100 px-2 py-1 text-sm">text-red-600</code>,
            <code className="ml-1 rounded bg-gray-100 px-2 py-1 text-sm">p-4</code>, or
            <code className="ml-1 rounded bg-gray-100 px-2 py-1 text-sm">shadow-lg</code> to elements.
          </div>
        </section>
      </main>
    </>
  );
}


