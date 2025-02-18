import { Factory } from '../core/factory';
import { ElementActive } from './element-active';
import { ElementSelect } from './element-select';
import { ElementHighlight } from './element-highlight';
import { ElementHighlightByKey } from './element-highlight-by-key';
import { ElementHighlightByGroup } from './element-highlight-by-group';
import { ElementActiveByLegend } from './element-active-by-legend';
import { ElementHighlightByLegend } from './element-highlight-by-legend';
import { ElementHighlightByName } from './element-highlight-by-name';
import { BrushHighlight } from './brush-highlight';
import { BrushActive } from './brush-active';
import { BrushFilter } from './brush-filter';
import { DrillDown } from './drill-down';
import { RollUp } from './roll-up';
import { Tooltip } from './tooltip';
import { DimensionTooltip } from './dimension-tooltip';
import { Crosshair } from './crosshair';
import { FilterMixin } from './filter';
import { ViewZoom } from './view-zoom';
import { ViewScroll } from './view-scroll';
import { ViewDrag } from './view-drag';
import { mixin } from '@visactor/vutils';
import { ViewZoomMixin } from './view-zoom-mixin';
import { ViewScrollMixin } from './view-scroll-mixin';
import { ViewDragMixin } from './view-drag-mixin';
import { ViewRoam } from './view-roam';
import { FishEye } from './fish-eye';

export { BaseTooltip } from './base-tooltip';
export { BaseInteraction } from './base';
export { BrushBase } from './brush-base';
export { ViewNavigationBase } from './view-navigation-base';
export {
  ElementActive,
  ElementSelect,
  ElementHighlight,
  ElementHighlightByKey,
  ElementHighlightByGroup,
  ElementActiveByLegend,
  ElementHighlightByLegend,
  ElementHighlightByName,
  BrushHighlight,
  BrushActive,
  DrillDown,
  RollUp,
  Tooltip,
  DimensionTooltip,
  Crosshair,
  FilterMixin,
  ViewZoom,
  ViewScroll,
  ViewDrag,
  ViewRoam,
  ViewScrollMixin,
  ViewZoomMixin,
  ViewDragMixin,
  FishEye
};

export const registerElementActive = () => {
  Factory.registerInteraction(ElementActive.type, ElementActive);
};

export const registerElementSelect = () => {
  Factory.registerInteraction(ElementSelect.type, ElementSelect);
};

export const registerElementHighlight = () => {
  Factory.registerInteraction(ElementHighlight.type, ElementHighlight);
};

export const registerElementHighlightByKey = () => {
  Factory.registerInteraction(ElementHighlightByKey.type, ElementHighlightByKey);
};

export const registerElementHighlightByGroup = () => {
  Factory.registerInteraction(ElementHighlightByGroup.type, ElementHighlightByGroup);
};

export const registerElementActiveByLegend = () => {
  Factory.registerInteraction(ElementActiveByLegend.type, ElementActiveByLegend);
};

export const registerElementHighlightByLegend = () => {
  Factory.registerInteraction(ElementHighlightByLegend.type, ElementHighlightByLegend);
};

export const registerElementHighlightByName = () => {
  Factory.registerInteraction(ElementHighlightByName.type, ElementHighlightByName);
};

export const registerBrushHighlight = () => {
  Factory.registerInteraction(BrushHighlight.type, BrushHighlight);
};

export const registerBrushActive = () => {
  Factory.registerInteraction(BrushActive.type, BrushActive);
};

export const registerBrushFilter = () => {
  mixin(BrushFilter, FilterMixin);
  Factory.registerInteraction(BrushFilter.type, BrushFilter);
};

export const registerDrillDown = () => {
  mixin(DrillDown, FilterMixin);
  Factory.registerInteraction(DrillDown.type, DrillDown);
};

export const registerRollUp = () => {
  Factory.registerInteraction(RollUp.type, RollUp);
};

export const registerTooltip = () => {
  Factory.registerInteraction(Tooltip.type, Tooltip);
};

export const registerDimensionTooltip = () => {
  Factory.registerInteraction(DimensionTooltip.type, DimensionTooltip);
};

export const registerCrosshair = () => {
  Factory.registerInteraction(Crosshair.type, Crosshair);
};
export const registerViewZoom = () => {
  mixin(ViewZoom, ViewZoomMixin);
  Factory.registerInteraction(ViewZoom.type, ViewZoom);
};

export const registerViewScroll = () => {
  mixin(ViewScroll, ViewScrollMixin);
  Factory.registerInteraction(ViewScroll.type, ViewScroll);
};

export const registerViewDrag = () => {
  mixin(ViewDrag, ViewDragMixin);
  Factory.registerInteraction(ViewDrag.type, ViewDrag);
};

export const registerViewRoam = () => {
  mixin(ViewRoam, ViewZoomMixin);
  mixin(ViewRoam, ViewDragMixin);
  mixin(ViewRoam, ViewScrollMixin);
  Factory.registerInteraction(ViewRoam.type, ViewRoam);
};

export const registerFishEye = () => {
  Factory.registerInteraction(FishEye.type, FishEye);
};
