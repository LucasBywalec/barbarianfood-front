import React, { useState, useRef } from 'react';
import { Box, IconButton, HStack, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { OfferItem } from '../resource/generated/models/OfferItem';
import { Link } from 'react-router-dom';

interface OfferCarouselProps {
  items: OfferItem[] | undefined;
}

export const OfferCarousel = ({ items }: OfferCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<OfferItem[] | undefined>(items);

  const scrollToLeft = () => {
    if (boxRef.current) {
      boxRef.current.scrollTo({
        left: boxRef.current.scrollLeft - boxRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollToRight = () => {
    if (boxRef.current) {
      boxRef.current.scrollTo({
        left: boxRef.current.scrollLeft + boxRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleItemMouseEnter = (index: number) => {
    setCurrentIndex(index);
  };

  const handleItemMouseLeave = () => {
    setCurrentIndex(null);
  };

  const filterItems = (query: string) => {
    const filtered = items?.filter((item) =>
      item.title?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Flex direction="column">
      <Flex justifyContent="center" alignItems="center" mt={4}>
        <input
          type="text"
          width="50%" // Adjust the width as desired
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            filterItems(e.target.value);
          }}
        />
      </Flex>
      <Flex width="100%" justifyContent="center" alignItems="center" mt={4}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={scrollToLeft}
          aria-label="Scroll Left"
          variant="ghost"
          disabled={currentIndex === 0}
        />
        <Box
          ref={boxRef}
          overflowX="scroll"
          flex="1"
          sx={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <HStack spacing={4} align="center">
            {filteredItems?.map((item, index) => (
              <Link to={`/details/${item.id}`} key={index}>
                <Box
                  borderWidth={1}
                  borderRadius="md"
                  p={4}
                  minWidth="300px"
                  flexShrink={0}
                  opacity={currentIndex === null || currentIndex === index ? 1 : 0.5}
                  transform={`scale(${currentIndex === index ? 1.2 : 1})`}
                  transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
                  ref={(el) => (itemRef.current[index] = el!)}
                  onMouseEnter={() => handleItemMouseEnter(index)}
                  onMouseLeave={handleItemMouseLeave}
                >
                  <Box fontWeight="bold">{item.title}</Box>
                  <Box>
                    Kcal Range: {item.kcalRangeBottom} - {item.kcalRangeTop}
                  </Box>
                  <Box>Cost: {item.cost}</Box>
                </Box>
              </Link>
            ))}
          </HStack>
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={scrollToRight}
          aria-label="Scroll Right"
          variant="ghost"
          disabled={currentIndex === (filteredItems ? filteredItems.length - 1 : 0)}
        />
      </Flex>
    </Flex>
  );
};

export default OfferCarousel;
