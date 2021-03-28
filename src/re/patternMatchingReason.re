module PatternMatchingExampleReason = {
  let rec findIfExists = (element: 'any, list: list('any)): bool => {
    switch (list) {
    | [] => false
    | [head, ...tail] when head == element => true
    | [head, ...tail] when head != element => findIfExists(element, tail)
    };
  };
};

let does3001Exist =
  PatternMatchingExampleReason.findIfExists(3001, [1, 2, 3, 4, 3001]);
let does27Exist =
  PatternMatchingExampleReason.findIfExists(27, [1, 2, 3, 4]);

Js.log(does3001Exist);
Js.log(does27Exist);
