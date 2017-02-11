import {
    createRouter
} from '@exponent/ex-navigation';

import WeightedCalc from '../src/WeightedCalc';
import OtherCalc from '../src/OtherCalc';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
    weighted: () => WeightedCalc,
    other: () => OtherCalc,
    rootNavigation: () => RootNavigation
}));
