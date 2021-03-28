module PatternMatchingExample = {
  let rec findIfExists = (element: 'any, list: list<'any>): bool => {
    switch list {
    | list{} => false
    | list{head, ...tail} when head == element => true
    | list{head, ...tail} when head != element => findIfExists(element, tail)
    }
  }
}

let does3001Exist = PatternMatchingExample.findIfExists(3001, list{1, 2, 3, 3001})
let does27Exist = PatternMatchingExample.findIfExists(3001, list{1, 2, 3})

Js.log(does3001Exist)
Js.log(does27Exist)