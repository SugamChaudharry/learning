enum SeatChoice {
  AISLE, // = 0
  MIDDLE,// = 1
  WINDOW,// = 2
  FOURTH,// = 3
}

const hcSeat = SeatChoice.AISLE;

enum SeatChoice2 {
  AISLE = 5,
  MIDDLE, // --> 6
  WINDOW = 8,
  FOURTH, // --> 6
}
const enum SeatChoice3 { // const make javascript code less
  AISLE = 'sugam',
//   MIDDLE, // give him number or string or somthing
  WINDOW = 8,
  FOURTH, // altomactacly it will we 9
}