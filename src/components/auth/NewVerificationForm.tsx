"use client";

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./CardWrapper";
import { PacmanLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormSucces } from "../FormSuccess";
import { FormError } from "../FormError";

const onlyOneRenderFunction = {
    case: false,
  };

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel={"Confirming your verification"}
      backButtonLabel={"Back to login"}
      backButtonHref={"/auth/login"}
    >
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        {!success && !error && (
          <>
            <PacmanLoader color="#ffde00" />

            <p className="text-center text-gray-400">Loading..</p>
          </>
        )}
      </div>

      <div className="flex items-center justify-center">
        <FormSucces message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
