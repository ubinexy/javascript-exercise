// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  introduce() {
    return `${this.basicIntroduce()} I am a Worker. I have a job.`;
  }
}
