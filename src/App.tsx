import { useState } from "react";
import { Shortened } from "./components/Shortened";
import { Spinner } from "./components/Spinner";
import { UrlShortened } from "./components/UrlShortened";
import {Sun} from "lucide-react";
import {useDarkMode} from "./hooks/UseDarkMode.tsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [urlShorted, setUrlShorted] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(urlShorted);
  // };
  
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <>
      <main className="flex flex-col dark:bg-slate-900 justify-center relative items-center h-full p-8 lg:p-0">
        <div
            className="m-2 p-2 rounded-lg border dark:bg-white
            bg-slate-900
            absolute top-5 right-5 text-white dark:text-slate-900
            w-10 flex items-center justify-center hover:cursor-pointer dark:hover:text-slate-900"
            onClick={() => setIsDarkMode(!isDarkMode)}>
          <Sun size={20} className="font-bold"/>
        </div>
        {!loading && (
            <div className="w-full lg:w-1/2 lg:p-8 rounded-lg">
              <div className="flex flex-col justify-center items-center pb-5">
                <h1
                    className="b-2 bg-gradient-to-r from-indigo-500 to-blue-500
              bg-clip-text text-5xl lg:text-6xl font-bold loading-tight tracking-tighter text-transparent pb-2"
                >
                  Shortlys.app
                </h1>
                <p className="font-semibold text-center lg:text-md dark:text-white">
                  Enter a long URL to get a shortened version
                </p>
              </div>
              <Shortened
                  originalUrl={originalUrl}
                  isValidUrl={isValidUrl}
                  setOriginalUrl={setOriginalUrl}
                  setIsValidUrl={setIsValidUrl}
                  setLoading={setLoading}
                  setUrlShorted={setUrlShorted}
              />
              {urlShorted && <UrlShortened urlShorted={urlShorted}/>}
            </div>
        )}
        {loading && <Spinner/>}
        <footer className="absolute bottom-5">
          <a
              href="https://santiagomac.github.io/social-links"
              className="text-blue-500"
              target="_blank"
          >
            @santiagomac 💻
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;
