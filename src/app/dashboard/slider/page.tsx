"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Page() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);
  return (
    <div>
      <p>vaalue del slider {sliderValue}</p>{" "}
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />
      <p>vaalue del range slider {rangeValue.join(",")}</p>{" "}
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
}
