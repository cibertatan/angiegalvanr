import { SocialIcons } from '@components/molecules'

export function Footer() {
  return (
    <footer>
      <div className="border-t-[2px] border-[var(--color-blanco)] py-[120px] w-full" style={{paddingTop: '10px', paddingBottom: '20px'}}>
        <SocialIcons />
        <div className="text-sm italic text-[var(--color-principal)] font-[400]">
          Copyright © Angie Galván R - Community Manager 2023
        </div>
      </div>
    </footer>
  )
} 