import React from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
// import { Stat } from "./Stat";
// import { styles } from "./styles";

export const Carousel = (props: any) => {
  const { items, style } = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item: any, index: number) => {
          switch (style) {
            case "stats":
              return (
                <View>
                  <Text>Welp</Text>
                </View>
                // <Stat
                //   key={index}
                //   index={index}
                //   label={item.label}
                //   value={item.value}
                // />
              );

            default:
              return (
                <View>
                  <Text>Does this work?</Text>
                </View>
                // <Stat
                //   key={index}
                //   index={index}
                //   label={item.label}
                //   value={item.value}
                // />
              );
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    //alignItems: "stretch",
    alignContent: "stretch",
    flex: 1,
    borderColor: "purple",
    borderWidth: 4,
  },
});

export default Carousel;
