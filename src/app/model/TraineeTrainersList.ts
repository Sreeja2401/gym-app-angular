export class TraineeTrainersList {
  username: string | undefined
  trainersList: string[] | undefined

  constructor(username: string | undefined, trainersList: string[]) {
    this.username = username;
    this.trainersList = trainersList;
  }
}
