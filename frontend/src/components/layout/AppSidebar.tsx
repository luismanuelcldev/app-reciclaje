import { Home, FileText, MapPin, MessageSquare, User } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar,.tsx"
import { Link } from "react-router-dom"

const items = [
    {
        title: "Inicio",
        url: "/",
        icon: Home,
    },
    {
        title: "Materiales",
        url: "/materiales",
        icon: FileText,
    },
    {
        title: "Puntos de Reciclaje",
        url: "/puntos-reciclaje",
        icon: MapPin,
    },
    {
        title: "Foro",
        url: "/foro",
        icon: MessageSquare,
    },
    {
        title: "Perfil",
        url: "/perfil",
        icon: User,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navegación</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}