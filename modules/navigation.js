import { listSection, addANewSection, contactSection } from './html-const-variables.js';

const goToListSection = () => {
  listSection.classList.remove('hide');
  addANewSection.classList.add('hide');
  contactSection.classList.add('hide');
};

const goToAddSection = () => {
  listSection.classList.add('hide');
  addANewSection.classList.remove('hide');
  contactSection.classList.add('hide');
};

const goToContactSection = () => {
  listSection.classList.add('hide');
  addANewSection.classList.add('hide');
  contactSection.classList.remove('hide');
};

export { goToListSection, goToAddSection, goToContactSection };