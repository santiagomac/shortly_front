type Props = {
  urlShorted: string;
};

export const UrlShortened = ({ urlShorted }: Props) => {
  return (
    <div className="flex flex-col items-center h-full pt-4 gap-x-1">
      <div className="flex justify-start lg:w-1/2 pb-2">
        <h2 className="font-bold text-2xl lg:text-3xl text-blue-500">
          Shortened URL:
        </h2>
      </div>
      <p className="border border-transparent p-3 rounded-lg bg-white lg:w-1/2 text-center text-lg">
        {urlShorted}
      </p>
      {/* <button
        className="border border-blue-500/50 p-2 rounded-lg hover:bg-blue-500 hover:cursor-pointer hover:text-white"
        onClick={handleCopy}
      >
        <Clipboard />
      </button> */}
    </div>
  );
};
