import { Flex } from "@chakra-ui/react"

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => (
    <Flex
      p={6}
      justifyContent='center'
      alignItems='center'
      h='100vh'
      bgColor='#ECAB8B'
    >
      {children}
    </Flex>
  )

  export default PageLayout