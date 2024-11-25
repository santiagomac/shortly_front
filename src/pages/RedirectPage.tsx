import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { useParams } from "react-router";

const API_URL = import.meta.env.VITE_API_REDIRECT;

export const RedirectPage = () => {
  const { hash } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${hash}`);
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <Spinner />
    </div>
  );
};
