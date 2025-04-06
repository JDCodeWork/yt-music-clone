import { BackgroundDecoration } from "@/components/home/BackgroundDecoration";
import { Sidebar } from "@/components/ui";

export default function Home() {
  return (
    <main className="bg-stone-950 h-full w-screen ">
      <BackgroundDecoration />
      <Sidebar />
      <div className="h-[2024px]"></div>
    </main>
  );
}
