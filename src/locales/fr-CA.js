import { t_account_fr } from "./Components/Account/fr"
import { t_activities_fr } from "./Components/Activities/fr"
import { t_evaluations_fr } from "./Components/Evaluations/fr"
import { t_settings_fr } from "./Components/Settings/fr"
import { t_homeDashboard_fr } from "./Components/HomeDashboard/fr"

export const fr = {
    dashboardStrings: t_homeDashboard_fr,
    languageName: 'Français',
    account: t_account_fr,
    activities: t_activities_fr,
    evaluations: t_evaluations_fr,
    settings: t_settings_fr,
    $vuetify: {
        badge: 'Badge',
        close: 'Fermer',
        dataIterator: {
          noResultsText: 'Aucun enregistrement correspondant trouvé',
          loadingText: `Chargement de l'élément...`
        },
        dataTable: {
          itemsPerPageText: 'Lignes par page :',
          ariaLabel: {
            sortDescending: 'Tri décroissant.',
            sortAscending: 'Tri croissant.',
            sortNone: 'Non trié.',
            activateNone: 'Activer pour supprimer le tri.',
            activateDescending: 'Activer pour trier par ordre décroissant.',
            activateAscending: 'Activer pour trier par ordre croissant.'
          },
          sortBy: 'Trier par'
        },
        dataFooter: {
          itemsPerPageText: 'Élements par page :',
          itemsPerPageAll: 'Tous',
          nextPage: 'Page suivante',
          prevPage: 'Page précédente',
          firstPage: 'Première page',
          lastPage: 'Dernière page',
          pageText: '{0}-{1} de {2}'
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
        noDataText: 'Aucune donnée disponible',
        carousel: {
          prev: 'Visuel précédent',
          next: 'Visuel suivant',
          ariaLabel: {
            delimiter: 'Diapositive {0} de {1}'
          }
        },
        calendar: {
          moreEvents: '{0} de plus'
        },
        input: {
          clear: 'Clear {0}',
          prependAction: '{0} prepended action',
          appendAction: '{0} appended action'
        },
        fileInput: {
          counter: '{0} fichier(s)',
          counterSize: '{0} fichier(s) ({1} au total)'
        },
        timePicker: {
          am: 'AM',
          pm: 'PM'
        },
        pagination: {
          ariaLabel: {
            root: 'Navigation de pagination',
            next: 'Page suivante',
            previous: 'Page précédente',
            page: 'Aller à la page {0}',
            currentPage: 'Page actuelle, Page {0}',
            first: 'First page',
            last: 'Last page'
          }
        },
        rating: {
          ariaLabel: {
            item: 'Note de {0} sur {1}'
          }
        },
        loading: 'Loading...',
        infiniteScroll: {
          loadMore: 'Load more',
          empty: 'No more'
        }
      
    }
}