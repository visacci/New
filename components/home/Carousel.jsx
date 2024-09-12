import React, { useState, useRef, useEffect } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Get the screen width

const images = [
  require("../../assets/images/fn1.jpg"),
  require("../../assets/images/fn2.jpg"),
  require("../../assets/images/fn3.jpg"),
  require("../../assets/images/fn3.jpg"),
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Automatically slides to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        contentContainerStyle={styles.flatListContent}
      />

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
    alignItems: "center", // Center the carousel in the screen
  },
  flatListContent: {
    alignItems: "center", // Center the FlatList items
  },
  imageContainer: {
    width: width * 0.7, // Make the image container smaller than the screen width
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10, // Space between images to see the next ones
  },
  image: {
    width: "100%",
    height: 200, // Adjust the height of the image
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ff6347",
  },
  inactiveDot: {
    backgroundColor: "#d3d3d3",
  },
});
