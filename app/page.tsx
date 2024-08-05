import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className={'w-full'}>
      <h1>Home page</h1>
        <Button variant={'outline'}>
            Click me
        </Button>
    </div>
  );
}
