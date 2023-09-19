import {
  View,
  // components
  registerAxis,
  registerLegend,
  registerCrosshair,
  registerSlider,
  registerLabel,
  registerDataZoom,
  registerPlayer,
  registerTooltip,
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
  registerLttbSampleTransform,
  registerMarkOverlapTransform,
  registerDodgeTransform,
  registerJitterTransform,
  registerJitterXTransform,
  registerJitterYTransform,
  registerSymmetryTransform,
  initAllEnv,

  // interactions
  registerElementActive,
  registerElementSelect,
  registerElementHighlight,
  registerElementHighlightByKey,
  registerElementHighlightByGroup,
  registerElementActiveByLegend,
  registerElementHighlightByLegend
} from '@visactor/vgrammar-core';

View.useRegisters([
  // components
  registerAxis,
  registerLegend,
  registerCrosshair,
  registerSlider,
  registerLabel,
  registerDataZoom,
  registerPlayer,
  registerTooltip,
  registerTitle,
  registerGrid,
  registerScrollbar,

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
  registerLttbSampleTransform,
  registerMarkOverlapTransform,
  registerDodgeTransform,
  registerJitterTransform,
  registerJitterXTransform,
  registerJitterYTransform,
  registerSymmetryTransform,

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

  // interactions
  registerElementActive,
  registerElementSelect,
  registerElementHighlight,
  registerElementHighlightByKey,
  registerElementHighlightByGroup,
  registerElementActiveByLegend,
  registerElementHighlightByLegend
]);

initAllEnv();

export * from '@visactor/vgrammar-core';
