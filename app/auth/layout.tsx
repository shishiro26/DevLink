import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SideDesign from "@/app/auth/_components/Side-design";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className={"m-3 flex justify-around items-center "}>
        <section>
          <div
            className={
              "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16"
            }
          >   
            <SideDesign />
            <div>{children}</div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
