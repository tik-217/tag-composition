export interface ICoord {
  x: number;
  y: number;
}

export interface IState {
  initialLayout: number[];
  bestScore: string;
  zeroPosInit: ICoord;
  assembleQuickly: boolean;
  score: number;
}

export interface IZeroEnvironment {
  north: ICoord;
  east: ICoord;
  south: ICoord;
  west: ICoord;
}
