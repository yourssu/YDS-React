import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { ToastMessageProps } from '../../types'

export const ToastWrapper = styled.div`
  width: 100%;
  height: 100%;

  .toast-container {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 64px;
    align-items: center;
  }

  .padding--8 {
    width: 8px;
    height: 1px;
  }
`

export const Toast = styled.div<ToastMessageProps>`
  border-radius: 8px;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.toastBG};
  padding: 16px 24px;
  ${getTypoStyle(Typography.Body2)};
  color: ${({ theme }) => theme.color.textReserved};
  text-align: left;
  justify-content: center;
`
