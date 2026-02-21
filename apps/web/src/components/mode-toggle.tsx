import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { IconShadow } from "@tabler/icons-react"
import { Kbd } from "./ui/kbd"

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "d" && e.key !== "D") return
      e.preventDefault() 
      setTheme(theme === 'dark' ? "light" : "dark")
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [setTheme, theme])

  return (
    <Tooltip>
      <TooltipTrigger 
        render={
          <Button 
            variant={'ghost'} 
            size={'icon-lg'} 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <IconShadow className="size-6" />
          </Button>
        }
      />
      <TooltipContent>
        <div className="flex items-center gap-2">
          Alterar modo <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}