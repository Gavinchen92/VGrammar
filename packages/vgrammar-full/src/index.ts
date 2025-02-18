export * from '@visactor/vgrammar-core';
export * from '@visactor/vgrammar-hierarchy';
export * from '@visactor/vgrammar-plot';
export * from '@visactor/vgrammar-projection';
export * from '@visactor/vgrammar-sankey';
export * from '@visactor/vgrammar-wordcloud';
export * from '@visactor/vgrammar-wordcloud-shape';

import { registerAllHierarchyTransforms } from '@visactor/vgrammar-hierarchy';
import { registerProjection, registerGeoTransforms } from '@visactor/vgrammar-projection';
import { registerSankeyTransforms } from '@visactor/vgrammar-sankey';
import { registerWordCloudTransforms } from '@visactor/vgrammar-wordcloud';
import { registerWordCloudShapeTransforms } from '@visactor/vgrammar-wordcloud-shape';

import {
  View,
  // semantic mark
  registerCellMark,
  registerIntervalMark,
  // components
  registerAxis,
  registerLegend,
  registerSlider,
  registerLabel,
  registerDataZoom,
  registerPlayer,
  registerTitle,
  registerGrid,
  registerScrollbar,
  // animations
  registerClipInAnimation,
  registerClipOutAnimation,
  registerFadeInAnimation,
  registerFadeOutAnimation,
  registerGrowAngleInAnimation,
  registerGrowAngleOutAnimation,
  registerGrowCenterInAnimation,
  registerGrowCenterOutAnimation,
  registerGrowHeightInAnimation,
  registerGrowHeightOutAnimation,
  registerGrowIntervalInAnimation,
  registerGrowIntervalOutAnimation,
  registerGrowPointsInAnimation,
  registerGrowPointsOutAnimation,
  registerGrowPointsXInAnimation,
  registerGrowPointsXOutAnimation,
  registerGrowPointsYInAnimation,
  registerGrowPointsYOutAnimation,
  registerGrowRadiusInAnimation,
  registerGrowRadiusOutAnimation,
  registerGrowWidthInAnimation,
  registerGrowWidthOutAnimation,
  registerMoveInAnimation,
  registerMoveOutAnimation,
  registerRotateInAnimation,
  registerRotateOutAnimation,
  registerScaleInAnimation,
  registerScaleOutAnimation,
  registerUpdateAnimation,
  // transforms
  registerBinTransform,
  registerContourTransform,
  registerSortTransform,
  registerFilterTransform,
  registerJoinTransform,
  registerKdeTransform,
  registerMapTransform,
  registerPickTransform,
  registerRangeTransform,
  registerStackTransform,
  registerFunnelTransform,
  registerPieTransform,
  registerCircularRelationTransform,
  registerFoldTransform,
  registerUnfoldTransform,
  registerIdentifierTransform,
  registerSampleTransform,
  registerMarkOverlapTransform,
  registerDodgeTransform,
  registerJitterTransform,
  registerJitterXTransform,
  registerJitterYTransform,
  registerSymmetryTransform,

  // interactions
  registerElementActive,
  registerElementSelect,
  registerElementHighlight,
  registerElementHighlightByKey,
  registerElementHighlightByGroup,
  registerElementActiveByLegend,
  registerElementHighlightByLegend,
  registerElementHighlightByName,
  registerBrushHighlight,
  registerBrushActive,
  registerBrushFilter,
  registerDrillDown,
  registerRollUp,
  registerTooltip,
  registerDimensionTooltip,
  registerCrosshair,
  registerViewZoom,
  registerViewScroll,
  registerViewDrag,
  registerViewRoam,
  registerFishEye,

  // envs
  initAllEnv
} from '@visactor/vgrammar-core';

View.useRegisters([
  // semantic marks
  registerCellMark,
  registerIntervalMark,
  // components
  registerAxis,
  registerLegend,
  registerSlider,
  registerLabel,
  registerDataZoom,
  registerPlayer,
  registerTitle,
  registerGrid,
  registerScrollbar,

  registerBinTransform,
  registerContourTransform,
  registerSortTransform,
  registerFilterTransform,
  registerJoinTransform,
  registerKdeTransform,
  registerMapTransform,
  registerPickTransform,
  registerRangeTransform,
  registerStackTransform,
  registerFunnelTransform,
  registerPieTransform,
  registerCircularRelationTransform,
  registerFoldTransform,
  registerUnfoldTransform,
  registerIdentifierTransform,
  registerSampleTransform,
  registerMarkOverlapTransform,
  registerDodgeTransform,
  registerJitterTransform,
  registerJitterXTransform,
  registerJitterYTransform,
  registerSymmetryTransform,
  registerAllHierarchyTransforms,
  registerGeoTransforms,
  registerSankeyTransforms,
  registerWordCloudTransforms,
  registerWordCloudShapeTransforms,

  registerProjection,

  // animations
  registerClipInAnimation,
  registerClipOutAnimation,
  registerFadeInAnimation,
  registerFadeOutAnimation,
  registerGrowAngleInAnimation,
  registerGrowAngleOutAnimation,
  registerGrowCenterInAnimation,
  registerGrowCenterOutAnimation,
  registerGrowHeightInAnimation,
  registerGrowHeightOutAnimation,
  registerGrowIntervalInAnimation,
  registerGrowIntervalOutAnimation,
  registerGrowPointsInAnimation,
  registerGrowPointsOutAnimation,
  registerGrowPointsXInAnimation,
  registerGrowPointsXOutAnimation,
  registerGrowPointsYInAnimation,
  registerGrowPointsYOutAnimation,
  registerGrowRadiusInAnimation,
  registerGrowRadiusOutAnimation,
  registerGrowWidthInAnimation,
  registerGrowWidthOutAnimation,
  registerMoveInAnimation,
  registerMoveOutAnimation,
  registerRotateInAnimation,
  registerRotateOutAnimation,
  registerScaleInAnimation,
  registerScaleOutAnimation,
  registerUpdateAnimation,

  // register interactions
  registerElementActive,
  registerElementSelect,
  registerElementHighlight,
  registerElementHighlightByKey,
  registerElementHighlightByGroup,
  registerElementActiveByLegend,
  registerElementHighlightByLegend,
  registerElementHighlightByName,
  registerBrushHighlight,
  registerBrushActive,
  registerBrushFilter,
  registerDrillDown,
  registerRollUp,
  registerTooltip,
  registerDimensionTooltip,
  registerCrosshair,
  registerViewZoom,
  registerViewScroll,
  registerViewDrag,
  registerViewRoam,
  registerFishEye
]);

initAllEnv();
