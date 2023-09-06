export * from './main';
export * from './glyph';
export * from './component';
export * from './transforms';

import View from './view/View';
import {
  registerAxis,
  registerLegend,
  registerCrosshair,
  registerSlider,
  registerLabel,
  registerDataZoom,
  registerPlayer,
  registerTooltip,
  registerTitle,
  registerGrid
} from './component';

View.useComponents([
  registerAxis,
  registerLegend,
  registerCrosshair,
  registerSlider,
  registerLabel,
  registerDataZoom,
  registerPlayer,
  registerTooltip,
  registerTitle,
  registerGrid
]);

import {
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
  registerSymmetryTransform
} from './transforms';

View.useTransforms([
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
  registerSymmetryTransform
]);

import {
  clipIn,
  clipOut,
  fadeIn,
  fadeOut,
  moveIn,
  moveOut,
  scaleIn,
  scaleOut,
  rotateIn,
  rotateOut,
  growCenterIn,
  growCenterOut,
  growWidthIn,
  growWidthOut,
  growHeightIn,
  growHeightOut,
  growAngleIn,
  growAngleOut,
  growRadiusIn,
  growRadiusOut,
  growPointsIn,
  growPointsOut,
  growPointsXIn,
  growPointsXOut,
  growPointsYIn,
  growPointsYOut,
  growIntervalIn,
  growIntervalOut,
  update
} from './graph/animation/animation';

View.useAnimations([
  clipIn,
  clipOut,
  fadeIn,
  fadeOut,
  moveIn,
  moveOut,
  scaleIn,
  scaleOut,
  rotateIn,
  rotateOut,
  growCenterIn,
  growCenterOut,
  growWidthIn,
  growWidthOut,
  growHeightIn,
  growHeightOut,
  growAngleIn,
  growAngleOut,
  growRadiusIn,
  growRadiusOut,
  growPointsIn,
  growPointsOut,
  growPointsXIn,
  growPointsXOut,
  growPointsYIn,
  growPointsYOut,
  growIntervalIn,
  growIntervalOut,
  update
]);
