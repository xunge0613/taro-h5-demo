import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default function Index() {
  const [state, setState] = useState<string>("");

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <AtButton
        type="primary"
        circle={true}
        onClick={() => {
          setState(state + "1");
        }}
      >
        +1
      </AtButton>
      <div>{state}</div>
    </View>
  );
}
