import {
    createRouter
} from '@exponent/ex-navigation';

import WeightedCalc from '../src/WeightedCalc';
import GpaCalc from '../src/GpaCalc';
import FinalCalc from '../src/FinalCalc';
import Info from '../src/Info';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
    weighted: () => WeightedCalc,
    gpa: () => GpaCalc,
    final: () => FinalCalc,
    info: () => Info,
    rootNavigation: () => RootNavigation
}));
