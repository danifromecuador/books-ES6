import { goToAddSection, goToContactSection, goToListSection } from './modules/navigation.js';
import add from './modules/add-a-book.js';
// import { showList } from './modules/render.js';

goToListSection();
goToAddSection();
goToContactSection();

add();