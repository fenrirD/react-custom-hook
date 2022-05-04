import React, {useState} from "react";

export const useTabs = (initialTab, allTabs) => {
  try {
    const [currentIndex, setCurrentIndex] = useState(initialTab)
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    }
  } catch (err) {
    throw Error();
  }
}