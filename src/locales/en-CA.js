import { account_en } from "./Components/Account/en"
import { activities_en } from "./Components/Activities/en"
import { evaluations_en } from "./Components/Evaluations/en"
import { settings_en } from "./Components/Settings/en"

export const en = {
    dashboardStrings: {
        greetings: {
            morning: 'Good morning, {name}!',
            afternoon: 'Good afternoon, {name}!',
            evening: 'Good evening, {name}!'
        }
    },
    languageName: 'English',
    activities: activities_en,
    account: account_en,
    evaluations: evaluations_en,
    settings: settings_en,
    $vuetify: {
        badge: 'Badge',
        close: 'Close',
        dataIterator: {
          noResultsText: 'No matching records found',
          loadingText: 'Loading items...'
        },
        dataTable: {
          itemsPerPageText: 'Rows per page:',
          ariaLabel: {
            sortDescending: 'Sorted descending.',
            sortAscending: 'Sorted ascending.',
            sortNone: 'Not sorted.',
            activateNone: 'Activate to remove sorting.',
            activateDescending: 'Activate to sort descending.',
            activateAscending: 'Activate to sort ascending.'
          },
          sortBy: 'Sort by'
        },
        dataFooter: {
          itemsPerPageText: 'Items per page:',
          itemsPerPageAll: 'All',
          nextPage: 'Next page',
          prevPage: 'Previous page',
          firstPage: 'First page',
          lastPage: 'Last page',
          pageText: '{0}-{1} of {2}'
        },
        dateRangeInput: {
          divider: 'to'
        },
        datePicker: {
          ok: 'OK',
          cancel: 'Cancel',
          range: {
            title: 'Select dates',
            header: 'Enter dates'
          },
          title: 'Select date',
          header: 'Enter date',
          input: {
            placeholder: 'Enter date'
          }
        },
        noDataText: 'No data available',
        carousel: {
          prev: 'Previous visual',
          next: 'Next visual',
          ariaLabel: {
            delimiter: 'Carousel slide {0} of {1}'
          }
        },
        calendar: {
          moreEvents: '{0} more'
        },
        input: {
          clear: 'Clear {0}',
          prependAction: '{0} prepended action',
          appendAction: '{0} appended action'
        },
        fileInput: {
          counter: '{0} files',
          counterSize: '{0} files ({1} in total)'
        },
        timePicker: {
          am: 'AM',
          pm: 'PM'
        },
        pagination: {
          ariaLabel: {
            root: 'Pagination Navigation',
            next: 'Next page',
            previous: 'Previous page',
            page: 'Go to page {0}',
            currentPage: 'Page {0}, Current page',
            first: 'First page',
            last: 'Last page'
          }
        },
        rating: {
          ariaLabel: {
            item: 'Rating {0} of {1}'
          }
        },
        loading: 'Loading...',
        infiniteScroll: {
          loadMore: 'Load more',
          empty: 'No more'
        }
    },
}