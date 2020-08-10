export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(x => x.indexOf('粤A') === 0).length;
}
