'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={[
        'rounded-full p-2 transition-colors duration-200',
        isDark
          ? 'bg-white/10 hover:bg-white/20'
          : 'bg-black/10 hover:bg-black/20',
      ].join(' ')}
    >
      {isDark ? (
        <Moon size={16} className="text-white/70" />
      ) : (
        <Sun size={16} className="text-[var(--text-primary)]" />
      )}
    </button>
  )
}
