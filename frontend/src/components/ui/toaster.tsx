import {
    ToastProvider,
    ToastViewport,
} from "@/components/ui/toast.tsx"

export function Toaster() {
    return (
        <ToastProvider>
            <ToastViewport />
        </ToastProvider>
    )
}