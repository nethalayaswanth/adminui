import { useState,useCallback, useLayoutEffect, useEffect } from 'react';
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
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './item';
const Preview = ({ images, handleOrderChange }) => {

  const [previews, setPreviews] = useState([...images]);


useLayoutEffect(() => {
  setPreviews(images);
}, [images]);
  const reorder = useCallback((list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }, []);

  const onDragEnd = useCallback(
    result => {
      if (!result.destination) {
        return;
      }
      if (result.destination.index === result.source.index) {
        return;
      }
      const list = reorder(
        previews,
        result.source.index,
        result.destination.index
      );
      handleOrderChange(list);
      setPreviews(list);
    },
    [reorder, previews, handleOrderChange]
  );
  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    margin: `0 ${grid}px 0 0`,
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle,
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
   
  });
  console.log(previews,images, 'current');
  return (
    <Flex justify="center" direction="column">
      {previews.length !== 0 && (
        <Box flex="1 0 0 ">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              internalScroll={true}
              droppableId="droppable"
              direction="horizontal"
            >
              {(provided, snapshot) => (
                <Box
                  display="flex"
                  py={5}
                  ref={provided.innerRef}
                  overflow={'auto'}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                  //               sx={{
                  //                 [data-simplebar] :{
                  // position: 'relative',
                  // flexDirection: 'column',
                  // flexWrap: 'wrap',
                  // justifyContent: 'flex-start',
                  // alignContent: 'flex-start',
                  // alignItems: 'flex-start'
                  //               }}
                >
                    
                  
                      {previews?.map((image, index) => (
                        <Draggable
                          key={`draggableKey-${index}`}
                          draggableId={`$draggable-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Box
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <Item image={image} />
                            </Box>
                          )}
                        </Draggable>
                      ))}
                    
                    {provided.placeholder}
                 
                </Box>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
      )}
    </Flex>
  );
};

export default Preview;
