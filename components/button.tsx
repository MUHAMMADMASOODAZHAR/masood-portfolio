import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5 gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.12)] active:translate-y-0 active:shadow-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600",
        outline:
          "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-950 dark:text-white hover:bg-blue-50/40 dark:hover:bg-blue-950/20 hover:border-slate-300 dark:hover:border-slate-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600",
        secondary:
          "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600",
        ghost:
          "hover:bg-slate-100 dark:hover:bg-slate-800/55 text-slate-700 dark:text-slate-300 focus-visible:ring-2 focus-visible:ring-blue-600",
        destructive:
          "bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-450 hover:bg-rose-100/50 dark:hover:bg-rose-950/40 focus-visible:ring-2 focus-visible:ring-rose-600",
        link:
          "text-blue-600 dark:text-blue-400 font-semibold bg-transparent hover:bg-transparent border-none p-0 h-auto cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 hover:underline",
      },
      size: {
        default: "h-[48px] px-6 rounded-[10px] text-sm",
        sm: "h-[44px] px-5 rounded-[10px] text-xs sm:text-sm",
        lg: "h-[50px] px-7 rounded-[10px] text-sm sm:text-base",
        icon: "size-10 rounded-[10px]",
        xs: "h-[36px] px-4 rounded-[10px] text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
