import { TSideBarItems } from "@/types/types";
import { BadgeCentIcon, CarTaxiFrontIcon, Gauge, ShoppingBag, ShoppingCart, Users } from "lucide-react";

export const SideBarItems: TSideBarItems[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <Gauge size={20} />
    },
    {
        title: "test",
        path: "/test",
        icon: <Gauge size={20} />
    },
    {
        title: "Sale",
        path: "#sale",
        icon: <BadgeCentIcon size={20} />,
        subMenu: true,
        subMenuItems: [
            { title: "New Sale", path: "/new-sale" },
            { title: "Manage Sale", path: "/manage-sale" },
            { title: "Sales Terms List", path: "/sales-terms-list" },
        ]
    },
    {
        title: "Customer",
        path: "#customer",
        icon: <Users size={20} />,
        subMenu: true,
        subMenuItems: [
            { title: "Add Customer", path: "/add-customer" },
            { title: "Customer List", path: "/customer-list" },
        ]
    },
    {
        title: "Product",
        path: "#products",
        icon: <ShoppingBag size={20} />,
        subMenu: true,
        subMenuItems: [
            { title: "Add Category", path: "/add-category" },
            { title: "Category List", path: "/category-list" },
            { title: "Add Product", path: "/add-product" },
            { title: "Manage Product", path: "/manage-product" },
        ]
    },
    {
        title: "Purchase",
        path: "#purchase",
        icon: <ShoppingCart size={20} />,
        subMenu: true,
        subMenuItems: [
            { title: "Add Purchase", path: "/add-purchase" },
            { title: "Manage Purchase", path: "/manage-purchase" },
        ]
    },
]