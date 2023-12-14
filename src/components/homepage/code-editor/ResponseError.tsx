import Image from 'next/image';
import { Button } from '@/components/shared/Button';
import { dictionary } from '@/libs/en';

interface ResponseErrorProps {
  errorMessage: string;
}

const handleClearLocalStorageCachedData = () => {
  localStorage.clear();
  window.location.reload();
};

export default function ResponseError({ errorMessage }: ResponseErrorProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <Image src="/beaver-response-error.png" alt={dictionary.codeEditor.error.altImage} width={400} height={300} />
      <p className="text-center text-xl text-teal-500">{errorMessage}</p>
      <Button intent="secondary" onClick={handleClearLocalStorageCachedData}>
        {dictionary.codeEditor.error.button}
      </Button>
    </div>
  );
}
