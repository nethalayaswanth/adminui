import {
  AspectRatio,
  Box,
  BoxProps,
  Container,
  forwardRef,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useCallback, useState } from 'react';
import Preview from './Preview';
import Item from './item';
export default function Upload() {
  const controls = useAnimation();
  const startAnimation = () => controls.start('hover');
  const stopAnimation = () => controls.stop();
  const [images, setImages] = useState([]);

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const handleInpuChange = e => {
    const files = e.target.files;
    const acceptedImages=[]
     Object.values(files).forEach(file => {
      if (!file.type.match(imageMimeType)) {
        alert('Image mime type is not valid');
        return;
      }
      acceptedImages.push(file)
    });
    setImages(img => [...img, ...acceptedImages]);
  };

  const handleOrderChange=useCallback((list)=>{
setImages(list);
console.log(list,"ls")
  },[])
  return (
    <>
      <Flex
        minHeight={'7.5rem'}
        direction="column"
        position="relative"
        justify={'center'}
      >
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: 'md',
            borderColor: 'blue.700',
          }}
          as={motion.div}
          flex={1}
        >
          <Flex
            flex={1}
            position="absolute"
            top="0"
            left="0"
            height="100%"
            width="100%"
            display="flex"
            flexDirection="column"
            margin={0}
            padding={0}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Stack p="8" textAlign="center" spacing="1">
                  <Heading fontSize="md" color="blue.700" fontWeight="normal">
                    Drop images here
                  </Heading>
                  <Text fontWeight="light" fontSize={'xs'} lineHeight={4}>
                    or click to upload
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              multiple={true}
              opacity="0"
              aria-hidden="true"
              accept="image/*"
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
              onChange={handleInpuChange}
              padding={0}
            />
          </Flex>
        </Box>
      </Flex>
      <Box>
        {images.length !== 0 && (
          <Preview key="preview" images={images} handleOrderChange={handleOrderChange} />
        )}
      </Box>
    </>
  );
}
