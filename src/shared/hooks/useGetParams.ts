import { useParams } from 'next/navigation';

type ExtractedParams = { [key: string]: string | string[] | undefined | null };

export default function useGetParams(keys: string[]) {
  const params = useParams();
  const searchParams = new URLSearchParams(window.location.search);

  const extractedParams: ExtractedParams = {};

  keys.forEach((key) => {
    extractedParams[key] = params[key] || searchParams.get(key);
  });

  return extractedParams;
}
