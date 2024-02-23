import { Box, Heading, Text, Stack, Button} from '@chakra-ui/react'
import SignUp from './SignUp';

  export interface LandingPageTextProps {
    onClick: () => void;
    }

function LandingPageText({onClick}: LandingPageTextProps) {

    return(
        <Box ml={12} maxW='50%' >
            <Heading as='h1' size='4xl' fontWeight='normal' mb={3}>Dessert <br/> Imaginarium</Heading>
            <Box mb={6} maxW='60%'>
                <Text py={3}>
                Welcome to the world of AI generated dessert illustrations! This portfolio is under construction, but you're welcome to sign up for updates or to contact me if you want to work with me.
                </Text>
            </Box>
            <Stack spacing={6} direction='row' align='center'>
                <SignUp />
                <Button onClick={() => alert('Email me test')} colorScheme='teal' size='lg'>
                  Email Me
                </Button>
            </Stack>        
          </Box>
    ); 
  }

export default LandingPageText;