type Props = {
  originalUrl: string;
  isValidUrl: boolean;
  setOriginalUrl: (url: string) => void;
  setIsValidUrl: (valid: boolean) => void;
  setLoading: (loading: boolean) => void;
  setUrlShorted: (urlShorted: string) => void;
};
const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
const API_URL = import.meta.env.VITE_API_URL;

export const Shortened = ({
  originalUrl,
  isValidUrl,
  setOriginalUrl,
  setIsValidUrl,
  setLoading,
  setUrlShorted,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validUrl = regex.test(e.target.value);
    if (validUrl) {
      setOriginalUrl(e.target.value);
      setIsValidUrl(true);
      return;
    }
    setIsValidUrl(false);
  };

  const handleClick = () => {
    fetch(`${API_URL}?originalUrl=${originalUrl}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUrlShorted(data.shortUrl);
      });
  };

  return (
    <div className="flex flex-col lg:w-1/2 mx-auto gap-y-2">
      <input
        type="text"
        placeholder="Enter you long URL here"
        className="border-transparent border rounded-md p-2 w-full focus:outline-none"
        onChange={handleChange}
      />
      <button
        className={
          originalUrl.trim() === "" || !isValidUrl
            ? "bg-gray-600 text-white font-semibold border rounded-lg w-full p-2"
            : "bg-blue-500 text-white font-semibold border rounded-lg w-full p-2"
        }
        disabled={originalUrl.trim() === "" || !isValidUrl}
        onClick={handleClick}
      >
        Shorten URL
      </button>
      <p className="text-indigo-900">Example: https://wwww.google.com</p>
    </div>
  );
};
