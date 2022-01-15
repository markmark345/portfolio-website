import { Container, Box, Heading } from "@chakra-ui/react"

const Home = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#FFEEAD" p={3} mb={6} align="center" boxShadow={2}>
                Hi, I&apos;m  studying computer science 
            </Box>

            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Natapatchara Anuroje
                    </Heading>
                    <p>Student</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Home