import {renderElement} from './components/utils';
import {getMainMenuLayout} from './components/main-menu';
import {getTripFiltersLayout} from './components/filters';
import {getTripEventEditFormLayout} from './components/events';
import {getTripInfoLayout, getTripEventsSortLayout, getTripDaysContainerLayout} from './components/content';

const tripInfoContainer = document.querySelector(`.trip-info`);
const tripControlsContainer = document.querySelector(`.trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);

renderElement(tripInfoContainer, getTripInfoLayout(), `afterbegin`);
renderElement(tripControlsContainer, getMainMenuLayout());
renderElement(tripControlsContainer, getTripFiltersLayout());

renderElement(tripEventsContainer, getTripEventsSortLayout());
renderElement(tripEventsContainer, getTripEventEditFormLayout());
renderElement(tripEventsContainer, getTripDaysContainerLayout());
