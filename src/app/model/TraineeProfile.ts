import {TrainerDto} from "./TrainerDto";


export class TraineeProfile {
  username: string  |undefined
  firstName: string  |undefined
  lastName: string  |undefined
  dateOfBirth:string=""
  email:string|undefined
  address: string  |undefined
  active: boolean |undefined
  trainersList:TrainerDto[] |undefined

}
