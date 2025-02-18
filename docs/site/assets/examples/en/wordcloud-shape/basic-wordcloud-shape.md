---
category: examples
group: wordcloud-shape
title: Shape Word Cloud
order: 100-0
cover: /vgrammar/preview/wordcloud-shape-basic-wordcloud-shape_0.7.6.png
---

# Shape Word Cloud

Data sourced from: [observable](https://observablehq.com/@zhoiii/d3-wordcolud); The Word Cloud displays the characters related to "Fortress Besieged."

## Code Demo

```javascript livedemo template=vgrammar
VGrammarWordcloudShape.registerWordCloudShapeTransforms();

const spec = {
  padding: { top: 30, right: 10, bottom: 80, left: 10 },

  data: [
    {
      id: 'table',
      values: [
        { text: '方鸿渐', value: 3.436043828951773 },
        { text: '赵辛楣', value: 1.3178167504457066 },
        { text: '小姐', value: 0.6934448556308183 },
        { text: '孙小姐', value: 0.6109538839148378 },
        { text: '孙柔嘉', value: 0.5785536953176272 },
        { text: '唐小姐', value: 0.2764069702950092 },
        { text: '李梅亭', value: 0.27521477867539906 },
        { text: '高松年', value: 0.21093103475121827 },
        { text: '汪太太', value: 0.19086668132085363 },
        { text: '李先生', value: 0.14508601296874474 },
        { text: '老太太', value: 0.09036877536276255 },
        { text: '刘东方', value: 0.08638128089811796 },
        { text: '韩学愈', value: 0.08236354690285666 },
        { text: '李妈', value: 0.07865007748112922 },
        { text: '曹元朗', value: 0.0763369459099647 },
        { text: '陆子潇', value: 0.0763369459099647 },
        { text: '汪处厚', value: 0.07432807891233406 },
        { text: '刘小姐', value: 0.07211047297647454 },
        { text: '汪先生', value: 0.07102016049148042 },
        { text: '阿丑', value: 0.06643563492505461 },
        { text: '顾尔谦', value: 0.060266009928919506 },
        { text: '顾先生', value: 0.05796853584619392 },
        { text: '赵先生', value: 0.05720169712462779 },
        { text: '苏文纨', value: 0.04821280794313561 },
        { text: '明白', value: 0.044722300441098976 },
        { text: '唐晓芙', value: 0.04218620695024365 },
        { text: '梅亭', value: 0.03924274156452697 },
        { text: '褚慎明', value: 0.03816847295498235 },
        { text: '胡子', value: 0.0347468103572576 },
        { text: '孙太太', value: 0.032556325142530665 },
        { text: '胡闹', value: 0.03169125041995463 },
        { text: '封信', value: 0.03140663761517224 },
        { text: '王先生', value: 0.031371347591241806 },
        { text: '老妈子', value: 0.031042790599831956 },
        { text: '伯伯', value: 0.031036399689611832 },
        { text: '阿福', value: 0.030117444981717357 },
        { text: '凤仪', value: 0.02949954564258108 },
        { text: '冷笑', value: 0.026737336057523105 },
        { text: '董斜川', value: 0.026115270969198454 },
        { text: '李顾', value: 0.026115270969198454 },
        { text: '老先生', value: 0.024110165208304488 },
        { text: '慎明', value: 0.024106403971567804 },
        { text: '陆太太', value: 0.023599636514064867 },
        { text: '刘先生', value: 0.02184469835184339 },
        { text: '克莱登', value: 0.0200886699763065 },
        { text: '孙先生', value: 0.018890428147511344 },
        { text: '问辛楣', value: 0.01807980297867585 },
        { text: '美玉', value: 0.017978355604584106 },
        { text: '桂林', value: 0.016348843643602756 },
        { text: '谢谢', value: 0.016105756435313395 },
        { text: '伯母', value: 0.014781026617773483 },
        { text: '牛津', value: 0.014217410827566796 },
        { text: '翁道', value: 0.014062068983414552 },
        { text: '师生', value: 0.01395574514494875 },
        { text: '原谅', value: 0.013453662943555704 },
        { text: '陆先生', value: 0.012311684277012267 },
        { text: '苏家', value: 0.012053201985783902 },
        { text: '子潇', value: 0.012053201985783902 },
        { text: '韩先生', value: 0.011982816181666946 },
        { text: '唐家', value: 0.011799818257032434 },
        { text: '沈先生', value: 0.011693590212401276 },
        { text: '李梅', value: 0.011693590212401276 },
        { text: '韩太太', value: 0.011685771119581584 },
        { text: '罗素', value: 0.01168084358409343 },
        { text: '元朗', value: 0.011597495257133255 },
        { text: '董先生', value: 0.011158592815896488 },
        { text: '苏小', value: 0.011096900076793816 },
        { text: '时髦', value: 0.010563750139984878 },
        { text: '古董', value: 0.010433822569998318 },
        { text: '王尔恺', value: 0.01004433498815325 },
        { text: '范懿', value: 0.01004433498815325 },
        { text: '阿丑道', value: 0.01004433498815325 },
        { text: '李医生', value: 0.00983318188086036 },
        { text: '汪氏', value: 0.00983318188086036 },
        { text: '爸爸妈妈', value: 0.009648742374414383 },
        { text: '大家庭', value: 0.009512454579048901 },
        { text: '别吵', value: 0.009461956244664763 },
        { text: '静默', value: 0.008898172243394387 },
        { text: '殷勤', value: 0.008609698020100823 },
        { text: '子儿', value: 0.008159152167660897 },
        { text: '仁丹', value: 0.008139081285632666 },
        { text: '张开', value: 0.008077768133396068 },
        { text: '白话诗', value: 0.0080354679905226 },
        { text: '阿刘', value: 0.0080354679905226 },
        { text: '苏鸿业', value: 0.0080354679905226 },
        { text: '赵方', value: 0.0080354679905226 },
        { text: '唐小', value: 0.0080354679905226 },
        { text: '陈散原', value: 0.0080354679905226 },
        { text: '子里', value: 0.0080354679905226 },
        { text: '文明', value: 0.007834853877435726 },
        { text: '寒喧', value: 0.007731663504755503 },
        { text: '李瞎子', value: 0.007731663504755503 },
        { text: '祖宗', value: 0.007675502361092252 },
        { text: '老远', value: 0.007486342686271215 },
        { text: '柏格森', value: 0.007439061877264325 },
        { text: '戴帽子', value: 0.00729702921478743 },
        { text: '小弟弟', value: 0.007080075161821543 },
        { text: '满以为', value: 0.007057288032465131 },
        { text: '钮子', value: 0.007007567292219795 },
        { text: '那本书', value: 0.006934739515039489 },
        { text: '满屋子', value: 0.006815310056326667 },
        { text: '小东西', value: 0.006784752251520753 },
        { text: '黑甜', value: 0.00665814004607629 },
        { text: '别以为', value: 0.006637759006042682 },
        { text: '道谢', value: 0.006580274769148043 },
        { text: '孙子', value: 0.006518770161645102 },
        { text: '黄山谷', value: 0.006453738210368005 },
        { text: '饶恕', value: 0.006450420136965215 },
        { text: '西医', value: 0.0063416363860326 },
        { text: '祖母', value: 0.0063263594570593185 },
        { text: '斯文', value: 0.006228162435725089 },
        { text: '老二', value: 0.006108884756578726 },
        { text: '周厚卿', value: 0.006026600992891951 },
        { text: '苏家来', value: 0.006026600992891951 },
        { text: '老世伯', value: 0.006026600992891951 },
        { text: '赵先', value: 0.006026600992891951 },
        { text: '孙小', value: 0.006026600992891951 },
        { text: '维妙维肖', value: 0.005899909128516217 },
        { text: '徐小姐', value: 0.005899909128516217 },
        { text: '夏令', value: 0.005846795106200638 },
        { text: '白衬衫', value: 0.0057987476285666275 },
        { text: '老李', value: 0.005765530279173248 },
        { text: '许先生', value: 0.0057548837181314065 },
        { text: '周密', value: 0.005715015930404974 },
        { text: '张妈', value: 0.005714532832045035 },
        { text: '陈列', value: 0.005682366177321459 },
        { text: '老古董', value: 0.005579296407948244 },
        { text: '钮扣', value: 0.005310056371366157 },
        { text: '雨淋', value: 0.0051479406139640395 },
        { text: '宝贝', value: 0.005146369182530667 },
        { text: '戴眼镜', value: 0.005035450166299782 },
        { text: '沙丁鱼', value: 0.0050254673261216605 },
        { text: '娶媳妇', value: 0.004911003815469669 },
        { text: '乌龟', value: 0.004895491300596538 },
        { text: '老三', value: 0.004831048330586456 },
        { text: '道德', value: 0.004793940138013779 },
        { text: '铁青', value: 0.004711880739563099 },
        { text: '矫正', value: 0.0046962074474760545 },
        { text: '谢仪', value: 0.00467171152814653 },
        { text: '修指甲', value: 0.0044387600307175265 },
        { text: '养条狗', value: 0.004302492140245337 },
        { text: '房东太太', value: 0.004302492140245337 },
        { text: '曹元', value: 0.0042058085333221305 },
        { text: '红墨水', value: 0.0042058085333221305 },
        { text: '纪念周', value: 0.0042058085333221305 },
        { text: '麻木', value: 0.004185307860685598 },
        { text: '朱古力', value: 0.004130814901529155 },
        { text: '小宝贝', value: 0.004069540642816333 },
        { text: '沈氏', value: 0.004069540642816333 },
        { text: '博士文凭', value: 0.0040177339952613 },
        { text: '朱古力糖', value: 0.0040177339952613 },
        { text: '方鸿', value: 0.0040177339952613 },
        { text: '沈子培', value: 0.0040177339952613 },
        { text: '王乐恺', value: 0.0040177339952613 },
        { text: '慎明兄', value: 0.0040177339952613 },
        { text: '向辛楣', value: 0.0040177339952613 },
        { text: '美的', value: 0.0040177339952613 },
        { text: '赵辛', value: 0.0040177339952613 },
        { text: '墨晶', value: 0.0040177339952613 },
        { text: '顾尔廉', value: 0.0040177339952613 },
        { text: '云爱', value: 0.0040177339952613 },
        { text: '钱花', value: 0.0040177339952613 },
        { text: '许大隆', value: 0.0040177339952613 },
        { text: '阿福道', value: 0.0040177339952613 },
        { text: '包仁丹', value: 0.0040177339952613 },
        { text: '早得很', value: 0.0040177339952613 },
        { text: '范小', value: 0.0040177339952613 },
        { text: '汪派', value: 0.0040177339952613 },
        { text: '汪太', value: 0.0040177339952613 },
        { text: '翁笑', value: 0.0040177339952613 },
        { text: '小妞儿', value: 0.003972857035893127 },
        { text: '老处女', value: 0.003972857035893127 },
        { text: '相思病', value: 0.003933272752344144 },
        { text: '墨水瓶', value: 0.003933272752344144 },
        { text: '方氏', value: 0.0038978634041337587 },
        { text: '徐志摩', value: 0.0038658317523777514 },
        { text: '官太太', value: 0.0038658317523777514 },
        { text: '单相思', value: 0.0038658317523777514 },
        { text: '哈巴狗', value: 0.0038365891454209375 },
        { text: '冷冷道', value: 0.003784782497865905 },
        { text: '道贺', value: 0.003784782497865905 },
        { text: '黄毛丫头', value: 0.003784782497865905 },
        { text: '修正', value: 0.0037518094615846074 },
        { text: '苏曼殊', value: 0.003739905538464124 },
        { text: '祖先', value: 0.0037324328659670645 },
        { text: '阳世', value: 0.0037195309386321624 },
        { text: '大贤', value: 0.0037195309386321624 },
        { text: '秋凉', value: 0.003700321254948748 },
        { text: '通顺', value: 0.003700321254948748 },
        { text: '愚忠', value: 0.003700321254948748 },
        { text: '喝咖啡', value: 0.003664911906704756 },
        { text: '续弦', value: 0.003664911906704756 },
        { text: '叶子', value: 0.003663599001193077 },
        { text: '冰淇淋', value: 0.003648514607393715 },
        { text: '包罗万象', value: 0.003632880254948748 },
        { text: '华氏', value: 0.003617940996807259 },
        { text: '东方人', value: 0.003564053364476559 },
        { text: '孙氏', value: 0.003564053364476559 },
        { text: '马屁', value: 0.003564053364476559 },
        { text: '曹禺', value: 0.003564053364476559 }
      ]
    },
    {
      id: 'shapeData',
      source: 'table',
      dependency: ['viewBox'],
      transform: [
        {
          type: 'wordcloudShape',
          size: {
            value: params => {
              return [params.viewBox.width(), params.viewBox.height()];
            }
          },
          fontSize: { field: 'value' },
          text: { field: 'text' },
          colorList: [
            '#6690F2',
            '#70D6A3',
            '#B4E6E2',
            '#63B5FC',
            '#FF8F62',
            '#FFDC83',
            '#BCC5FD',
            '#A29BFE',
            '#63C4C7',
            '#F68484'
          ],
          shape: 'https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/a222eb3ecfe32db85220dda0d.png',

          colorMode: 'ordinal'
          // padding: 1,
          // fillingPadding: 0.4,
          // fillingRatio: 0.7,
          // ratio: 1,
          // fillingRotateList: ['0'],
          // random: false,
          // textLayoutTimes: 3,
          // fontSizeShrinkFactor: 0.9,
          // stepFactor: 4,
          // layoutMode: 'ensureMapping'
          // fontSizeEnlargeFactor: 1.2,
          // fillingXRatioStep: 0.008, // 步长为宽度的比例
          // fillingYRatioStep: 0.008
        }
      ]
    },
    {
      id: 'keywords',
      source: 'shapeData',
      transform: [
        {
          type: 'filter',
          callback: datum => {
            return !datum.isFillingWord;
          }
        }
      ]
    },
    {
      id: 'filling',
      source: 'shapeData',
      transform: [
        {
          type: 'filter',
          callback: datum => {
            return datum.isFillingWord;
          }
        }
      ]
    }
  ],

  scales: [
    {
      id: 'colorScale',
      type: 'ordinal',

      domain: { data: 'table', field: 'text' },
      range: [
        '#5383F4',
        '#7BCF8E',
        '#FF9D2C',
        '#FFDB26',
        '#7568D9',
        '#80D8FB',
        '#1857A3',
        '#CAB0E8',
        '#FF8867',
        '#B9E493',
        '#2CB4A8',
        '#B9E4E3'
      ]
    }
  ],

  marks: [
    {
      type: 'text',
      from: { data: 'keywords' },
      encode: {
        enter: {
          text: { field: 'text' },
          textAlign: 'center',
          textBaseline: 'alphabetic',
          fill: { field: 'color' },
          fontFamily: { field: 'fontFamily' },
          fontWeight: { field: 'fontWeight' },
          fontStyle: { field: 'fontStyle' },
          visible: { field: 'visible' }
        },
        update: {
          x: { field: 'x' },
          y: { field: 'y' },
          angle: { field: 'angle' },
          fontSize: { field: 'fontSize' },
          fillOpacity: { field: 'opacity' }
        },
        hover: {
          fillOpacity: 0.5
        }
      }
    },
    {
      type: 'text',
      from: { data: 'filling' },
      encode: {
        enter: {
          text: { field: 'text' },
          textAlign: 'center',
          textBaseline: 'alphabetic',
          fill: { field: 'color' },
          fontFamily: { field: 'fontFamily' },
          fontWeight: { field: 'fontWeight' },
          fontStyle: { field: 'fontStyle' },
          fillOpacity: { field: 'opacity' }
        },
        update: {
          x: { field: 'x' },
          y: { field: 'y' },
          angle: { field: 'angle' },
          fontSize: { field: 'fontSize' }
        }
      }
    }
  ]
};

const vGrammarView = new View({
  autoFit: true,
  container: document.getElementById(CONTAINER_ID),
  hover: true
});
vGrammarView.parseSpec(spec);

vGrammarView.runAsync();

// 只为了方便控制太调试用，不要拷贝
window.vGrammarView = vGrammarView;
```

## Related Tutorials
