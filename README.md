[![Build Status](https://travis-ci.org/mfrachet/rn-render-perfs.svg?branch=master)](https://travis-ci.org/mfrachet/rn-render-perfs)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/rn-render-perfs/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/rn-render-perfs?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Measure React rendering lifecycles using controls

Component on top of `ReactPerfs` (equivalent to [react-addons-perfs](https://reactjs.org/docs/perf.html) for React) that helps to measure rendering lifecycles.

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

You can pass any kind of `Perf` module that implements :

- `start`: Function
- `stop`: Function
- `printWasted`: Function
- `printInclusive`: Function
- `printExclusive`: Function
- `printOperations`: Function
