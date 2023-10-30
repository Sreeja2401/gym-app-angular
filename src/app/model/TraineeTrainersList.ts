export class TraineeTrainersList{
  constructor(username: string | undefined, trainersList: string[]) {
    this.username=username;
    this.trainersList=trainersList;
  }

  username:string|undefined
  trainersList:string[]|undefined
}
