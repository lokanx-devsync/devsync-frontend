import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faBars,
  faChartPie,
  faSpinner,
  faPlus,
  faCheckCircle,
  faStar,
  faTimesCircle,
  faIndustry,
  faPrint,
  faFilter,
  faComments,
  faPuzzlePiece,
  faThumbsDown,
  faThumbsUp,
  faFile,
  faSearchPlus,
  faEye,
  faTimes,
  faBalanceScale,
  faThLarge,
  faClone
} from "@fortawesome/free-solid-svg-icons";
import {faHandshake} from "@fortawesome/free-regular-svg-icons";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons";

export class FortawesomeConfig {
  static setupFortawesomeIcons(): void {
    library.add(
      faCoffee,
      faBars,
      faSpinner,
      faChartPie,
      faPlus,
      faCheckCircle,
      faStar,
      faHandshake,
      faTimesCircle,
      faIndustry,
      faPrint,
      faFilter,
      faComments,
      faPuzzlePiece,
      faThumbsDown,
      faThumbsUp,
      faStackOverflow,
      faFile,
      faSearchPlus,
      faEye,
      faTimes,
      faBalanceScale,
      faThLarge,
      faClone);
  }
}
