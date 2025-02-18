import { field as getFieldAccessor } from '@visactor/vgrammar-util';
import type {
  RectXEncodeChannels,
  PlotRectXEncoderSpec,
  SemanticTooltipOption,
  WithDefaultEncode,
  GenerateBaseEncodeSpec,
  CrosshairSpec,
  Nil,
  ScaleSpec,
  ValueOf,
  IElement
} from '@visactor/vgrammar-core';
import { SemanticMark } from './semantic-mark';
import { isArray } from '@visactor/vutils';
import { PlotMakType } from './enums';
// eslint-disable-next-line no-duplicate-imports
import { GrammarMarkType } from '@visactor/vgrammar-core';
import { isContinuous } from '@visactor/vscale';

export class RectXSemanticMark extends SemanticMark<PlotRectXEncoderSpec, RectXEncodeChannels> {
  static readonly type = PlotMakType.rectX;
  constructor(id?: string | number) {
    super(PlotMakType.rectX, id);
  }

  setMarkType() {
    return GrammarMarkType.rect;
  }

  parseScaleByEncode(
    channel: RectXEncodeChannels,
    option: ValueOf<WithDefaultEncode<PlotRectXEncoderSpec, RectXEncodeChannels>, RectXEncodeChannels>
  ): ScaleSpec | Nil {
    return this.parseScaleOfCommonEncode(channel, option);
  }

  setDefaultCrosshair(): Record<string, Pick<CrosshairSpec, 'crosshairShape' | 'crosshairType'>> {
    return {
      x: { crosshairShape: 'rect' }
    };
  }

  setDefaultTooltip(): SemanticTooltipOption | Nil {
    const encodeX = this.spec.encode?.x;
    return {
      content: isArray(encodeX)
        ? encodeX.map(entry => {
            return {
              value: entry
            };
          })
        : [
            {
              value: encodeX
            }
          ]
    };
  }

  convertMarkEncode(
    encode: WithDefaultEncode<PlotRectXEncoderSpec, RectXEncodeChannels>
  ): GenerateBaseEncodeSpec<PlotRectXEncoderSpec> {
    const markEncoder = this.convertSimpleMarkEncode(encode);
    const scaleXId = this.getScaleId('x');
    const res: GenerateBaseEncodeSpec<PlotRectXEncoderSpec> = {
      y: (datum: any, el: IElement, params: any) => {
        return 0;
      },
      y1: (datum: any, el: IElement, params: any) => {
        return params.viewBox.height();
      }
    };

    if (isArray(markEncoder.x?.field)) {
      res.x = { field: markEncoder.x.field[0], scale: markEncoder.x.scale };
      res.x1 = { field: markEncoder.x.field[1], scale: markEncoder.x.scale };
    } else {
      const xAccessor = getFieldAccessor(markEncoder.x.field);
      res.x = (datum: any, el: IElement, params: any) => {
        const xVals = xAccessor(datum);
        const scale = params[scaleXId];

        return isArray(xVals) ? scale.scale(xVals[0]) : scale.scale(xVals);
      };
      res.x1 = (datum: any, el: IElement, params: any) => {
        const scale = params[scaleXId];
        const xVals = xAccessor(datum);

        if (isArray(xVals) && xVals.length > 1) {
          return scale.scale(xVals[1]);
        }

        if (isContinuous(scale.type)) {
          const domain = scale.domain();
          const min = Math.min.apply(null, domain);
          const max = Math.max.apply(null, domain);
          const baseValue = min > 0 ? min : max < 0 ? max : 0;

          return scale.scale(baseValue);
        }
        return scale.scale(xVals) + (scale.bandwidth?.() ?? scale.step?.() ?? 0);
      };
    }

    if (markEncoder.stroke) {
      res.stroke = markEncoder.stroke;
    }
    if (markEncoder.color || markEncoder.group) {
      res.fill = markEncoder.color ?? markEncoder.group;
    } else {
      res.fill = this.spec.style?.fill ?? this.getPalette()?.[0];
    }

    return res;
  }
}
