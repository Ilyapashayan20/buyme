export type ModalProps = {
    title?: string,
    children?: React.ReactNode,
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClose: () => void
  }
  