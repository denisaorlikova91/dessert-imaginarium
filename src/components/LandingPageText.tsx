import { Box, Heading, Flex, Text, Stack} from '@chakra-ui/react'
import CtaButton from './CtaButton';
import { ButtonStylesInterface } from './CtaButton';

const buttonStyles: ButtonStylesInterface = {
    lg: {
      size: 'lg',
      fontWeight: 'normal',
    },
    teal: {
      bgColor: 'teal'
    }
  }

function LandingPageText() {
    return(
        <Box ml={12} maxW='50%' >
            <Heading as='h1' size='4xl' fontWeight='normal' mb={3}>Dessert <br/> Imaginarium</Heading>
            <Box mb={9} maxW='60%'>
                <Text py={3}>
                Welcome to the world of AI generated dessert illustrations! This portfolio is under construction, but you're welcome to sign up for updates or to contact me if you want to work with me.
                </Text>
            </Box>
            <Stack spacing={6} direction='row' align='center'>
              <CtaButton
                  styles={{ ...buttonStyles.lg }}
                  >
                  Sign Up
                  </CtaButton>
          
                  <CtaButton
                  styles={{ ...buttonStyles.lg, ...buttonStyles.teal }}
                  >
                  Contact
                </CtaButton>
            </Stack>
        </Box>
    ); 
  }

export default LandingPageText;