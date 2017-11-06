[![Build Status](https://travis-ci.org/mfrachet/rn-render-perfs.svg?branch=master)](https://travis-ci.org/mfrachet/rn-render-perfs)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/rn-render-perfs/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/rn-render-perfs?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Measure React rendering lifecycles using controls using a simple component

---
<img src="https://img4.hostingpics.net/pics/549535badperfs.gif" />

---


### Installation

```
$ yarn add -D rn-render-perfs
```

### In your code

```javascript
import RnRenderPerfs from 'rn-render-perfs';
import Perf from 'ReactPerf';

export default function App() {
  return (
      <View>
        <YourApp />
        <RnRenderPerfs monitor={Perf} />
      </View>
  );
};
```

You can pass any kind of `Perf` module inside `monitor` props that implements :

- `start`: Function
- `stop`: Function
- `printWasted`: Function
- `printInclusive`: Function
- `printExclusive`: Function
- `printOperations`: Function

### What can I expect from this module ?

This module is a simple wrapper allowing to call `Perf` modules using the same API as the `react-addons-perfs` one.

With the previous code example, you can access to these information (from [react-addons-perfs doc](https://reactjs.org/docs/perf.html)) :

- `Print wasted`: “Wasted” time is spent on components that didn’t actually render anything
- `Print Inclusive`: Print the overall time taken by React
- `Print Exclusive`: “Exclusive” times don’t include the times taken to mount the components: processing props, calling componentWillMount and componentDidMount, etc.
- `Print operations`: Prints the underlying manipulations

--- 


*With the help of [@flepretre](https://github.com/flepretre) & [@kennydee](https://github.com/kennydee)*
