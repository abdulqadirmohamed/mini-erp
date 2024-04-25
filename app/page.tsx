import { Button } from "@/components/ui/button";
import { Clapperboard, File, Image, Images, ShoppingBag, ShoppingCart, User, Users } from "lucide-react";
import RecentFiles from "./_components/RecentFiles";


export default async function Home() {
  const dashboard = [
    {
      title: "Products",
      link: "/videos",
      icon: <ShoppingBag size={20} />,
    },
    {
      title: "Customers",
      link: "/images",
      icon: <Users size={20} />,
    },
    {
      title: "Suppliers",
      link: "/docoments",
      icon: <User size={20} />,
    },
    {
      title: "Sales",
      link: "/docoments",
      icon: <ShoppingCart size={20} />,
    },
  ]

  return (
    <main className="">
      <div className="grid md:grid-cols-4 gap-4">
        {dashboard.map((item) => (
          <div className="bg-white border-[1px] flex justify-between items-center gap-4 py-5 px-6">
            <div className="flex items-center gap-4">
              <div className={`bg-secondary text-red-500 video p-2 rounded-full`}>
                {item.icon}
              </div>
              <div>
                <h1 className="text-sm">Total {item.title}</h1>
                <p className="text-gray-600 text-sm">12 {item.title}</p>
              </div>
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
