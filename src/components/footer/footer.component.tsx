import {FC} from "react";
import {Section} from '@/components'

export const Footer: FC = () => {
  const currentYear = new Date().getUTCFullYear()
  return (
    <Section>
      <p>@{`${currentYear} - Claudia Lecurieux - Tous droits réservés`}</p>
    </Section>
  )
}