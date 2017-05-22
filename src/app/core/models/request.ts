import * as moment from 'moment';

export class Request {
  public date: string;
  public time: string;
  public senderUsername: string;
  constructor() {
    this.senderUsername = '';
    this.date = moment(new Date()).format('YYYY/MM/DD');
    this.time = moment(new Date()).format('HH:MM')
  }
}
