interface ErrorMessageFormProps {
  errorMessage: string;
}

export function ErrorMessageForm({ errorMessage }: ErrorMessageFormProps) {
  return <p className="absolute bottom-[-45%] left-0 py-1 text-error-validation">{errorMessage}</p>;
}
