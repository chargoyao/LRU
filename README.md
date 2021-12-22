# LRU
LRU
```bash
yarn add @chargo/lru
```

```js
import LRU from '@chargo/lru';

const lru = new LRU(10);

lru.put('name', {title: 'hello'});
lru.get('name');
```

