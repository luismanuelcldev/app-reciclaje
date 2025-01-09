import { toast } from "sonner"

type ToastProps = {
    title?: string
    description?: string
    variant?: "default" | "destructive"
    className?: string
}

export const useToast = () => {
    const showToast = ({
        description,
        className = "",
    }: ToastProps) => {
        toast(description, {
            className: `${className}`,
        })
    }

    return { toast: showToast }
}

export { toast }

export const showToast = {
    success: (message: string) => {
        toast(message, {
            className: "bg-eco-primary text-white",
        })
    },
    error: (message: string) => {
        toast(message, {
            className: "bg-destructive text-destructive-foreground",
        })
    },
    info: (message: string) => {
        toast(message, {
            className: "bg-blue-500 text-white",
        })
    },
    warning: (message: string) => {
        toast(message, {
            className: "bg-yellow-500 text-white",
        })
    },
}