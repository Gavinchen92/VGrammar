/* eslint-disable no-console */
import type { View, IGroupMark } from '@visactor/vgrammar';

export const runner = (view: View) => {
  const originData = [
    { category: 'A', amount: 28, index: 0 },
    { category: 'B', amount: 75, index: 1 },
    { category: 'C', amount: 43, index: 2 }
  ];

  const leftBar = view.mark('rect', view.rootMark).id('leftBar').encode({
    x: 0,
    y: 0,
    width: 50,
    height: 150,
    fill: 'purple'
  });
  const bottomBar = view.mark('rect', view.rootMark).id('bottomBar').encode({
    x: 50,
    y: 150,
    width: 150,
    height: 50,
    fill: 'blue'
  });
  const dataGroup = view.mark('group', view.rootMark).encode({
    x: 50,
    y: 0,
    width: 150,
    height: 150,
    stroke: 'black',
    strokeWidth: 1
  }) as IGroupMark;
  const data = view.data(originData).id('data');
  const dataBar = view
    .mark('rect', dataGroup)
    .id('dataBar')
    .join(data)
    .encodeState('enter', { fill: () => { console.log('enter!'); return 'lightGreen'; } })
    .encode({
      x: datum => datum.index * 50 + 10,
      y: datum => ((100 - datum.amount) / 100) * 150,
      width: 30,
      height: datum => (datum.amount / 100) * 150,
      // fill: 'lightGreen'
    });
  const dataLabel = view
    .mark('text', dataGroup)
    .id('dataLabel')
    .join(data)
    .encode({
      x: datum => datum.index * 50 + 25,
      y: datum => ((100 - datum.amount) / 100) * 150 - 10,
      text: datum => datum.category,
      textAlign: 'center',
      fontSize: 12,
      fill: 'black'
    });
};

export const callback = (view: View) => {
  const updateEnterButton = document.createElement('button');
  updateEnterButton.innerText = 'update enter';
  document.getElementById('footer')?.appendChild(updateEnterButton);

  const updateDataButton = document.createElement('button');
  updateDataButton.innerText = 'update data';
  document.getElementById('footer')?.appendChild(updateDataButton);

  updateEnterButton.addEventListener('click', () => {
    const dataBar = view.getMarkById('dataBar');
    dataBar.encodeState('enter', { fill: () => { console.log('reenter!'); return 'red'; } });
    view.runAsync();
  });
  updateDataButton.addEventListener('click', () => {
    const data = view.getDataById('data');
    data.values([
      { category: 'A', amount: Math.floor(100 * Math.random()), index: 0 },
      { category: 'B', amount: Math.floor(100 * Math.random()), index: 1 },
      { category: 'C', amount: Math.floor(100 * Math.random()), index: 2 }
    ]);
    view.runAsync();
  });
};
