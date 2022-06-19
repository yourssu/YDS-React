import React, { forwardRef, HtmlHTMLAttributes } from 'react'
import { ListProps } from '../../types'
import * as Styled from './List.styles'

type Props = ListProps & HtmlHTMLAttributes<HTMLDivElement>

const List = forwardRef<HTMLDivElement, Props>(({ subHeader, children, ...props }, ref) => {
  return (
    <Styled.Wrapper ref={ref} {...props}>
      <div className="container">
        {subHeader && <Styled.SubHeader>{subHeader}</Styled.SubHeader>}
        <Styled.ListItems>
          <div className="listItem-container">{children}</div>
        </Styled.ListItems>
      </div>
    </Styled.Wrapper>
  )
})

export { List }
