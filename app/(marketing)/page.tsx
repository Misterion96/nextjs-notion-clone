import Footer from "@/app/(marketing)/_components/footer";
import Heroes from "@/app/(marketing)/_components/heroes";
import Heading from "./_components/heading";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <div
        className="
      flex flex-col items-center justify-center
      md:justify-start text-center gap-y-8 flex-1 px-6 pb-10
      "
      >
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}
