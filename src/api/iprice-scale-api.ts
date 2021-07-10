import { DeepPartial } from '../helpers/strict-type-checks';

import { PriceScaleOptions } from '../model/price-scale';

/** Interface to control chart's price scale */
export interface IPriceScaleApi {
	/**
	 * Applies new options to the price scale
	 *
	 * @param options - any subset of PriceScaleOptions
	 */
	applyOptions(options: DeepPartial<PriceScaleOptions>): void;

	/**
	 * Returns currently applied options of the price scale
	 *
	 * @returns full set of currently applied options, including defaults
	 */
	options(): Readonly<PriceScaleOptions>;

	/**
	 * Returns a width of the price scale if it's visible or 0 if invisible.
	 */
	width(): number;

	/**
	 * Sets price range of data.
	 *
	 * @param minValue - min price range of data.
	 * @param maxValue - max price range of data.
	 */
	setPriceRange(minValue: number, maxValue: number): void;
}
