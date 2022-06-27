import { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { Image } from '@chakra-ui/react';

const Item = ({ image }) => {
  const [preview, setPreview] = useState();

  useLayoutEffect(() => {
    const url = URL.createObjectURL(image);

    setPreview(url);
    return ()=>{if(url){URL.revokeObjectURL(url);}}
  }, [image]);

  return (
    <>
      {preview && (
        <Image maxWidth={'unset'} boxSize="100px" objectFit="cover"  src={preview} alt="" />
      )}
    </>
  );
};

export default Item;
