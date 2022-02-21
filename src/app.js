import ResultsPage from './components/results-page';
import aa from 'search-insights';

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
  }

  _initSearch() {
    this.resultPage = new ResultsPage();
  }
}

const app = new SpencerAndWilliamsSearch();

// Create insights middleware
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares'

const insightsMiddleware = createInsightsMiddleware({
  insightsClient: aa,
});

// Connect InstantSearch with insights middleware
const search = instantsearch({
  searchClient,
  indexName: 'test_swproducts',
})

search.use(insightsMiddleware)

// Set usertoken
aa('setUserToken', 'user-token-1');

aa('viewedObjectIDs', {
  userToken: "user-1",
  index: 'test_swproducts',
  eventName: 'Target object viewed',
  objectIDs: ['9990181', '9999119', '9990127', '9986149', '9958096', '9783171']
});

// Send click and conversion events via hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item(hit, bindEvent) {
        return `
        <a class="result-hit">
          <div class="result-hit__image-container">
            <img class="result-hit__image" src="${hit.image}" />
          </div>
          <div class="result-hit__details">
            <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
            <p class="result-hit__price">$${hit.price}</p>
          </div>
          <div class="result-hit__controls">
            <button id="view-item" class="result-hit__view" data-algolia-objectid="${hit.objectID}" ${bindEvent('click', hit, 'Product viewed')}>View</button>
            <button id="add-to-cart" class="result-hit__cart" data-algolia-objectid="${hit.objectID}" ${bindEvent('conversion', hit, 'Product added to cart')}>Add To Cart</button>
          </div>
        </a>
        `
      },
    },
  })
);
