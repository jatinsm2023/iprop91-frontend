import { Button } from "@material-tailwind/react";

export default function ButtonDefault({btnname,onclick,bgcolor}) {
  return (
    <>
      <Button className={`rounded-full w-full normal-case font-thin m-2 shadow-md ${bgcolor}`} onClick={onclick}>{btnname}</Button>
    </>
  );
}
