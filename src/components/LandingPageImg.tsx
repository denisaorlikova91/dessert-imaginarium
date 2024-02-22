import { Box, Image } from "@chakra-ui/react";

import img from '../img4.jpeg'

function LandingPageImg() {
    return(
        <Box boxSize='xl'>
            <Image src={img} alt='imaginary dessert' />
        </Box>
    );
}

export default LandingPageImg;
