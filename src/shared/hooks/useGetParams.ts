import { useParams } from 'next/navigation';

type ExtractedParams = {
  [key: string]: string | string[] | number | undefined | null;
};

export default function useGetParams(keys: string[]) {
  const params = useParams();
  const searchParams = new URLSearchParams(window.location.search);

  const extractedParams: ExtractedParams = {};

  keys.forEach((key) => {
    const value = params[key] || searchParams.get(key);

    extractedParams[key] = !isNaN(Number(value)) ? Number(value) : value;
  });

  return extractedParams;
}
