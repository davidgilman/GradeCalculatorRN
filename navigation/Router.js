import {
    createRouter
} from '@exponent/ex-navigation';

import WeightedCalc from '../src/WeightedCalc';
import GpaCalc from '../src/GpaCalc';
import FinalCalc from '../src/FinalCalc';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
    weighted: () => WeightedCalc,
    gpa: () => GpaCalc,
    final: () => FinalCalc,
    rootNavigation: () => RootNavigation
}));
