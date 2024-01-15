import Sidebar from "@/app/(protected)/_components/Navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
