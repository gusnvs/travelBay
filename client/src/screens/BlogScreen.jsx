import {
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack,
    Spinner,
    Alert,
    Image,
    Heading,
    Divider,
    Link,
    Spacer,
    Text,
    Flex,
    Box,
    VStack,
    Button
} from '@chakra-ui/react';
import { Link as ReactLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogPostByCategory } from '../redux/actions/blogPostActions';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';


export const BlogScreen = () => {

    const { categoy } = useParams();

    const blogPostInfo = useSelector((state) => state.blogPosts);
    const { blogPosts, loading, error, pageTitle } = blogPostInfo;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getBlogPostByCategory(categoy));
        window.scroll(0, 0);
    }, [categoy, dispatch])


    return (
        <VStack spacing='30px' minHeight='100vh'>
            <Heading fontSize='5xl' mb='16' >
                {pageTitle}
            </Heading>
            {loading ?
                (
                    <Stack direction='row' spacing='4' >
                        <Spinner
                            mt='20'
                            thickness='2px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl' />
                    </Stack>
                ) : error ? (
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Desculpe!</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                ) : (
                    <>
                        <Heading>
                            {categoy.charAt(0).toUpperCase() + categoy.slice(1)} Blogs
                        </Heading>
                        {blogPosts.map((post) => {
                            <Box
                                key={post.id}
                                maxW={{ base: '3xl', lg: '7xl' }}
                                px={{ base: '6', md: '8', lg: '20' }}
                                py='6'>
                                <Stack
                                    direction={{ base: 'column', lg: 'row' }}
                                    spacing='7'>
                                    <Image
                                        src={post.image}
                                        min={{ lg: '400px' }}
                                        maxH='280px'
                                        loading={<Spinner />}></Image>
                                </Stack>
                            </Box>
                        })}
                    </>
                )
            }
        </VStack>
    )
}
