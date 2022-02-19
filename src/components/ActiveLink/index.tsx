import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { ReactElement, cloneElement } from "react"

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
} 

export const ActiveLink = ({ children, activeClassName, ...rest }: ActiveLinkProps) => {

  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link prefetch {...rest}>

      {/*com o cloneElement do ReactJS é possível passar propriedades para o children dos components
        no código abaixo, eu passo o estilo CSS no className do children.
      */}
      { cloneElement( children, {className} )}
    </Link>
  )
}