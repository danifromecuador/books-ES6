import {
  navList, navAdd, navContact, listSection, addANewSection, contactSection,
} from './html-const-variables.js';

const goToListSection = () => {
  navList.addEventListener('click', () => {
    listSection.classList.remove('hide');
    addANewSection.classList.add('hide');
    contactSection.classList.add('hide');
  });
};

const goToAddSection = () => {
  navAdd.addEventListener('click', () => {
    listSection.classList.add('hide');
    addANewSection.classList.remove('hide');
    contactSection.classList.add('hide');
  });
};

const goToContactSection = () => {
  navContact.addEventListener('click', () => {
    listSection.classList.add('hide');
    addANewSection.classList.add('hide');
    contactSection.classList.remove('hide');
  });
};

export { goToListSection, goToAddSection, goToContactSection };