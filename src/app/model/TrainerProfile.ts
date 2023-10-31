import {TraineeDto} from "./TraineeDto";

export class TrainerProfile {
  username: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  specialization: string | undefined
  active: boolean | undefined
  traineeList: TraineeDto[] | undefined
  email: string | undefined
}
