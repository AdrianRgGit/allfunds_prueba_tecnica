import { FC } from "react";
import { ErrorProps } from "../../types/pages/error";

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <main className="flex h-[95vh] items-center justify-center">
      <p className="rounded bg-white p-8 text-3xl shadow">
        Ha ocurrido un error:{" "}
        <span className="font-bold text-red-500">{error}</span>
      </p>
    </main>
  );
};

export default Error;
