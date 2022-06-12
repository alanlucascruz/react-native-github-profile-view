import Moment from 'moment';

Moment.locale('pt-BR');

export const formatDate = date => {
  return Moment(date).format('DD/MM/YYYY');
};
