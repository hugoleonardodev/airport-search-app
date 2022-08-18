/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @see https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/src/Link.tsx
 */
import clsx from 'clsx'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { styled } from '@mui/material/styles'

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({})

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart'> {
  to: NextLinkProps['href']
  linkAs?: NextLinkProps['as']
}

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(
  properties,
  reference
) {
  const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } = properties

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
    >
      <Anchor ref={reference} {...other} />
    </NextLink>
  )
})

export type LinkProps = {
  activeClassName?: string
  as?: NextLinkProps['as']
  href: NextLinkProps['href']
  linkAs?: NextLinkProps['as'] // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const AnchorLink = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(properties, reference) {
  const {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    linkAs: linkAsProperty,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    scroll,
    shallow,
    ...other
  } = properties

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  })

  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={reference} {...other} />
    }

    return <MuiLink className={className} href={href} ref={reference} {...other} />
  }

  const linkAs = linkAsProperty || as
  const nextjsProps = { to: href, linkAs, replace, scroll, shallow, prefetch, locale }

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={reference} {...nextjsProps} {...other} />
  }

  return <MuiLink component={NextLinkComposed} className={className} ref={reference} {...nextjsProps} {...other} />
})

export default AnchorLink
