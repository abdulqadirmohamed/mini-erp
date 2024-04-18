import { Button } from "@/components/ui/button";
import { Clapperboard, File, Image, Images } from "lucide-react";
import RecentFiles from "./_components/RecentFiles";


export default async function Home() {
  const dashboard = [
    {
      title: "Products",
      link: "/videos",
      icon: <Clapperboard size={20} />,
      totalFiles: 34,
      usage: '15gb',
    },
    {
      title: "Customers",
      link: "/images",
      icon: <Images size={20} />,
      totalFiles: 25,
      usage: '200mb',
    },
    {
      title: "Suppliers",
      link: "/docoments",
      icon: <File size={20} />,
      totalFiles: 10,
      usage: '50mb',
    },
    {
      title: "Sales",
      link: "/docoments",
      icon: <File size={20} />,
      totalFiles: 10,
      usage: '50mb',
    },
  ]

  return (
    <main className="">
      <div className="grid md:grid-cols-4 gap-4">
        {dashboard.map((item) => (
          <div className="bg-white border-[1px] flex justify-between items-center gap-4 py-4 px-6">
            <div className="flex items-center gap-4">
              <div className={`bg-blue-200 video ${item.title} p-2 rounded-md`}>
                {item.icon}
              </div>
              <div>
                <h1>Total {item.title}</h1>
                <p className="text-gray-600 text-sm">{item.totalFiles} {item.title}</p>
              </div>
            </div>
            <div className="text-right">
              <h1 className="font-semibold text-blue-700 uppercase">
                {item.usage}
              </h1>
              <span className="text-sm text-gray-600">Total size</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <RecentFiles />
          </div>
          <div>

          </div>

        </div>
      </div>

    </main>
  );
}
