import { Job } from 'bull';
import { Process, Processor } from '@nestjs/bull';

@Processor('emails')
export class SendMailWithTweetsJob {
  @Process()
  handle(job: Job) {
    console.log(JSON.stringify(job.data));
  }
}
