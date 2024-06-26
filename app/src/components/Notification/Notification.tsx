'use client'
import { HTMLAttributes, Ref, forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../helpers/cn'
import { NotificationBody } from './Body'
import { NotificationContent } from './Content'
import { NotificationContext } from './Context'
import { NotificationDescription } from './Description'
import { NotificationFooter } from './Footer'
import { NotificationHeader } from './Header'
import { NotificationTitle } from './Title'

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onClose?: () => void
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const NotificationComponent = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, className, isOpen, onClose, position = 'bottom-right', ...props }, ref: Ref<HTMLDivElement>) => {
    useEffect(() => {
      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose && onClose()
        }
      }

      const handleClickOutsideModal = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.notification-body')) {
          onClose && onClose()
        }
      }

      if (isOpen) {
        document.addEventListener('keydown', handleEscapeKeyPress)
        document.addEventListener('mousedown', handleClickOutsideModal)
      }

      return () => {
        document.removeEventListener('keydown', handleEscapeKeyPress)
        document.removeEventListener('mousedown', handleClickOutsideModal)
      }
    }, [isOpen, onClose])
    return isOpen
      ? createPortal(
          <div {...props} className={cn('fixed inset-0 z-50 overflow-auto', className)} ref={ref}>
            <NotificationContext.Provider value={{ isOpen, onClose, position }}>
              {children}
            </NotificationContext.Provider>
          </div>,
          document.body,
        )
      : null
  },
)

NotificationComponent.displayName = 'Notification'

const Notification = Object.assign(NotificationComponent, {
  Header: NotificationHeader,
  Description: NotificationDescription,
  Title: NotificationTitle,
  Content: NotificationContent,
  Body: NotificationBody,
  Footer: NotificationFooter,
})

export { Notification }
