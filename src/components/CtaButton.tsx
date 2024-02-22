import { Button } from "@chakra-ui/react";

export interface StyleProps {
    size?: 'md' | 'lg';
    bgColor?: 'teal'; 
    fontWeight?: 'normal';
  }
  
export  interface CtaButtonProps {
    children: React.ReactNode;
    styles: {
      size?: StyleProps["size"],
      bgColor?: StyleProps["bgColor"],
    };
  }
  
 export interface ButtonStylesInterface {
    lg: StyleProps;
    teal: StyleProps;
    fontWeight?: StyleProps;
  }
  
  const CtaButton = ({children, styles}: CtaButtonProps) => (
    <Button 
    {...styles}
  >
    {children}
  </Button>
  )

  export default CtaButton